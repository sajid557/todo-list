import React from "react";
import ListItem from "./listItem";
const List = ({ Goals, setGoals, Filter }) => {
  return (
    <ul>
      {Filter.map((item) => {
        return (
          <ListItem
            key={item.id}
            Item={item}
            Goals={Goals}
            setGoals={setGoals}
          />
        );
      })}
    </ul>
  );
};
export default List;
