const mongoose = require('mongoose');

const seenStatusSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  film: {
    type: String,
    ref: 'Film',
  },
  seenStatus: {
    type: Boolean,
    required: true,
  },
});

const SeenStatus = mongoose.model('SeenStatus', seenStatusSchema);

module.exports = SeenStatus;
