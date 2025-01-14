import clasees from "./MealForm.module.css";
import Input from "../../UI/Input";

const Form = (props) => {
  return (
    <form className={clasees.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_"+props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default Form;
