import express from 'express'
import protect, { isAdmin } from '../middleware/authMiddlewere.js'
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  createProductReview,
} from '../controllers/productControllers.js'

const router = express.Router()

router.get('/products', getProducts)

router.post('/products', protect, isAdmin, createProduct)

router.get('/products/:id', getProductById)

router.delete('/products/:id', protect, isAdmin, deleteProduct)

router.put('/products/:id', protect, isAdmin, updateProduct)

router.post('/products/:id/reviews', protect, createProductReview)

export default router
