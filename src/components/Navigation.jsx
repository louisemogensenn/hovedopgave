import { Link, useLocation } from "react-router-dom";
import mystyle from "./Navigation.module.css";

export default function Navigation() {

    let lokation = useLocation(); // Returnerer et objekct med informationer om den nuværende url
    let sti = lokation.pathname; // Returnerer kun stien fra url'en

    // Gemmer klassenavnet i en variabel for at kunne tilfæje og fjerne klassen aktiv dynamisk
    let indexClass;
    let gdprClass;
    let itSikkerhedClass;

    if (sti === "/") {
        indexClass += " " + mystyle.aktiv; // Klassen aktiv tilføjes til variablen gdprClass
      } else if (sti === "/itSikkerhed") {
        itSikkerhedClass += " " + mystyle.aktiv; // Klassen aktiv tilføjes til variablen indexClass
      } else if (sti === "/gdpr") {
        gdprClass += " " + mystyle.aktiv; // Klassen aktiv tilføjes til variablen itSikkerhedClass
      } 

  return (
    <>
    <nav className={mystyle.navigation}>
      <Link to="/"><h2>OM</h2></Link>
      <Link to="/itSikkerhed"><h2>IT-SIKKERHED</h2></Link>
      <Link to="/gdpr"><h2>GDPR</h2></Link>
    </nav>
    </>
  );
}

