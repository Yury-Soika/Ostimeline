const express = require('express');
const router = express.Router();
const postService = require('./post.service');
const authorize = require('../_middleware/authorize');
const Role = require('../_helpers/role');

// routes
router.post('/', authorize(), create);
router.get('/', getAll);
router.put('/:id', authorize(), update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

function create(req, res, next) {
  postService.create(req.body)
    .then(post => res.json({post: post}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  postService.getAll()
    .then(posts => res.json({posts: posts}))
    .catch(err => next(err));
}

function update(req, res, next) {
  postService.update(req.params.id, req.body)
    .then(post => res.json({post: post}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  postService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}