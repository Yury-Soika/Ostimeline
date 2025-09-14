const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const AppDataSource = require('../../database');
const User = AppDataSource.getRepository('User');

module.exports = {
  authenticate,
  getAll,
  create,
  update,
  delete: _delete,
};

async function authenticate({ username, password }) {
  const user = await User.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    throw 'Username or password is incorrect';
  }

  const { passwordHash, ...userWithoutHash } = user;
  const token = jwt.sign({ sub: user.id, role: user.role }, config.secret);

  return {
    ...userWithoutHash,
    token,
  };
}

async function getAll() {
  return await User.find({
    select: ['id', 'firstName', 'lastName', 'username', 'role', 'createdAt'],
  });
}

async function create(userParam) {
  if (await User.findOne({ where: { username: userParam.username } })) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  const user = User.create(userParam);

  if (userParam.password) {
    user.passwordHash = bcrypt.hashSync(userParam.password, 10);
  }

  return await User.save(user);
}

async function update(id, userParam) {
  const user = await User.findOne({ where: { id } });

  if (!user) throw 'User not found';
  if (
    user.username !== userParam.username &&
    (await User.findOne({ where: { username: userParam.username } }))
  ) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  if (userParam.password) {
    userParam.passwordHash = bcrypt.hashSync(userParam.password, 10);
  }

  Object.assign(user, userParam);

  return await User.save(user);
}

async function _delete(id) {
  await User.delete(id);
}
