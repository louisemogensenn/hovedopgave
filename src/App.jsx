import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Om from "./views/Om";
import GDPR from "./views/GDPR";
import ItSikkerhed from "./views/ItSikkerhed";

export default function App() {
  const Router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Om />
      },

      {
        path: "/gdpr",
        element: <GDPR />
      },
      {
        path: "/itSikkerhed",
        element: <ItSikkerhed />
      }
    ]
  }]);

  return (
    <RouterProvider router={Router} />
  )
}
