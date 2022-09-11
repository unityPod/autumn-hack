import styles from "./SearchBar.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  advisor: string;
};
interface ISearch {
  advisors: { username: string; location: string; industry: string }[];
}

const SearchBar = (props: ISearch) => {
  const { advisors } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className={styles["container"]} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles["input-container"]}
        placeholder="Search For An Advisor"
        {...register("advisor", { required: true })}
      />
      {errors.advisor?.type === "required" && (
        <p className="w-[325px] absolute text-error">
          The Advisors Name is Required
        </p>
      )}
      <div className="absolute">
        <button type="submit" className={styles["button"]}>
          Find Now
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
