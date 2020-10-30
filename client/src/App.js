import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path={'/'} exact component={Homescreen} />
          <Route path={'/product/:id'} exact component={ProductScreen} />
          <Route path={'/cart/:id?'} exact component={CartScreen} />
          <Route path={'/login'} exact component={LoginScreen} />
          <Route path={'/register'} exact component={RegisterScreen} />
          <Route path={'/profile'} exact component={ProfileScreen} />
          <Route path={'/shipping'} exact component={ShippingScreen} />
          <Route path={'/payment'} exact component={PaymentScreen} />
          <Route path={'/placeorder'} exact component={PlaceOrderScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
