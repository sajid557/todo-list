import React from "react";

const Filter = ({ setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="filter">
      <select name="" id="" onChange={statusHandler}>
        <optgroup>
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </optgroup>
      </select>
    </div>
  );
};
export default Filter;
