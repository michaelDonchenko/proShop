import express from 'express'
import {
  getProductById,
  getProducts,
} from '../controllers/productControllers.js'

const router = express.Router()

router.get('/products', getProducts)

router.get('/products/:id', getProductById)

export default router
