// seed.mjs
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Doctor from './models/doctor.js';

dotenv.config();

const doctors = [
  {
    name: 'Aesthetic Heart Dermatology & Cardiology Clinic',
    type: 'clinic',
    specialty: 'Dermatologist',
    experience: 12,
    location: 'Jayanagar, Bangalore',
    fee: 800,
    rating: 97,
    stories: 159,
    available: false,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Sheelavathi Natraj',
    type: 'doctor',
    specialty: 'Dermatologist',
    experience: 21,
    location: 'JP Nagar, Bangalore',
    fee: 800,
    rating: 94,
    stories: 1506,
    available: true,
    gender: 'Female'
  },
  {
    name: 'Care Plus Dental & Ortho Clinic',
    type: 'clinic',
    specialty: 'Dentist',
    experience: 8,
    location: 'Indiranagar, Bangalore',
    fee: 500,
    rating: 90,
    stories: 250,
    available: true,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Manoj Reddy',
    type: 'doctor',
    specialty: 'Cardiologist',
    experience: 15,
    location: 'Whitefield, Bangalore',
    fee: 1000,
    rating: 92,
    stories: 540,
    available: true,
    gender: 'Male'
  },
  {
    name: 'Skin Glow Clinic',
    type: 'clinic',
    specialty: 'Dermatologist',
    experience: 10,
    location: 'Koramangala, Bangalore',
    fee: 750,
    rating: 88,
    stories: 300,
    available: false,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Priya Menon',
    type: 'doctor',
    specialty: 'Gynecologist',
    experience: 18,
    location: 'HSR Layout, Bangalore',
    fee: 900,
    rating: 95,
    stories: 1200,
    available: true,
    gender: 'Female'
  },
  {
    name: 'Bright Vision Eye Hospital',
    type: 'clinic',
    specialty: 'Ophthalmologist',
    experience: 14,
    location: 'BTM Layout, Bangalore',
    fee: 650,
    rating: 91,
    stories: 480,
    available: true,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Ramesh Kumar',
    type: 'doctor',
    specialty: 'Orthopedic',
    experience: 20,
    location: 'Malleswaram, Bangalore',
    fee: 1100,
    rating: 94,
    stories: 800,
    available: true,
    gender: 'Male'
  },
  {
    name: 'Healthy Smiles Dental Care',
    type: 'clinic',
    specialty: 'Dentist',
    experience: 6,
    location: 'Hebbal, Bangalore',
    fee: 400,
    rating: 87,
    stories: 150,
    available: false,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Sneha Patil',
    type: 'doctor',
    specialty: 'Pediatrician',
    experience: 12,
    location: 'Rajajinagar, Bangalore',
    fee: 700,
    rating: 93,
    stories: 600,
    available: true,
    gender: 'Female'
  },
  {
    name: 'City Heart Institute',
    type: 'clinic',
    specialty: 'Cardiologist',
    experience: 22,
    location: 'Basavanagudi, Bangalore',
    fee: 1200,
    rating: 96,
    stories: 900,
    available: false,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Anil Sharma',
    type: 'doctor',
    specialty: 'Neurologist',
    experience: 16,
    location: 'Banashankari, Bangalore',
    fee: 1300,
    rating: 92,
    stories: 350,
    available: true,
    gender: 'Male'
  },
  {
    name: 'Clear Skin & Hair Clinic',
    type: 'clinic',
    specialty: 'Dermatologist',
    experience: 9,
    location: 'Marathahalli, Bangalore',
    fee: 600,
    rating: 89,
    stories: 240,
    available: true,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Kavitha Nair',
    type: 'doctor',
    specialty: 'ENT Specialist',
    experience: 13,
    location: 'Electronic City, Bangalore',
    fee: 800,
    rating: 91,
    stories: 420,
    available: false,
    gender: 'Female'
  },
  {
    name: 'Bangalore Ortho & Trauma Care',
    type: 'clinic',
    specialty: 'Orthopedic',
    experience: 17,
    location: 'Jayanagar, Bangalore',
    fee: 1000,
    rating: 93,
    stories: 510,
    available: true,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Arjun Rao',
    type: 'doctor',
    specialty: 'Urologist',
    experience: 11,
    location: 'Indiranagar, Bangalore',
    fee: 950,
    rating: 90,
    stories: 310,
    available: true,
    gender: 'Male'
  },
  {
    name: 'Well Women Health Clinic',
    type: 'clinic',
    specialty: 'Gynecologist',
    experience: 19,
    location: 'HSR Layout, Bangalore',
    fee: 850,
    rating: 94,
    stories: 700,
    available: true,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Rohit Desai',
    type: 'doctor',
    specialty: 'Dermatologist',
    experience: 14,
    location: 'Whitefield, Bangalore',
    fee: 750,
    rating: 88,
    stories: 280,
    available: false,
    gender: 'Male'
  },
  {
    name: 'Smile Bright Dental Studio',
    type: 'clinic',
    specialty: 'Dentist',
    experience: 5,
    location: 'Koramangala, Bangalore',
    fee: 450,
    rating: 86,
    stories: 140,
    available: true,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Meera Iyer',
    type: 'doctor',
    specialty: 'Psychiatrist',
    experience: 15,
    location: 'Malleswaram, Bangalore',
    fee: 900,
    rating: 92,
    stories: 400,
    available: true,
    gender: 'Female'
  },
  {
    name: 'Life Care Children Hospital',
    type: 'clinic',
    specialty: 'Pediatrician',
    experience: 12,
    location: 'BTM Layout, Bangalore',
    fee: 700,
    rating: 90,
    stories: 350,
    available: false,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Nitin Gupta',
    type: 'doctor',
    specialty: 'Cardiologist',
    experience: 20,
    location: 'Hebbal, Bangalore',
    fee: 1100,
    rating: 95,
    stories: 870,
    available: true,
    gender: 'Male'
  },
  {
    name: 'Prime Eye Care',
    type: 'clinic',
    specialty: 'Ophthalmologist',
    experience: 8,
    location: 'JP Nagar, Bangalore',
    fee: 600,
    rating: 88,
    stories: 210,
    available: true,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Neha Kapoor',
    type: 'doctor',
    specialty: 'Gynecologist',
    experience: 16,
    location: 'Rajajinagar, Bangalore',
    fee: 850,
    rating: 93,
    stories: 560,
    available: false,
    gender: 'Female'
  },
  {
    name: 'Metro Ortho Care',
    type: 'clinic',
    specialty: 'Orthopedic',
    experience: 14,
    location: 'HSR Layout, Bangalore',
    fee: 950,
    rating: 91,
    stories: 300,
    available: true,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Ajay Verma',
    type: 'doctor',
    specialty: 'Neurologist',
    experience: 18,
    location: 'Banashankari, Bangalore',
    fee: 1400,
    rating: 94,
    stories: 380,
    available: false,
    gender: 'Male'
  },
  {
    name: 'Healthy Heart Cardiology Center',
    type: 'clinic',
    specialty: 'Cardiologist',
    experience: 21,
    location: 'Basavanagudi, Bangalore',
    fee: 1200,
    rating: 96,
    stories: 640,
    available: true,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Shalini Rao',
    type: 'doctor',
    specialty: 'Dermatologist',
    experience: 10,
    location: 'Electronic City, Bangalore',
    fee: 700,
    rating: 89,
    stories: 260,
    available: true,
    gender: 'Female'
  },
  {
    name: 'Ortho Life Clinic',
    type: 'clinic',
    specialty: 'Orthopedic',
    experience: 13,
    location: 'Marathahalli, Bangalore',
    fee: 1000,
    rating: 92,
    stories: 420,
    available: false,
    gender: 'Mixed'
  },
  {
    name: 'Dr. Vikram Shetty',
    type: 'doctor',
    specialty: 'Urologist',
    experience: 12,
    location: 'Indiranagar, Bangalore',
    fee: 900,
    rating: 90,
    stories: 310,
    available: true,
    gender: 'Male'
  }
];


await mongoose.connect(process.env.MONGO_URI, {
  autoIndex: true,
});
console.log('✅ MongoDB Connected for Seeding');

await Doctor.deleteMany({});
await Doctor.insertMany(doctors);
console.log('✅ Sample doctors inserted!');

await mongoose.disconnect();
