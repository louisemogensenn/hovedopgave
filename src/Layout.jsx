import LogoSektion from "./components/LogoSektion.jsx";
import Inputfelt from "./components/Inputfelt.jsx";
import Soegefelt from "./components/Soegefelt";
import Navigation from "./components/Navigation";
import { Outlet, useLocation } from "react-router-dom";
import BundLogo from "./components/BundLogo";
import Sorter from "./components/Sorter.jsx";

export default function Layout() {
  return (
    <>
      <LogoSektion />
      <Soegefelt />
      <Navigation />
      <Sorter />
      <main>
        <Outlet />
        {/* Alt indholdet, der skifter ved klik - henviser til siden main */}
      </main>
      <BundLogo />
    </>
  );
}
