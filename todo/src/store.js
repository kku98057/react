import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { devtools } from "zustand/middleware";
const useStore = create(
  devtools((set) => ({
    todos: [
      {
        id: uuidv4(),
        text: "장보기",
        status: "active",
      },
      {
        id: uuidv4(),
        text: "밥먹기",
        status: "active",
      },
    ],
    setTodos: (data) => {
      set((state) => ({ todos: data }));
    },
    texts: "",
    setTexts: (value) => {
      set(() => ({ texts: value }));
    },
    darkMode: false,
    setDarkMode: () => {
      set((state) => ({ darkMode: !state.darkMode }));
    },
  }))
);

export default useStore;
