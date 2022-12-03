import "./UserLogin.css";
import UserSigInForm from "../../components/SignInForm/UserSignInForm";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import Loading from "../../components/Loading";

const Login = () => {
  const { isLoading } = useContext(AuthContext);

  return (
    <div className={isLoading ? "signin-form-container-loading" : ""}>
      {isLoading ? <Loading /> : <UserSigInForm />}
    </div>
  );
};

export default Login;
