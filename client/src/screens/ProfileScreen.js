import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Table, Button } from 'react-bootstrap'
import { listUserOrders } from '../actions/orderActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Link } from 'react-router-dom'

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderListUser = useSelector((state) => state.orderListUser)
  const { orders, loadingOrders, errorOrders } = orderListUser

  if (!userInfo) {
    history.push('/')
  }

  useEffect(() => {
    dispatch(listUserOrders())
  }, [])

  return (
    <Row>
      <Col sm={12} lg={5}>
        <h3>User Profile</h3>
        {userInfo ? (
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <p>ID: {userInfo._id}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Name: {userInfo.name}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Email: {userInfo.email}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p> Admin: {userInfo.isAdmin ? 'True' : 'False'} </p>
            </ListGroup.Item>
          </ListGroup>
        ) : (
          <h3>Cannot find user...</h3>
        )}
      </Col>

      <Col sm={12} lg={7}>
        <h3>My Orders</h3>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : orders && orders.length === 0 ? (
          <h4>You don't have any orders yet.</h4>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className='fas fa-times'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <i
                          className='fas fa-times'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      <Link to={`/order/${order._id}`}>
                        <Button className='btn-sm' variant='light'>
                          Details
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  )
}

export default ProfileScreen
