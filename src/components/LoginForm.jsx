import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { Link, useNavigate  } from "react-router-dom";
import { useUser } from "../provider/UserContext";
import { db } from "../firebase";
;


const LoginForm = () => {
  const { userData } = useUser();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const usersRef = collection(db, "users");

      await addDoc(usersRef, {
        userId: userData.id,
        username: data.username,
        password: data.password
      });
      reset(); 
      navigate("/checkout");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <>
      <section className="section section--login">
        <form onSubmit={handleSubmit(onSubmit)} className="section__form">
          <input
            type="text"
            name="username"
            className="section__input"
            placeholder="Username"
            required
            {...register("username")}
          />
          <input
            type="password"
            name="password"
            className="section__input"
            placeholder="Password"
            required
            {...register("password")}
          />
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              className="section__checkbox"
              name="rememberMe"
              {...register("rememberMe")} 
            />
            Remember me
          </label>
          <button className="section__button" type="submit">
            Sign in
          </button>
          <Link to="./" className="section__link">
            Forgot username/password?
          </Link>
          <Link to="./" className="section__link">
            Not Enrolled? Sign Up Now.
          </Link>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
