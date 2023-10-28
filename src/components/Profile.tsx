import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import Input from "./Input";
import Card from "./Card";
import "../styles/css/components/Profile.css";

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  alert(JSON.stringify(data));
};

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Card className="home__article-r">
      <div className="article__right-form">
        <form onSubmit={handleSubmit(onSubmit)} className="article__right-form">
          <div className="right__container">
            <div className="right__title">
              <span className="right__title-heading heading__text-m">
                Profile Details
              </span>
              <span className="right__title-description body__text-s text-gray">
                Add your details to create a personal touch to your profile.
              </span>
            </div>

            <div className="right__body">
              <div className="form__card"></div>
              <div className="form__card">
                <Input
                  name="firstName"
                  label="First name"
                  register={register}
                  placeholder="e.g. John"
                  className="align__row"
                  error={errors.firstName?.type as string}
                  validation={{
                    required: {
                      value: true,
                      message: "Can't be empty",
                    },
                  }}
                />
                <Input
                  name="lastName"
                  label="Last name"
                  register={register}
                  placeholder="e.g. Appleseed"
                  className="align__row"
                  error={errors.lastName?.type as string}
                  validation={{
                    required: {
                      value: true,
                      message: "Can't be empty",
                    },
                  }}
                />
                <Input
                  name="email"
                  label="Email"
                  register={register}
                  placeholder="e.g. email@example.com"
                  className="align__row"
                  autoComplete="email"
                />
              </div>
            </div>
          </div>

          <div className="right__footer">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default Profile;
