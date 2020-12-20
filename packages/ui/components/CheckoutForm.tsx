import React, { useState } from 'react'

import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core'

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false)
  // React.FormEventHandler<HTMLFormElement>
  const handleSubmit = (priceId: "oneweek" |"monthly" | "yearly") => async (e: any) => {
    e.preventDefault()
    setLoading(true)
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout_sessions', {
      priceId
    })

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    // Redirect to Checkout.
    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message)
    setLoading(false)
  }

  return (
<Grid container spacing={3}>
  <Grid item xs={12}  sm={4}>
<form onSubmit={handleSubmit("oneweek")}>
  <Card>
      <CardContent>
        <Typography variant="h2">£2</Typography>
        <Typography variant="h3">7-day trial</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" type="submit" disabled={loading} color="primary">Pay now</Button>
      </CardActions>
    </Card>
    </form>
    </Grid>
    <Grid item xs={12} sm={4}>
<form onSubmit={handleSubmit("monthly")}>
  <Card>
      <CardContent>
        <Typography variant="h2">£5</Typography>
        <Typography variant="h3">1 month</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" type="submit" disabled={loading} color="primary">Pay now</Button>
      </CardActions>
    </Card>
    </form>
    </Grid>
    <Grid item xs={12}  sm={4}>
<form onSubmit={handleSubmit("yearly")}>
  <Card>
      <CardContent>
        <Typography variant="h2">£50</Typography>
        <Typography variant="h3">1 year</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" type="submit" disabled={loading} color="primary">Pay now</Button>
      </CardActions>
    </Card>
    </form>
    </Grid>

</Grid>
  )
}

export default CheckoutForm
