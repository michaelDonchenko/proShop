import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utills/generateToken.js'

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    res.status(401)
    throw new Error('User with that email does not exists')
  }

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid credentials')
  }
})

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, passwordCheck } = req.body

  if (!email || !password || !passwordCheck || !name) {
    res.status(400)
    throw new Error('Not all fields have been entered.')
  }

  if (password.length < 5) {
    res.status(400)
    throw new Error('The password needs to be at least 5 characters long.')
  }

  if (password !== passwordCheck) {
    res.status(400)
    throw new Error('Enter the same password twice for verification.')
  }

  const existingUser = await User.findOne({ email: email })
  if (existingUser) {
    res.status(400)
    throw new Error('An account with this email already exists.')
  }

  const regex = /^[A-Za-z0-9_-]+$/
  let result = regex.test(name)
  if (result === false) {
    res.status(400)
    throw new Error(
      `Your display name is not valid. Only regular characters and numbers allowed`
    )
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  }
})

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find()

  if (users) {
    res.json(users)
  } else {
    res.status(404)
    throw new Error('Users not found')
  }
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User Deleted succefully' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')
  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
  authUser,
  getUserProfile,
  registerUser,
  getAllUsers,
  deleteUser,
  getUserById,
  updateUser,
}
