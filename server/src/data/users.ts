import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true
  },
  {
    name: 'Jack Daniels',
    email: 'jack@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: false
  }
]

export default users;
 
