import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = () => {
  mongoose
    .connect(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('MongoDB Connected')
    })
    .catch((err) => {
      console.log(err.message)
    })
}

mongoose.set('useCreateIndex', true)

export default connectDB
