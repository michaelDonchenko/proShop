import express from 'express'
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getLoggedinUserOrders,
} from '../controllers/orderControllers.js'
import protect from '../middleware/authMiddlewere.js'

const router = express.Router()

router.post('/orders', protect, addOrderItems)
router.get('/orders/myorders', protect, getLoggedinUserOrders)

router.get('/orders/:id', protect, getOrderById)
router.put('/orders/:id/pay', protect, updateOrderToPaid)

export default router
