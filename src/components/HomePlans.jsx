import { Link } from "react-router-dom";

import plan1 from "../assets/plan-01.jpg";
import plan2 from "../assets/plan-02.jpg";
import plan3 from "../assets/plan-03.jpg";


const HomePlans = () => {
  return (
    <div>
      <section className="section section--plans">
        <div className="section__content">
          <ul className="section__plans">
            <li className="section__card">
              <Link to={'./login'}>
                <img src={plan1} alt="plan-01" />
              </Link>
            </li>
            <li className="section__card">
              <Link to={'./login'}>
                <img src={plan2} alt="plan-02" />
              </Link>
            </li>
            <li className="section__card">
              <Link to={'./login'}>
                <img src={plan3} alt="plan-03" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default HomePlans;
