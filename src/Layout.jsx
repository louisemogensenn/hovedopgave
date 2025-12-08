import LogoSektion from "./components/LogoSektion.jsx";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";
import BundLogo from "./components/BundLogo";
import Sorter from "./components/Sorter.jsx";

export default function Layout() {
  return (
    <>
      <LogoSektion />
      <Navigation /> {/* Indeholder nu både søgefelt og navigationlinks */}
      <Sorter />
      <main>
        <Outlet />
        {/* Alt indholdet, der skifter ved klik - henviser til siden main */}
      </main>
      <BundLogo />
    </>
  );
}