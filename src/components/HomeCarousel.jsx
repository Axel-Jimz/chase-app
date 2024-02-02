import { Link } from "react-router-dom";

import carousel1 from "../assets/carousel-1.png";
import carousel2 from "../assets/carousel-2.png";
import carousel3 from "../assets/carousel-3.png";
import carousel4 from "../assets/carousel-4.png";
import carousel5 from "../assets/carousel-5.png";
import carousel6 from "../assets/carousel-6.png";
import carousel7 from "../assets/carousel-7.png";
import carousel8 from "../assets/carousel-8.png";
import carousel9 from "../assets/carousel-9.png";
import carousel10 from "../assets/carousel-10.png";
import carousel11 from "../assets/carousel-11.png";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";



const HomeCarousel = () => {
  return (
    <div>
      <section className="section section--carousel">
        <div className="section__content">
          <h2 className="section__heading">Choose what's right for you</h2>
          <ul className="section__carousel">
            <li className="section__card">
              <Link  className="section__link" to={'./login'}>
                <img src={carousel1} alt="carousel-1" />{" "}
              </Link>
              <h3 className="section__option">Schedule a meeting</h3>
            </li>
            <li className="section__card">
              <Link className="section__link" to={'./login'}>
                <img src={carousel2} alt="carousel-2" />{" "}
              </Link>
              <h3 className="section__option">Free credit score</h3>
            </li>
            <li className="section__card">
              <Link className="section__link" to={'./login'}>
                <img src={carousel3} alt="carousel-3" />{" "}
              </Link>
              <h3 className="section__option">Business</h3>
            </li>
            <li className="section__card">
              <Link className="section__link" to={'./login'}>
                <img src={carousel4} alt="carousel-4" />{" "}
              </Link>
              <h3 className="section__option">Credit cards</h3>
            </li>
            <li className="section__card">
              <a className="section__link" to={'./login'}>
                <img src={carousel5} alt="carousel-5" />{" "}
              </a>
              <h3 className="section__option">Checking</h3>
            </li>
            <li className="section__card">
              <Link className="section__link" to={'./login'}>
                <img src={carousel6} alt="carousel-6" />{" "}
              </Link>
              <h3 className="section__option">Travel</h3>
            </li>
            <li className="section__card">
              <Link className="section__link" to={'./login'}>
                <img src={carousel7} alt="carousel-7" />{" "}
              </Link>
              <h3 className="section__option">Savings</h3>
            </li>
            <li className="section__card">
              <Link className="section__link" to={'./login'}>
                <img src={carousel8} alt="carousel-8" />{" "}
              </Link>
              <h3 className="section__option">Auto</h3>
            </li>
            <li className="section__card">
              <Link className="section__link" to={'./login'}>
                <img src={carousel9} alt="carousel-9" />{" "}
              </Link>
              <h3 className="section__option">Home loans</h3>
            </li>
            <li className="section__card">
              <Link className="section__link" to={'./login'}>
                <img src={carousel10} alt="carousel-10" />{" "}
              </Link>
              <h3 className="section__option">Investments</h3>
            </li>
            <li className="section__card">
              <Link className="section__link" to={'./login'}>
                <img src={carousel11} alt="carousel-11" />{" "}
              </Link>
              <h3 className="section__option">Commercial</h3>
            </li>
          </ul>
          <div className="section__indexs">
            <div className="section__index" />
            <div className="section__index" />
            <div className="section__index" />
            <div className="section__index" />
            <div className="section__index" />
            <div className="section__index" />
            <div className="section__index" />
            <div className="section__index" />
            <div className="section__index" />
            <div className="section__index" />
            <div className="section__index" />
          </div>
          <div className="section__controls">
            <Link to={'./login'} className="section__previous">
              <img src={arrowLeft} alt="arrow-left" />
            </Link>
            <Link to={'./login'} className="section__next">
              <img src={arrowRight} alt="arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeCarousel;
