import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DealerReg from "./pages/DealerReg.jsx";
import DealerLogin from "./pages/DealerLogin.jsx";
import DealerHome from "./pages/DealerHome.jsx";
import ClientSchedule from "./pages/ClientSchedule.jsx";
import SuccessSchedule from "./pages/SucessSchedule.jsx";
import SuccessDealer from "./pages/SuccessDealer.jsx";

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
  {
    path: "clientschedule",
    element: <ClientSchedule />,
  },
  {
    path: "successschedule",
    element: <SuccessSchedule />,
  },
  {
    path: "successdealer",
    element: <SuccessDealer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
