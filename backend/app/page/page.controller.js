const express = require('express');
const router = express.Router();
const pageService = require('./page.service');

router.get('/:pageName', getPage);

module.exports = router;

function getPage(req, res, next) {
  pageService.getPage(req.params.pageName)
    .then(page => res.json({page: page}))
    .catch(err => next(err) );
}