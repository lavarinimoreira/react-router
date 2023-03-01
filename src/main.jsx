import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 1- setting router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import ContactDetails from "./routes/ContactDetails";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 -error page
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 5 - nested routes - unique key
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
