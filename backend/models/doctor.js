import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: String,
  type: { type: String, enum: ['clinic', 'doctor'] },
  specialty: String,
  experience: Number,
  location: String,
  fee: Number,
  rating: Number,
  stories: Number,
  available: Boolean,
  gender: String
});

export default mongoose.model('Doctor', doctorSchema);
