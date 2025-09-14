const AppDataSource = require('../../database');

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  const postRepository = AppDataSource.getRepository('Post');
  return await postRepository.find({
    order: { createdAt: 'DESC' },
  });
}

async function getById(id) {
  const postRepository = AppDataSource.getRepository('Post');
  return await postRepository.findOne({ where: { id } });
}

async function create(postParam) {
  const postRepository = AppDataSource.getRepository('Post');

  const post = postRepository.create(postParam);
  return await postRepository.save(post);
}

async function update(id, postParam) {
  const postRepository = AppDataSource.getRepository('Post');
  const post = await postRepository.findOne({ where: { id } });

  // validate
  if (!post) throw 'Post not found';

  // copy postParam properties to post
  Object.assign(post, postParam);

  return await postRepository.save(post);
}

async function _delete(id) {
  const postRepository = AppDataSource.getRepository('Post');
  await postRepository.delete(id);
}
