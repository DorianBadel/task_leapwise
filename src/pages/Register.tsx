import Card from "../components/Card";
import "../styles/css/pages/Login.css";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  if (data.password !== data.passwordConfirm) {
    alert("Password and confirm password must be the same");
    return;
  }
  alert(JSON.stringify(data));
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  return (
    <div className="wrapper">
      <div className="login__container">
        <div className="login__logo">
          <span className="logo__text">Linkwise</span>
        </div>
        <Card>
          <div className="login__header">
            <div className="heading__text-m">Create account</div>
            <div className="body__text-m text-gray">
              Let's get you started sharing your links!
            </div>
          </div>
          <div className="login__body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Email address"
                name="email"
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
              />
              <Input
                label="Create password"
                name="password"
                type="password"
                placeholder="At least 8 characters"
                error={errors.password?.type as string}
                register={register}
                validation={{
                  required: { value: true, message: "Password is required" },
                  minLength: { value: 8, message: "Please check again" },
                }}
              />
              <Input
                label="Confirm password"
                name="passwordConfirm"
                type="password"
                placeholder="At least 8 characters"
                error={errors.passwordConfirm?.type as string}
                register={register}
                validation={{
                  required: { value: true, message: "Password is required" },
                  minLength: { value: 8, message: "Please check again" },
                }}
              />
              <span className="body__text-m text-gray">
                Password must contain at least 8 characters
              </span>
              <Button type="submit">Create new account</Button>
            </form>
            <p className="body__text-m text-gray text-center">
              Already have an account?{" "}
              <Link to="/login" className="body__text-m text-link">
                Login
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Register;
