import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Cities from "./pages/cities/Cities";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import CityDetail from "./components/cityDetail/CityDetail";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";

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
      {
        path: "/cityDetail/:id",
        element: <CityDetail />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
