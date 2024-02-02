import CheckoutFooter from "../components/CheckoutFooter"
import CheckoutForm from "../components/CheckoutForm"
import CheckoutHeader from "../components/CheckoutHeader"
import CheckoutProgress from "../components/CheckoutProgress"


const Checkout = () => {
  return (
    <div>
        <CheckoutHeader />
        <CheckoutProgress />
        <CheckoutForm />
        <CheckoutFooter />
    </div>
  )
}
export default Checkout