import express from 'express'
import {
  authUser,
  deleteUser,
  getAllUsers,
  getUserById,
  getUserProfile,
  registerUser,
  updateUser,
} from '../controllers/userControllers.js'
import protect, { isAdmin } from '../middleware/authMiddlewere.js'

const router = express.Router()

router.post('/users/login', authUser)

router.post('/users/register', registerUser)

router.get('/users/profile', protect, getUserProfile)

router.put('/users/profile', protect)

router.get('/users/users', protect, isAdmin, getAllUsers)

router.delete('/users/:id', protect, isAdmin, deleteUser)

router.get('/users/:id', protect, isAdmin, getUserById)

router.put('/users/:id', protect, isAdmin, updateUser)

export default router
