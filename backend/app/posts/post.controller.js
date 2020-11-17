const express = require('express');
const router = express.Router();
const postService = require('./post.service');
const authorize = require('../_middleware/authorize');
const Role = require('../_helpers/role');

// routes
router.post('/', create);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
  authorize(),
  postService.create(req.body)
    .then(post => res.json(post))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  postService.getAll()
    .then(posts => res.json(posts))
    .catch(err => next(err));
}

function update(req, res, next) {
  authorize(),
  postService.update(req.params.id, req.body)
    .then(post => res.json(post))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  authorize(),
  postService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}