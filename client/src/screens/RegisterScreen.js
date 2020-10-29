import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register, clearError } from '../actions/userActions'

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

  const dispatch = useDispatch()
  const userRegister = useSelector((state) => state.userRegister)

  const { loading, error, userInfo } = userRegister

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(name, email, password, passwordCheck))
  }

  const clearErrorHandler = () => {
    dispatch(clearError())
  }

  if (userInfo) {
    history.push('/')
  }

  return (
    <FormContainer>
      <h2>Sign Up</h2>
      {error && (
        <Message variant='danger'>
          {error}{' '}
          <Link className='float-right'>
            <i onClick={clearErrorHandler} class='fas fa-times'></i>
          </Link>
        </Message>
      )}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => (setName(e.target.value), clearErrorHandler())}
            autoComplete='off'
            required='true'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => (setEmail(e.target.value), clearErrorHandler())}
            autoComplete='off'
            required='true'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => (setPassword(e.target.value), clearErrorHandler())}
            autoComplete='off'
            required='true'
            minLength='5'
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={passwordCheck}
            onChange={(e) => (
              setPasswordCheck(e.target.value), clearErrorHandler()
            )}
            autoComplete='off'
            required='true'
            minLength='5'
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Already have an account?{' '}
          <Link className='ml-2' to={'/login'}>
            Log In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
