const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const authorize = require('../_middleware/authorize');
const Role = require('../_helpers/role');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
  userService.authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
}

function register(req, res, next) {
  authorize(Role.Admin),
  userService.create(req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  authorize(Role.Admin),
  userService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}

function update(req, res, next) {
  authorize(Role.Admin),
  userService.update(req.params.id, req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  authorize(Role.Admin),
  userService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}