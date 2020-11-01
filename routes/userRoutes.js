import express from 'express'
import {
  authUser,
  getAllUsers,
  getUserProfile,
  registerUser,
} from '../controllers/userControllers.js'
import protect, { isAdmin } from '../middleware/authMiddlewere.js'

const router = express.Router()

router.post('/users/login', authUser)

router.post('/users/register', registerUser)

router.get('/users/profile', protect, getUserProfile)

router.put('/users/profile', protect)

router.get('/users/users', protect, isAdmin, getAllUsers)

export default router
