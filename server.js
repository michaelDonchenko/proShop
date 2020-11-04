import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRouter.js'
import path from 'path'

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
app.use('/api', uploadRoutes)

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

//errorHandler
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

//port listener
app.listen(PORT, () => {
  console.log(`The app listening at http://localhost:${PORT}`)
})
