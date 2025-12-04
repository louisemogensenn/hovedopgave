import { Link, useLocation } from "react-router-dom";
import mystyle from "./Navigation.module.css";
import data from "../content.json";

export default function Navigation() {
  const lokation = useLocation();
  const sti = lokation.pathname;
  
  const kategorier = []; // Et tomt array hvori alle kategorier skal gemmes
  
  for (let i = 0; i < data.dokumenter.length; i++) { // Løber igennem json-filens dokumenter. Dokumenter er et array i content.json der indeholdet et antal dokument-objekter
    const dokument = data.dokumenter[i]; // Der oprettes en konstant, der gemmer objektinformationerne for hvert dokument
    
    for (let j = 0; j < dokument.kategorier.length; j++) { // Løber det nuværende dokuments kategorier
      const kategori = dokument.kategorier[j]; // Gemmer det nuværende dokuments kategori eller kategorier i en konstant
      const kategoriFindesIkke = !kategorier.includes(kategori); // Tjekker om kategorien allerede findes i arrayet. Hvis ikke gemmes kategorien
      
      if (kategoriFindesIkke) { // Hvis denne konstant har en værdi af true, tilføjes kategorien til arrayet
        kategorier.push(kategori); // .push tilføjer et nyt element til slutningen af et array
      }
    }
  }
  
  const links = []; // Et tomt array, der skal indholde navigationens links
  
  for (let i = 0; i < kategorier.length; i++) { // Løber igennem alle kategoierne i arrayet 
    const kategori = kategorier[i]; // Opretter en konstant, der gemmer den nuværende kategori
    const erAktiv = sti === `/${kategori}`; // Opretter en konstant, der tjekker om den nuværende sti matcher kategorien, der er klikket på. Backticks ` ` bruges i stedet for normale citationstegn og ${variabel} indsætter værdien af variablen inde i strengen
    const klasseNavn = erAktiv ? mystyle.aktiv : ""; // Opretter en konstnt, der får tildelt værdien aktiv, hvis erAktiv er true - ellers en tom streng. Dette er en ternær operator.
    
    links.push( // Tilføjer et link-element til links-arrayet
      <Link key={kategori} /* Sikrer, at dette link er unikt */
            to={`/${kategori}`} /* Bruger backticks og $ til at omskrive til tekststreng */
            className={klasseNavn}> {/* Giver klassen klasseNavn */}
              
              <h2>{kategori.toUpperCase()}</h2>
      </Link>
    );
  }
  
  return (
    <nav className={mystyle.navigation}>
      {links} {/* Returnerer arrayet */}
    </nav>
  );
}