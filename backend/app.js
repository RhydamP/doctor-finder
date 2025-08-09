// app.js
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import doctorRoutes from './routes/doctorRoutes.js'
import suggestionRoutes from './routes/suggestions.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use(morgan('dev'));
app.use('/api/doctors/suggestions', suggestionRoutes);
app.use('/api/doctors', doctorRoutes)

export default app
