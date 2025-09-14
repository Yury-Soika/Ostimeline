const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const AppDataSource = require('../../database');

// JWT secret - in production, use environment variable
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

module.exports = {
  authenticate,
  getAll,
  create,
  update,
  delete: _delete,
};

async function authenticate({ username, password }) {
  const userRepository = AppDataSource.getRepository('User');
  const user = await userRepository.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    throw 'Username or password is incorrect';
  }

  const { passwordHash, ...userWithoutHash } = user;
  const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET);

  return {
    ...userWithoutHash,
    token,
  };
}

async function getAll() {
  const userRepository = AppDataSource.getRepository('User');
  return await userRepository.find({
    select: ['id', 'firstName', 'lastName', 'username', 'role', 'createdAt'],
  });
}

async function create(userParam) {
  const userRepository = AppDataSource.getRepository('User');

  if (
    await userRepository.findOne({ where: { username: userParam.username } })
  ) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  const user = userRepository.create(userParam);

  if (userParam.password) {
    user.passwordHash = bcrypt.hashSync(userParam.password, 10);
  }

  return await userRepository.save(user);
}

async function update(id, userParam) {
  const userRepository = AppDataSource.getRepository('User');
  const user = await userRepository.findOne({ where: { id } });

  if (!user) throw 'User not found';
  if (
    user.username !== userParam.username &&
    (await userRepository.findOne({ where: { username: userParam.username } }))
  ) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  if (userParam.password) {
    userParam.passwordHash = bcrypt.hashSync(userParam.password, 10);
  }

  Object.assign(user, userParam);

  return await userRepository.save(user);
}

async function _delete(id) {
  const userRepository = AppDataSource.getRepository('User');
  await userRepository.delete(id);
}
