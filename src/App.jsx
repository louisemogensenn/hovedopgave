import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Om from "./views/Om";
import GDPR from "./views/GDPR";
import ItSikkerhed from "./views/ItSikkerhed";
import Soeg from "./views/Soeg";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout-komponenten bruges som det overordnede layout - altså den ramme om indholder, der altid vises
    children: [
      {
        path: '/om',
        element: <Om />, // Komponentet Om vises, når brugeren navigerer til /om
      },

      {
        path: '/gdpr',
        element: <GDPR />, // Komponentet GDPR vises, når brugeren navigerer til /gdpr
      },
      {
        path: '/itSikkerhed',
        element: <ItSikkerhed />, // Komponentet ItSikkerhed vises, når brugeren navigerer til /itSikkerhed
      },
      {
        path: 'soeg',
        element: <Soeg /> // Komponentet Soeg vises, når brugeren navigerer til /soeg
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={Router} />;
}
