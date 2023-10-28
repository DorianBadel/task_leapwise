import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import Input, { ImageInput } from "./Input";
import Card from "./Card";
import "../styles/css/components/Profile.css";
import LocalStorage from "../util/localStorage";

const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

const onSubmit: SubmitHandler<FieldValues> = (data) => {
  getBase64(data.photo[0]).then((base64) => {
    LocalStorage.saveProfileDetails({
      name: data.firstName,
      surname: data.lastName,
      email: data.email,
      profilePicture: base64 as string,
    });
  });
};

function Profile() {
  const {
    register,
    handleSubmit,
    control,
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
              <div className="form__card">
                <ImageInput
                  control={control}
                  label="Profile picture"
                  description="Image must be below 1024x1024px. Use PNG or JPG format."
                />
              </div>
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
