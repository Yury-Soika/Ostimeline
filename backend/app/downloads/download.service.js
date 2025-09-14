const downloads = require('../../config/downloads');

module.exports = {
  getAll,
  getById,
};

async function getAll() {
  return downloads;
}

async function getById(id) {
  return downloads.find(download => download.id === parseInt(id));
}
