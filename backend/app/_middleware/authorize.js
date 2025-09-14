const jwt = require('express-jwt');
const AppDataSource = require('../../database');

// JWT secret - in production, use environment variable
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

module.exports = authorize;

function authorize(roles = []) {
  // roles param can be a single role string (e.g. Role.User or 'User')
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return [
    // authenticate JWT token and attach user to request object (req.user)
    jwt({ secret: JWT_SECRET, algorithms: ['HS256'] }),

    // authorize based on user role
    async (req, res, next) => {
      const User = AppDataSource.getRepository('User');
      const user = await User.findOne({ where: { id: req.user.sub } });

      if (!user || (roles.length && !roles.includes(user.role))) {
        // user no longer exists or role not authorized
        return res.status(401).json({ message: 'Unauthorized' });
      }

      // authentication and authorization successful
      next();
    },
  ];
}
