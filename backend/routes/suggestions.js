// routes/suggestions.js
import express from 'express';
import Doctor from '../models/doctor.js';

const router = express.Router();

// GET /api/doctors/suggestions
router.get('/', async (req, res) => {
  try {
    const { field, q } = req.query;
    if (!field || !['name', 'location'].includes(field)) {
      return res.status(400).json({ error: 'Invalid field' });
    }

    const filter = q
      ? { [field]: { $regex: q, $options: 'i' } }
      : {};

    const results = await Doctor.distinct(field, filter);

    if (!results.length) {
      return res.json({ suggestions: [] });
    }

    // Limit to top 10 suggestions
    res.json({ suggestions: results.slice(0, 10) });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
