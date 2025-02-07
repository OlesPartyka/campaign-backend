const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  keywords: { type: [String], required: true },
  bidAmount: { type: Number, required: true, min: 1 },
  fund: { type: Number, required: true, min: [0, 'Fund must be positive'] },
  status: { type: Boolean, default: true },
  town: { type: String, required: true },
  radius: { type: Number, required: true, min: 1 },
});

const Campaign = mongoose.model('Campaign', CampaignSchema);

module.exports = Campaign;
