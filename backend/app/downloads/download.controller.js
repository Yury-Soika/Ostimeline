const express = require('express');
const router = express.Router();
const downloadService = require('./download.service');

router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;

function getAll(req, res, next) {
  downloadService.getAll()
    .then(downloads => res.json({downloads: downloads}))
    .catch(err => next(err));
}

function getById(req, res, next) {
  downloadService.getById(req.params.id)
    .then((download) => res.download(download.location))
    .catch(err => next(err));
}