import Card from "../components/Card";
import "../styles/css/pages/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="wrapper">
      <div className="login__container">
        <div className="login__logo">
          <span className="logo__text">Linkwise</span>
        </div>
        <Card>
          <div className="login__header">
            <div className="heading__text-m">Login</div>
            <div className="body__text-m text-gray">
              Add your details below to get back into the app
            </div>
          </div>
          <div className="login__body">
            <p className="body__text-m text-gray">
              Don't have an account?{" "}
              <Link to="/register" className="body__text-m text-link">
                Create account
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Login;
