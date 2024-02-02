import loginLogo from "../assets/login-logo.png";

const LoginHeader = () => {
  return (
    <>
      <header className="header header--login">
        <img src={loginLogo} alt="login" />
      </header>
    </>
  );
};
export default LoginHeader;
