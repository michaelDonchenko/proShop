import express from 'express'
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getLoggedinUserOrders,
  getOrders,
  updateOrderToDelivered,
} from '../controllers/orderControllers.js'
import protect, { isAdmin } from '../middleware/authMiddlewere.js'

const router = express.Router()

router.post('/orders', protect, addOrderItems)
router.get('/orders', protect, isAdmin, getOrders)
router.get('/orders/myorders', protect, getLoggedinUserOrders)

router.get('/orders/:id', protect, getOrderById)
router.put('/orders/:id/pay', protect, updateOrderToPaid)
router.put('/orders/:id/deliver', protect, isAdmin, updateOrderToDelivered)

export default router
