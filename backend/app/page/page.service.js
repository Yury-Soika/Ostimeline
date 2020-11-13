const db = require('../_helpers/db');
const Page = db.Page;

module.exports = { getPage };

async function getPage(pageName) {
  return await Page.find({ pageName: pageName });
}