import "./App.css";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home2 from "./pages/Home2";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Video from "./pages/Video";
import VideoDetail from "./pages/VideoDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <p>낫</p>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home2",
          element: <Home2 />,
        },
        {
          path: "/video",
          element: <Video />,
        },
        {
          path: "/video/:videoId",
          element: <VideoDetail />,
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
