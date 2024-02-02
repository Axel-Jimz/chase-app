import { Link } from "react-router-dom";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import pinterest from "../assets/pinterest.png";

import footer12 from "../assets/footer-12.png";


const LoginFooter = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer footer--follow-us">
            <div className="section__content">
              <h2 className="section__heading">Follow us:</h2>
              <ul className="section__networks">
                <li className="section__network">
                  <Link to={'./'}>
                    <img src={facebook} alt="facebook" />
                  </Link>
                </li>
                <li className="section__network">
                  <Link to={'./'}>
                    <img src={instagram} alt="instagram" />
                  </Link>
                </li>
                <li className="section__network">
                  <Link to={'./'}>
                    <img src={x} alt="x" />
                  </Link>
                </li>
                <li className="section__network">
                  <Link to={'./'}>
                    <img src={youtube} alt="youtube" />
                  </Link>
                </li>
                <li className="section__network">
                  <Link to={'./'}>
                    <img src={linkedin} alt="linkedin" />
                  </Link>
                </li>
                <li className="section__network">
                  <Link to={'./'}>
                    <img src={pinterest} alt="pinterest" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer footer--links">
            <ul className="footer__links">
              <li className="footer__link">
                <Link to={'./'}>Contact us</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>Privacy</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>Security</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>Terms of use</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>Accessibility</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>SAFE Act: Chase Mortgage Loan Originator</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>Fair Lending</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>About Chase</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>J.P. Morgan</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>JPMorgan Chase &amp; Co.</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>Careers</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>English</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>Chase Canada</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>Site map</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>Member FDIC</Link>
              </li>
              <li className="footer__link">
                <Link to={'./'}>
                  {" "}
                  <img src={footer12} alt="footer-12" /> Equal
                  Housing Opportunity
                </Link>
              </li>
            </ul>
            <p className="footer__paragraph">
              (c) 2023 JPMorgan Chase &amp; Co.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default LoginFooter;
