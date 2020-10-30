import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup } from 'react-bootstrap'

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  if (!userInfo) {
    history.push('/')
  }

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
      </Col>
    </Row>
  )
}

export default ProfileScreen
