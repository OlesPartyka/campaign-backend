const Campaign = require('../models/Campaign');

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({ error: 'Error fetching campaigns' });
  }
};

exports.createCampaign = async (req, res) => {
  try {
    const newCampaign = new Campaign(req.body);
    await newCampaign.save();
    res.status(201).json(newCampaign);
  } catch (error) {
    console.error('Error creating campaign:', error);
    res.status(400).json({ error: 'Error creating campaign' });
  }
};

exports.updateCampaign = async (req, res) => {
  try {
    const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (!updatedCampaign) {
      return res.status(404).json({ error: 'Campaign not found' });
    }

    res.json(updatedCampaign);
  } catch (error) {
    console.error('Error updating campaign:', error);
    res.status(400).json({ error: 'Error updating campaign' });
  }
};

exports.deleteCampaign = async (req, res) => {
  try {
    const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id);
    
    if (!deletedCampaign) {
      return res.status(404).json({ error: 'Campaign not found' });
    }

    res.json({ message: 'Campaign deleted' });
  } catch (error) {
    console.error('Error deleting campaign:', error);
    res.status(400).json({ error: 'Error deleting campaign' });
  }
};
