const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  pageName: { type: String }
});

schema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    // remove these props when object is serialized
    delete ret._id;
    delete ret.pageName;
  }
});

module.exports = mongoose.model('Page', schema);

