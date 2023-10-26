import Card from "../components/Card";
import "../styles/css/pages/Login.css";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  alert(JSON.stringify(data));
};

function Login() {
  const { register, handleSubmit } = useForm<FieldValues>();

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Email address"
                name="email"
                placeholder="e.g. alex@email.com"
                register={register}
                required
              />
              <Input
                label="password"
                name="password"
                placeholder="Enter your password"
                register={register}
                required
              />
              <Button type="submit">Submit</Button>
            </form>
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
