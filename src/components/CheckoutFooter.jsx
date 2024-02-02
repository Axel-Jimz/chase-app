import { Link } from "react-router-dom";

const CheckoutFooter = () => {
  return (
    <>
      <footer className="footer-checkout">
        <div className="footer-checkout__content">
          <div className="footer-checkout__links">
            <Link to={'./'}>Privacy</Link>
            <Link to={'./'}>Security</Link>
            <Link to={'./'}>Accessibility</Link>
            <Link to={'./'}>Terms of use</Link>
            <Link to={'./'}>Ad choises</Link>
          </div>
          <p className="footer-checkout__paragraph">
            © 2021 JPMorgan Chase &amp; Co.
          </p>
        </div>
      </footer>
    </>
  );
};
export default CheckoutFooter;
