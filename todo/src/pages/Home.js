import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./home.module.css";
import useStore from "../store";
import Todo from "../components/Todo";
function Home(props) {
  //   const { text, ChangeText } = useStore();
  const [todo, setTodo] = useState([
    {
      id: "123",
      do: "장보기",
      status: "active",
    },
    {
      id: "4234",
      do: "밥먹기",
      status: "active",
    },
  ]);

  const [text, setText] = useState("");

  const addHanlder = (data) => {
    setTodo([...todo, data]);
  };
  const ChangeText = (e) => {
    setText(e.target.value);
  };
  const addSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      addHanlder({ id: uuidv4(), do: text, status: "active" });
    } else {
      alert("부족해");
    }
  };

  const handleDelete = (del) =>
    setTodo(todo.filter((filter) => filter.id !== del.id));
  const hadleUpdate = (update) =>
    setTodo(todo.map((t) => (t.id === update.id ? update : t)));

  const filters = ["all", "active", "complete"];
  const [filter, setFilter] = useState(filters[0]);
  const filterHanlder = (e) => {
    setFilter(e);
  };

  const filtered = getFilteredItems(todo, filter);
  function getFilteredItems(list, filter) {
    if (filter === "all") {
      return list;
    }
    return todo.filter((to) => to.status === filter);
  }

  return (
    <div className={styles.todo_wrap}>
      <div className={styles.container}>
        <div className={styles.todo_inner}>
          <div className={styles.todo_filter_wrap}>
            <button type="button" className={styles.mode}>
              <span> 다크</span>
            </button>
            <div className={styles.filters}>
              {filters.map((value, index) => (
                <button
                  key={uuidv4()}
                  type="button"
                  onClick={() => {
                    filterHanlder(value);
                  }}
                >
                  <span>{value}</span>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.todo_data_wrap}>
            <ul>
              {filtered.map((list) => (
                <Todo
                  key={list.id}
                  id={list.id}
                  list={list}
                  onUpdate={hadleUpdate}
                  ondelete={handleDelete}
                  filter={filter}
                ></Todo>
              ))}
            </ul>
          </div>
          <form className={styles.todo_input} onSubmit={addSubmit}>
            <input type="text" placeholder="입력하세요" onChange={ChangeText} />
            <button type="button" onClick={addSubmit}>
              <span>추가하기</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
