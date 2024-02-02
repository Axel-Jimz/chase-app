import { Link } from "react-router-dom";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";
import pinterest from "../assets/pinterest.png";

const HomeFollowUs = () => {
  return (
    <>
      <section className="section section--follow-us">
        <div className="section__content">
          <h2 className="section__heading">Follow us:</h2>
          <ul className="section__networks">
            <li className="section__network">
              <Link to={'./login'}>
                <img src={facebook} alt="facebook" />
              </Link>
            </li>
            <li className="section__network">
              <Link to={'./login'}>
                <img src={instagram} alt="instagram" />
              </Link>
            </li>
            <li className="section__network">
              <Link to={'./login'}>
                <img src={x} alt="x" />
              </Link>
            </li>
            <li className="section__network">
              <Link to={'./login'}>
                <img src={youtube} alt="youtube" />
              </Link>
            </li>
            <li className="section__network">
              <Link to={'./login'}>
                <img src={linkedin} alt="linkedin" />
              </Link>
            </li>
            <li className="section__network">
              <Link to={'./login'}>
                <img src={pinterest} alt="pinterest" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default HomeFollowUs;
