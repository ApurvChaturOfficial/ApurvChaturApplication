import React from 'react'

import Navbar from './component/cNavbar'
import Footer from './component/bFooter'


const UnprotectedComponent = ({ children }) => {
  // JSX
  return (
    <React.Fragment>
      <Navbar />
      { children }
      <Footer />
    </React.Fragment>
  )
}

export default UnprotectedComponent