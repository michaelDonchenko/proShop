import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Homescreen from './screens/Homescreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path={'/'} exact component={Homescreen} />
          <Route path={'/product/:id'} exact component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App