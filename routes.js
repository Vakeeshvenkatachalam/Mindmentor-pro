const express = require('express');
const router = express.Router();
const { addMood, getMoods } = require('../controllers/moodController');

// POST /api/mood to add mood
router.post('/', addMood);

// GET /api/mood to get all moods
router.get('/', getMoods);

module.exports = router;
