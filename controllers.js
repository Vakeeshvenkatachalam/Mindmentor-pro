const Mood = require('../models/Mood');

// Add a mood
exports.addMood = async (req, res) => {
  try {
    const newMood = new Mood({ mood: req.body.mood, date: new Date() });
    const savedMood = await newMood.save();
    res.status(201).json(savedMood);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save mood', error });
  }
};

// Get all moods
exports.getMoods = async (req, res) => {
  try {
    const moods = await Mood.find().sort({ date: -1 });
    res.status(200).json(moods);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get moods', error });
  }
};
