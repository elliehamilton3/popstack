import { Box, Typography } from '@material-ui/core'
import { NextPage } from 'next'
import React from 'react'

import CheckoutForm from '../components/CheckoutForm'
import Footer from '../components/footer/footer.component'
import Navbar from '../components/navbar/navbar.component'

const PricingPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Box p={12} bgcolor="#d0e3fb" >
      <Box pb={5}>
      <Typography variant="h1">Pricing</Typography>
      </Box>
      <CheckoutForm />
      </Box>
      <Footer /> 
    </>
  )
}

export default PricingPage