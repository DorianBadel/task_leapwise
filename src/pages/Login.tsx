import Card from "../components/Card";
import "../styles/css/pages/AuthStyles.css";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import EmailIcon from "../assets/icons/Email.svg";
import PasswordIcon from "../assets/icons/Password.svg";
import Logotype from "../assets/icons/Logotype";

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  alert(JSON.stringify(data));
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  return (
    <div className="wrapper">
      <div className="login__container">
        <Logotype />
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
                icon={<EmailIcon />}
                placeholder="e.g. alex@email.com"
                register={register}
                error={errors.email?.type as string}
                validation={{
                  required: { value: true, message: "Can't be empty" },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Incorrect format",
                  },
                }}
                autoComplete="email"
              />
              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                icon={<PasswordIcon />}
                error={errors.password?.type as string}
                register={register}
                validation={{
                  required: { value: true, message: "Password is required" },
                  minLength: { value: 8, message: "Please check again" },
                }}
                autoComplete="current-password"
              />
              <Button type="submit">Submit</Button>
            </form>
            <p className="body__text-m text-gray text-center">
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
