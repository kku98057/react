import React, { useState } from "react";
import Btn from "../components/Btn";
import List from "../components/List";
import useStore from "../store";
import { v4 as uuidv4 } from "uuid";
import Header from "../components/Header";
import "./home2.module.css";
function Home2(props) {
  //   const [todos, setTodos, setDarkMode, darkMode] = useState([
  //     {
  //       id: uuidv4(),
  //       text: "장보기",
  //       status: "active",
  //     },
  //     {
  //       id: uuidv4(),
  //       text: "밥먹기",
  //       status: "active",
  //     },
  //   ]);

  const { todos, setTodos } = useStore();

  const btnHandler = (data) => {
    setTodos([...todos, data]);
  };
  const deleteHanlde = (data) => {
    setTodos(todos.filter((filter) => filter.id !== data.id));
  };

  const updateHandle = (data) => {
    setTodos(todos.map((update) => (update.id === data.id ? data : update)));
  };

  const filters = ["all", "active", "complete"];
  const [filter, setFilter] = useState(filters[0]);
  const filterhandler = (list) => {
    setFilter(list);
  };
  const filterd = getFilterItems(todos, filter);

  function getFilterItems(todo, filter) {
    if (filter === "all") {
      return todo;
    }
    return todos.filter((tod) => tod.status === filter);
  }
  return (
    <div>
      <Header
        filters={filters}
        todos={todos}
        filterhandler={filterhandler}
      ></Header>
      <ul>
        {filterd?.map((todo, idx) => (
          <List
            onDelete={deleteHanlde}
            onUpdate={updateHandle}
            key={`key_${idx}`}
            todo={todo}
            id={todo.id}
          ></List>
        ))}
        <Btn onAdd={btnHandler}></Btn>
      </ul>
    </div>
  );
}

export default Home2;
