import { FunctionComponent } from 'react'

// Components
import Checkout from '../../components/checkout/checkout.component'
import Header from '../../components/header/header.component'

const CheckoutPage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Checkout />
    </>
  )
}

export default CheckoutPage
