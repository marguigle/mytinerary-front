import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Cities from "./pages/cities/Cities";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
