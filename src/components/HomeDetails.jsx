import { Link } from "react-router-dom";

import detail1 from "../assets/details-1.png";
import detail2 from "../assets/details-2.png";
import detail3 from "../assets/details-3.jpg";


const HomeDetails = () => {
  return (
    <div>
      <section className="section section--details">
        <div className="section__content">
          <div className="section__box section__box--primary">
            <div>
              <img src={detail1} alt="detail-1" />
            </div>
            <div>
              <h2 className="section__heading">
                Open our most popular <br /> savings account
              </h2>
              <p className="section__paragraph">
                Apply for a new Chase Savings℠ account to start saving for what
                matters.
              </p>
              <Link className="section__button" to={'./login'}>
                Continue
              </Link>
            </div>
          </div>
          <div className="section__box section__box--secundary">
            <div>
              <h2 className="section__heading">
                New Chase Checking <br /> customers
              </h2>
              <p className="section__paragraph">
                Enjoy $100 when you open a Chase Secure Banking℠ account with
                qualifying transactions..
              </p>
              <Link className="section__button" to={'./login'}>
                Open an account
              </Link>
            </div>
            <div>
              <img src={detail2} alt="detail-2" />
            </div>
          </div>
          <div className="section__box section__box--tertiary">
            <div>
              <img src={detail3} alt="detail-3" />
            </div>
            <div>
              <h2 className="section__heading">
                College students: This offer is <br /> for you
              </h2>
              <p className="section__paragraph">
                As a new Chase checking customer, earn $100 when you open Chase
                College Checking℠ and complete 10 qualifying transactions.{" "}
                <b>$0 Monthly Service Fee </b> while in school (5 years
                maximum). Ages 17-24.
              </p>
              <Link className="section__button" to={'./login'}>
                Continue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeDetails;
