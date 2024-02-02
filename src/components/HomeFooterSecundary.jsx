import { Link } from "react-router-dom";

import footer12 from "../assets/footer-12.png"

const HomeFooterSecundary = () => {
  return (
    <div>
      <div className="footer footer--secundary">
        <div className="footer__content footer__content--secundary">
          <p className="footer__paragraph">
            “Chase,” “JPMorgan,” “JPMorgan Chase,” the JPMorgan Chase logo and
            the Octagon Symbol are trademarks of JPMorgan Chase Bank, N.A.
            JPMorgan Chase Bank, N.A. is a wholly-owned subsidiary of JPMorgan
            Chase &amp; Co.
          </p>
          <p className="footer__paragraph">
            "Chase Private Client" is the brand name for a banking and
            investment product and service offering, requiring a Chase Private
            Client Checking℠ account.
          </p>
          <p className="footer__paragraph">
            Investing involves market risk, including possible loss of
            principal, and there is no guarantee that investment objectives will
            be achieved. Past performance is not a guarantee of future results.
          </p>
          <p className="footer__paragraph">
            J.P. Morgan Wealth Management is a business of JPMorgan Chase &amp;
            Co., which offers investment products and services through J.P.
            Morgan Securities LLC (JPMS), a registered broker-dealer and
            investment adviser, member <Link to={'./login'}>FINRA</Link> and{" "}
            <Link to={'./login'}>SIPC</Link>. Insurance products are made
            available through Chase Insurance Agency, Inc. (CIA), a licensed
            insurance agency, doing business as Chase Insurance Agency Services,
            Inc. in Florida. Certain custody and other services are provided by
            JPMorgan Chase Bank, N.A. (JPMCB). JPMS, CIA and JPMCB are
            affiliated companies under the common control of JPMorgan Chase
            &amp; Co. Products not available in all states.
          </p>
          <p className="footer__paragraph">
            Bank deposit accounts, such as checking and savings, may be subject
            to approval. Deposit products and related services are offered by
            JPMorgan Chase Bank, N.A. Member FDIC.
          </p>
          <div className="footer__links">
            <Link className="footer__link" to={'./login'}>
              About Chase
            </Link>
            <Link className="footer__link" to={'./login'}>
              J.P. Morgan
            </Link>
            <Link className="footer__link" to={'./login'}>
              JPMorgan Chase &amp; Co.
            </Link>
            <Link className="footer__link" to={'./login'}>
              Media Center
            </Link>
            <Link className="footer__link" to={'./login'}>
              Careers
            </Link>
            <Link className="footer__link" to={'./login'}>
              Site map
            </Link>
            <Link className="footer__link" to={'./login'}>
              Privacy &amp; Security
            </Link>
            <Link className="footer__link" to={'./login'}>
              Terms of use
            </Link>
            <Link className="footer__link" to={'./login'}>
              Accessibility
            </Link>
            <Link className="footer__link" to={'./login'}>
              AdChoices
            </Link>
            <Link className="footer__link" to={'./login'}>
              Give feedback
            </Link>
            <Link className="footer__link" to={'./login'}>
              Member FDIC
            </Link>
          </div>
          <p className="footer__paragraph">
            {" "}
            <img src={footer12} alt="footer-12" /> Equal Housing
            Opportunity
          </p>
          <p className="footer__paragraph">© 2024 JPMorgan Chase &amp; Co.</p>
        </div>
      </div>
    </div>
  );
};
export default HomeFooterSecundary;
