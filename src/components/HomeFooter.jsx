import { Link } from "react-router-dom";

import footer1 from "../assets/footer-1.png"
import footer2 from "../assets/footer-2.png"
import footer3 from "../assets/footer-3.png"
import footer4 from "../assets/footer-4.png"
import footer5 from "../assets/footer-5.png"
import footer6 from "../assets/footer-6.png"
import footer7 from "../assets/footer-7.png"
import footer8 from "../assets/footer-8.png"
import footer9 from "../assets/footer-9.png"
import footer10 from "../assets/footer-10.png"
import footer11 from "../assets/footer-11.png"


const HomeFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__box footer__box--primary">
            <h3 className="footer__heading">
              We're here to help you manage your money today and tomorrow
            </h3>
          </div>
          <ul className="footer__cards">
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer1}
                alt="footer-1"
              />
              <h3 className="footer__title">Checking Accounts</h3>
              <p className="footer__description">
                Choose the <Link to={'./login'}>checking account</Link> that
                works best for you. See our
                <Link to={'./login'}>Chase Total Checking®</Link> offer for
                new customers. Make purchases with your debit card, and bank
                from almost anywhere by phone, tablet or computer and more than
                15,000 ATMs and more than 4,700 branches.
              </p>
            </li>
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer2}
                alt="footer-2"
              />
              <h3 className="footer__title">Savings Accounts &amp; CDs</h3>
              <p className="footer__description">
                It’s never too early to begin saving.{" "}
                <Link to={'./login'}>Open a savings account</Link> or open a
                Certificate of Deposit (
                <Link to={'./login'}>see interest rates</Link>) and start
                saving your money.
              </p>
            </li>
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer3}
                alt="footer-3"
              />
              <h3 className="footer__title">Credit Cards</h3>
              <p className="footer__description">
                Chase <Link to={'./login'}>credit cards</Link> can help you
                buy the things you need. Many of our cards{" "}
                <Link to={'./login'}>offer rewards</Link> that can be
                redeemed for <Link to={'./login'}>cash back </Link> or{" "}
                <Link to={'./login'}>travel-related </Link> perks. With so
                many options, it can be easy to find a card that matches your
                lifestyle. Plus, with Credit Journey you can get a{" "}
                <Link to={'./login'}>free credit score!</Link>
              </p>
            </li>
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer4}
                alt="footer-4"
              />
              <h3 className="footer__title">Mortgages</h3>
              <p className="footer__description">
                Apply for a <Link to={'./login'}>mortgage</Link> or{" "}
                <Link to={'./login'}>refinance your a mortgage</Link> with
                Chase. View today’s{" "}
                <Link to={'./login'}>mortgage rates</Link> or calculate what
                you can afford with our{" "}
                <Link to={'./login'}>mortgage calculator</Link>. Visit our{" "}
                <Link to={'./login'}>Education Center</Link> for homebuying
                tips and more.
              </p>
            </li>
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer5}
                alt="footer-5"
              />
              <h3 className="footer__title">Auto</h3>
              <p className="footer__description">
                <Link to={'./login'}>Chase Auto</Link> is here to help you
                get the right car. Apply for{" "}
                <Link to={'./login'}>auto financing</Link> for a new or used
                car with Chase. Use the{" "}
                <Link to={'./login'}>payment calculator</Link> to estimate
                monthly payments. Check out the{" "}
                <Link to={'./login'}>Chase Auto Education Center</Link> to
                get car guidance from a trusted source.
              </p>
            </li>
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer6}
                alt="footer-6"
              />
              <h3 className="footer__title">Chase for Business</h3>
              <p className="footer__description">
                With Chase for Business you’ll receive guidance from a team of
                business professionals who specialize in helping improve cash
                flow, providing credit solutions, and managing payroll. Choose
                from{" "}
                <Link to={'./login'}>
                  business checking, small business loans, business credit
                  cards, merchant services
                </Link>{" "}
                or visit our{" "}
                <Link to={'./login'}>business resource center</Link>.
              </p>
            </li>
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer7}
                alt="footer-7"
              />
              <h3 className="footer__title">Investing by J.P. Morgan</h3>
              <p className="footer__description">
                Whether you choose to work with a{" "}
                <Link to={'./login'}>financial advisor</Link> and develop a
                financial strategy or{" "}
                <Link to={'./login'}>invest online</Link>, J.P. Morgan offers{" "}
                <Link to={'./login'}>investment education</Link>, expertise
                and a range of tools to help you reach your goals. Visit a J.P.
                Morgan <Link to={'./login'}>Wealth Management Branch</Link>{" "}
                or check out our latest online investing{" "}
                <Link to={'./login'}>offers, promotions, and coupons</Link>.{" "}
                <b>
                  INVESTMENT AND INSURANCE PRODUCTS ARE: NOT FDIC INSURED NOT
                  INSURED BY ANY FEDERAL GOVERNMENT AGENCY NOT A DEPOSIT OR
                  OTHER OBLIGATION OF, OR GUARANTEED BY, JPMORGAN CHASE BANK,
                  N.A. OR ANY OF ITS AFFILIATES SUBJECT TO INVESTMENT RISKS,
                  INCLUDING POSSIBLE LOSS OF THE PRINCIPAL AMOUNT INVESTED
                </b>
              </p>
            </li>
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer8}
                alt="footer-8"
              />
              <h3 className="footer__title">Chase Private Client</h3>
              <p className="footer__description">
                Get more from a personalized relationship offering{" "}
                <Link to={'./login'}>no everyday banking fees</Link>,
                priority service from a{" "}
                <Link to={'./login'}>dedicated team</Link> and{" "}
                <Link to={'./login'}>special perks and benefits</Link>.
                Connect with a Chase Private Client Banker at your nearest
                <Link to={'./login'}>Chase branch</Link> to learn about
                eligibility requirements and all available benefits.{" "}
                <b>
                  INVESTMENT AND INSURANCE PRODUCTS ARE: NOT A DEPOSIT NOT FDIC
                  INSURED NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY NO BANK
                  GUARANTEE MAY LOSE VALUE
                </b>
              </p>
            </li>
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer9}
                alt="footer-9"
              />
              <h3 className="footer__title">About Chase</h3>
              <p className="footer__description">
                Chase serves millions of people with a broad range of products.{" "}
                <Link to={'./login'}>Chase online</Link> lets you manage your
                Chase accounts, view statements, monitor activity, pay bills or
                transfer funds securely from one central place. To learn more,
                visit the{" "}
                <Link to={'./login'}>Banking Education Center</Link>. For
                questions or concerns, please contact{" "}
                <Link to={'./login'}>Chase customer service</Link> or let us
                know about{" "}
                <Link to={'./login'}>Chase complaints and feedback</Link>.
              </p>
            </li>
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer10}
                alt="footer-10"
              />
              <h3 className="footer__title">Sports &amp; Entertainment</h3>
              <p className="footer__description">
                Chase gives you access to unique sports, entertainment and
                culinary events through{" "}
                <Link to={'./login'}>Chase Experiences</Link> and our
                exclusive partnerships such as the{" "}
                <Link to={'./login'}>US Open, Madison Square Garden</Link>{" "}
                and <Link to={'./login'}>Chase Center</Link>.
              </p>
            </li>
            <li className="footer__card">
              <img
                className="footer__icon"
                src={footer11}
                alt="footer-11"
              />
              <h3 className="footer__title">Chase Security Center</h3>
              <p className="footer__description">
                Our <Link to={'./login'}>suite of security features</Link>{" "}
                can <Link to={'./login'}>help you protect</Link> your info,
                money and give you peace of mind. See how we're dedicated to
                helping <Link to={'./login'}>protect you</Link>, your
                accounts and your loved ones from{" "}
                <Link to={'./login'}>financial abuse</Link>. Also,{" "}
                <Link to={'./login'}>
                  learn about the common tricks scammers are using
                </Link>{" "}
                to help you stay one step ahead of them. If you see unauthorized
                charges or believe your account was compromised contact us right
                away to <Link to={'./login'}>report fraud</Link>.
              </p>
            </li>
          </ul>
          <div className="footer__box footer__box--secundary">
            <h3 className="footer__heading">Other Products &amp; Services: </h3>
            <ul className="footer__links">
              <li className="footer__link">
                <Link to={'./login'}>Deposit Account Agreements </Link>
              </li>
              <li className="footer__link">
                <Link to={'./login'}>Mobile Banking</Link>
              </li>
              <li className="footer__link">
                <Link to={'./login'}>Online Banking</Link>
              </li>
              <li className="footer__link">
                <Link to={'./login'}>Student Center</Link>
              </li>
              <li className="footer__link">
                <Link to={'./login'}>Zelle®</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
