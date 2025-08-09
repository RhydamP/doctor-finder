// backend/routes/doctorRoutes.js
import express from 'express'
import {
  getDoctors,
  getDoctorById,
  getFilters,
  searchDoctors
} from '../controllers/doctorController.js'

const router = express.Router()

router.get('/', getDoctors)
router.get('/filters', getFilters)
router.get('/search', searchDoctors)
router.get('/:id', getDoctorById)

export default router
