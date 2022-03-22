import React, { useState, useEffect } from "react";
import "./css/App.css";

import Form from "./components/form";
import List from "./components/list";
function App() {
  //state hooks
  const [Goals, setGoals] = useState([]);
  const [InputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  // one time
  useEffect(() => {
    goalsGet();
  }, []);

  // effect hook
  useEffect(() => {
    filterHandler();
    saveGoals();
  }, [Goals, status]);
  // functions

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(Goals.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setFilter(Goals.filter((el) => el.completed === false));
        break;
      default:
        setFilter(Goals);
        break;
    }
  };

  const saveGoals = () => {
    localStorage.setItem("goals", JSON.stringify(Goals));
  };
  const goalsGet = () => {
    if (localStorage.getItem("goals") === null) {
      localStorage.setItem("goals", JSON.stringify([]));
    } else {
      let lclget = JSON.parse(localStorage.getItem("goals"));
      setGoals(lclget);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-2">
          <div className="app  mt-5">
            <header>
              <h3 className="text-center">my todo app</h3>
            </header>
            <section className="todo">
              <Form
                InputText={InputText}
                setInputText={setInputText}
                setGoals={setGoals}
                Goals={Goals}
                setStatus={setStatus}
              />
              <List Goals={Goals} Filter={filter} setGoals={setGoals} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
