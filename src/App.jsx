import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Template from "./Template";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
