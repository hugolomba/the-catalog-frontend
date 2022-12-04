import "./CompanyLogin.css";

import CompanySignInForm from "../../components/SignInForm/CompanySignInForm";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import Loading from "../../components/Loading";
import Loading1 from "../../components/Loading1";

const Login = () => {
  const { isLoading } = useContext(AuthContext);

  return (
    <div className={isLoading ? "signin-form-container-loading" : ""}>
      {isLoading ? <Loading /> : <CompanySignInForm />}
    </div>
  );
};

export default Login;
