import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userControllers.js'
import protect from '../middleware/authMiddlewere.js'

const router = express.Router()

router.post('/users/login', authUser)

router.post('/users/register', registerUser)

router.get('/users/profile', protect, getUserProfile)
router.put('/users/profile', protect)

export default router
