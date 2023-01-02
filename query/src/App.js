import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Contents from "./pages/Contents";
import ContentsDetail from "./pages/ContentsDetail";
import Products from "./pages/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,

          element: <Home />,
        },
        {
          path: "/contents",
          element: <Contents />,
        },
        {
          path: "/contents/:contentsId",
          element: <ContentsDetail />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
