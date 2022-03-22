import React from "react";

const ListItem = ({ Goals, setGoals, Item }) => {
  const deleteHandler = () => {
    setGoals(Goals.filter((el) => el.id !== Item.id));
    console.log("delete");
  };
  const checkHandler = () => {
    setGoals(
      Goals.map((check) => {
        if (check.id === Item.id) {
          return {
            ...check,
            completed: !Item.completed,
          };
        }
        return check;
      })
    );
  };
  return (
    <li>
      <div>
        <span className={`list-text ${Item.completed ? "completed" : ""}`}>
          {Item.text}
        </span>
        <span className="list-check" onClick={checkHandler}>
          <i className="fa fa-check" aria-hidden="true"></i>
        </span>
        <span className="list-close" onClick={deleteHandler}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
      </div>
    </li>
  );
};

export default ListItem;
