import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Nat',
    email: 'nat@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Mike',
    email: 'mike@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users
