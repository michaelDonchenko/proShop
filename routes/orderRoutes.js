import express from 'express'
import { addOrderItems } from '../controllers/orderControllers.js'
import protect from '../middleware/authMiddlewere.js'

const router = express.Router()

router.post('/orders', protect, addOrderItems)

export default router
