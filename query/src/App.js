import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Contents from "./pages/Contents";
import ContentsDetail from "./pages/ContentsDetail";
import Products from "./pages/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <div className="App"></div>
      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
