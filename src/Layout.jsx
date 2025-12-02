import LogoSektion from "./components/LogoSektion";
import Soegefelt from "./components/Soegefelt";
import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <>
        {/* Heri angives rammen for indholdet - altså det, der ikke ændrer sig */}
        <LogoSektion />
        <Soegefelt />
        <Navigation/>
        <main> {/* Henviser til main.jsx */}
            <Outlet /> {/* Her indsættes det indhold, der ændrer sig */}
        </main>


        </>
    )
}