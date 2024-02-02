import { Link } from "react-router-dom";
import bannerImg from "../assets/banner-img.png";

const HomeBanner = () => {
  return (
    <>
      <section className="section section--banner">
        <div className="section__content">
          <div className="section__box section__box--primary">
            <img
              className="section__img"
              src={bannerImg}
              alt="banner"
            />
          </div>
          <div className="section__box section__box--secundary">
            <h1 className="section__heading">
              New Chase <br /> checking customers
            </h1>
            <p className="section__paragraph">
              Open a Chase Total Checking® account with qualifying activities.
            </p>
            <Link className="section__button" to={'./login'}>
              Open an account
            </Link>
          </div>
          <div className="section__box section__box--tertiary">
            <form action="#" className="section__form">
              <h3 className="section__heading">Welcome</h3>
              <Link to={'./login'} className="section__button">
                Sign in
              </Link>
              <Link className="section__link" to={'./login'}>
                Not enrolled? Sign up now.
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
