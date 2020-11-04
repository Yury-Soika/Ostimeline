const db = require('../_helpers/db');
const Post = db.Post;

module.exports = {
  getAll,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await Post.find();
}

async function create(postParam) {
  const post = new Post(postParam);

  return await post.save();
}

async function update(id, postParam) {
  const post = await Post.findById(id);

  // validate
  if (!post) throw 'Post not found';
  
  // copy userParam properties to user
  Object.assign(post, postParam);

  return await post.save();
}

async function _delete(id) {
  await Post.findByIdAndRemove(id);
}