const db = require('../_helpers/db');
const Download = db.Download;

module.exports = {
  getAll,
  getById
};

async function getAll() {
  return await Download.find();
}

async function getById(id) {
  return await Download.findById(id);
}