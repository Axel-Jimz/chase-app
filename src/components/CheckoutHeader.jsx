import checkoutLogo from "../assets/checkout-logo.png"

const CheckoutHeader = () => {
  return (
    <>
      <header className="header header--checkout">
        <img src={checkoutLogo} alt="checkout" />
      </header>
    </>
  );
};
export default CheckoutHeader;
