import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import orderRoutes from './routes/orderRoutes.js'

const app = express()
dotenv.config()

//DB connection
connectDB()

//init middleware
app.use(express.json())

//init routes
app.use('/api', productRoutes)
app.use('/api', userRoutes)
app.use('/api', orderRoutes)

//errorHandler
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

//port listener
app.listen(PORT, () => {
  console.log(`The app listening at http://localhost:${PORT}`)
})
