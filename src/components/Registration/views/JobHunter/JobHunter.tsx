import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../Selection.module.css";

type Inputs = {
  username: string;
  email: string;
  resume: Blob;
  biography: string;
  skills: string;
  role: string;
};

const JobHunter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className={styles["container"]}>
      <h2 className={styles["title"]}>Job Hunter Registration Form</h2>
      <form
        className={styles["container-form"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="username" className={styles["label-text"]}>
          Username
        </label>
        <input
          placeholder="Enter Your Username"
          className={styles["input"]}
          {...register("username", {
            required: "Please enter your username",
            maxLength: 10,
            minLength: 3,
          })}
          id="username"
        />
        {errors.username?.type === "required" && (
          <span className="mb-4 text-error">Your Username is required</span>
        )}
        {errors.username?.type === "minLength" && (
          <span className="mb-4 text-error">
            Please make your username longer!
          </span>
        )}
        {errors.username?.type === "maxLength" && (
          <span className="mb-4 text-error">Your username is too long!</span>
        )}

        <label htmlFor="email" className={styles["label-text"]}>
          Email
        </label>
        <input
          placeholder="Enter Your Email"
          className={styles["input"]}
          {...register("email", {
            required: "Please enter your email",
            /* eslint-disable */
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
          id="email"
        />
        {errors.email?.type === "required" && (
          <span className="mb-4 text-error">Your Email Is Required</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="mb-4 text-error">Please Enter A Valid Email</span>
        )}

        <label className={styles["label-text"]} htmlFor="resume">
          Resume
        </label>
        <input
          placeholder="Submit Your Resume"
          type="file"
          className="my-3"
          {...register("resume", { required: "Please upload your resume" })}
          id="resume"
        />
        {errors.resume?.type === "required" && (
          <span className="mb-4 text-error">
            Uploading your resume is required
          </span>
        )}

        <label htmlFor="biography" className={styles["label-text"]}>
          Bio
        </label>
        <textarea
          placeholder="Tell us about yourself!"
          className={styles["input"]}
          {...register("biography", {
            required: "Please enter your bio",
            maxLength: 255,
            minLength: 50,
          })}
          id="biography"
        />
        {errors.biography?.type === "required" && (
          <span className="mb-4 text-error">Your Biography is required</span>
        )}
        {errors.biography?.type === "minLength" && (
          <span className="mb-4 text-error">You need to add more!</span>
        )}
        {errors.biography?.type === "maxLength" && (
          <span className="mb-4 text-error">You have reached the limit!</span>
        )}

        <label className={styles["label-text"]}>Role</label>
        <input
          placeholder="Job Hunter"
          defaultValue="Job Hunter"
          {...register("role")}
          className={styles["input"]}
          readOnly
        />
        <button className={styles["button"]} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobHunter;
