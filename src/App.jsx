import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Cities from "./pages/cities/Cities";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cities",
    element: <Cities />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    /*     <>
    
      
    </> */
  );
}

export default App;
