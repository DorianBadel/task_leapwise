import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Button from "./Button";
import Input, { ImageInput } from "./Input";
import Card from "./Card";
import "../styles/css/components/Profile.css";
import LocalStorage, { profileDetailsT } from "../util/localStorage";
import { useEffect } from "react";
import { useAlert } from "../util/AlertProvider";
import SaveIcon from "../assets/icons/Save.svg";

const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

function Profile() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const alert = useAlert();

  useEffect(() => {
    const profileDetails: profileDetailsT | undefined =
      LocalStorage.getProfileDetails();
    if (!profileDetails || profileDetails === undefined) return;

    setValue("firstName", profileDetails.name);
    setValue("lastName", profileDetails.surname);
    setValue("email", profileDetails.email);
    setValue("photo", profileDetails.profilePicture);
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    getBase64(data.photo[0]).then((base64) => {
      LocalStorage.saveProfileDetails({
        name: data.firstName,
        surname: data.lastName,
        email: data.email,
        profilePicture: base64 as string,
      });
    });
    alert.showAlert("Profile details saved!", <SaveIcon />);
  };
  return (
    <Card className="home__article-r">
      <div className="article__right-form-wrapper">
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
            <Button type="submit" className="expandable">
              Save
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default Profile;
