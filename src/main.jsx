import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DealerReg from "./pages/DealerReg.jsx";
import DealerLogin from "./pages/DealerLogin.jsx";
import DealerHome from "./pages/DealerHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dealerreg",
    element: <DealerReg />,
  },
  {
    path: "dealerlogin",
    element: <DealerLogin />,
  },
  {
    path: "dealerhome",
    element: <DealerHome />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
