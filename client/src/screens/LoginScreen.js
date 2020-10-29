import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login, clearError } from '../actions/userActions'

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)

  const { loading, error, userInfo } = userLogin

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  const clearErrorHandler = () => {
    dispatch(clearError())
  }

  if (userInfo) {
    history.push('/')
  }

  return (
    <FormContainer>
      <h2>Sign In</h2>
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

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link className='ml-2' to={'/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
