import Doctor from '../models/doctor.js';

export const getDoctors = async (req, res) => {
  const { location, specialty, gender, minExp, sort } = req.query;
  const query = {};

  if (location) query.location = new RegExp(location, 'i');
  if (specialty) query.specialty = new RegExp(specialty, 'i');
  if (gender) query.gender = gender;
  if (minExp) query.experience = { $gte: parseInt(minExp) };

  let doctors = Doctor.find(query);
  if (sort === 'experience') doctors = doctors.sort({ experience: -1 });
  if (sort === 'rating') doctors = doctors.sort({ rating: -1 });

  res.json(await doctors.exec());
};

// GET /api/doctors/:id
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' })
    res.json(doctor)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET /api/filters
export const getFilters = async (req, res) => {
  try {
    const specialties = await Doctor.distinct('specialty')
    const locations = await Doctor.distinct('location')
    const genders = await Doctor.distinct('gender')

    res.json({ specialties, locations, genders })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET /api/search?q=derma
export const searchDoctors = async (req, res) => {
  try {
    const { q } = req.query
    if (!q) return res.status(400).json({ message: 'Missing query param: q' })

    const regex = new RegExp(q, 'i')
    const results = await Doctor.find({
      $or: [
        { name: regex },
        { specialty: regex },
        { location: regex }
      ]
    }).limit(10)

    res.json(results)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
