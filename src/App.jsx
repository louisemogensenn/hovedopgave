import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Om from "./views/Om";
import GDPR from "./views/GDPR";
import ItSikkerhed from "./views/ItSikkerhed";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/om',
        element: <Om />,
      },

      {
        path: '/gdpr',
        element: <GDPR />,
      },
      {
        path: '/itSikkerhed',
        element: <ItSikkerhed />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={Router} />;
}
