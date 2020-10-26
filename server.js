const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

//init middleware
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 5000

//port listener
app.listen(PORT, () => {
  console.log(`The app listening at http://localhost:${PORT}`)
})
