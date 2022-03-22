import React from "react";
import Filter from "./filter";
const Form = ({ InputText, setInputText, Goals, setGoals, setStatus }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const newGoal = {
      id: Math.random(),
      text: InputText,
      completed: false,
    };

    setInputText(" ");
    setGoals(() => {
      return Goals.concat(newGoal);
    });
  };
  const InputHandler = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="input-div">
        <input
          type="text"
          value={InputText}
          onChange={InputHandler}
          name="input"
          required
        />
        <button type="submit">
          <i className="fas fa-plus" aria-hidden="true"></i>
        </button>
      </div>
      <Filter setStatus={setStatus} />
    </form>
  );
};

export default Form;
