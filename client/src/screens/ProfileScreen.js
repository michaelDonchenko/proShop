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
      <Col sm={12} lg={4}>
        <h3>User Profile</h3>
        {userInfo ? (
          <ListGroup>
            <ListGroup.Item>ID: {userInfo._id}</ListGroup.Item>
            <ListGroup.Item>Name: {userInfo.name}</ListGroup.Item>
            <ListGroup.Item>Email: {userInfo.email}</ListGroup.Item>
            <ListGroup.Item>
              Admin: {userInfo.isAdmin ? 'True' : 'False'}
            </ListGroup.Item>
          </ListGroup>
        ) : (
          <h3>Cannot find user...</h3>
        )}
      </Col>

      <Col sm={12} lg={8}>
        <h3>My Orders</h3>
      </Col>
    </Row>
  )
}

export default ProfileScreen
