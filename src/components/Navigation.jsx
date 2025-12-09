import { Link, useLocation, useNavigate } from "react-router-dom";
import mystyle from "./Navigation.module.css";
import data from "../content.json";
import { useState, useEffect } from 'react';

export default function Navigation() {
  const lokation = useLocation();
  const navigate = useNavigate();
  const sti = lokation.pathname;
  const [isActive, setIsActive] = useState(false); // State for at styre label-aktivitet
  const [soegeTekst, setSoegeTekst] = useState(''); // State for at gemme søgeteksten

  // Tømmer søgefeltet, når brugeren klikker væk fra søgesiden
  useEffect(() => {
    if (sti !== '/soeg') { // Hvis brugeren ikke er på søgesiden - altså hvis stien ikke er /soeg
      setSoegeTekst(''); // Skal søgeteksten være tom
      setIsActive(false); // Og staten isActive skal være false
    }
  }, [sti]); // useEffect krer hver gang stien ændrer sig
  
  const kategorier = []; // Et tomt array hvori alle kategorier skal gemmes
  for (let i = 0; i < data.dokumenter.length; i++) { // Løber igennem json-filens dokumenter. Dokumenter er et array i content.json der indeholdet et antal dokument-objekter
    const dokument = data.dokumenter[i]; // Der oprettes en konstant, der gemmer objektinformationerne for hvert dokument
    for (let j = 0; j < dokument.kategorier.length; j++) { // Løber det nuværende dokuments kategorier
      const kategori = dokument.kategorier[j]; // Gemmer det nuværende dokuments kategori eller kategorier i en konstant
      const kategoriFindesIkke = !kategorier.includes(kategori); // Tjekker om kategorien allerede findes i arrayet. Hvis ikke gemmes kategorien
      if (kategoriFindesIkke) { // Hvis denne konstant har en værdi af true, tilføjes kategorien til arrayet
        kategorier.push(kategori); // .push tilføjer et nyt element til slutningen af et array - her arrayet kategorier
      }
    }
  }

  const links = []; // Et tomt array, der skal indholde navigationens links
  for (let i = 0; i < kategorier.length; i++) { // Løber igennem alle kategoierne i arrayet 
    const kategori = kategorier[i]; // Opretter en konstant, der gemmer den nuværende kategori
    const urlKategori = kategori.replace(/-/g, ''); // Fjerner bindestreger fra kategorinavnet for at lave URL-venlig sti
    const erAktiv = sti === `/${urlKategori}`; // Opretter en konstant, der tjekker om den nuværende sti matcher kategorien, der er klikket på. Backticks bruges i stedet for normale citationstegn og ${variabel} indsætter værdien af variablen inde i strengen
    const klasseNavn = erAktiv ? mystyle.aktiv : ""; // Opretter en konstnt, der får tildelt værdien aktiv, hvis erAktiv er true - ellers en tom streng. Dette er en ternær operator.
    links.push( // Tilføjer et link-element til links-arrayet
      <Link 
        key={kategori} /* Sikrer, at dette link er unikt - kategori får værdi fra const kategorier[i] */
        to={`/${urlKategori}`} /* Bruger backticks og $ til at omskrive til tekststreng uden bindestreger */
        className={klasseNavn}> {/* Giver klassen klasseNavn */}
        <h2>{kategori.toUpperCase()}</h2> {/* Angiver kategorien i caps (store bogstaver) */}
      </Link>
    );
  }

  // Håndter når man klikker i søgefeltet
  const haandterFocus = () => {
    setIsActive(true); // Opdaterer værdien for isActive med setIsActive til true
    navigate('/soeg'); // Naviger til søgeview
  };

  // Håndter når man skriver i søgefeltet
  const haandterSoegning = (event) => { // Event er det der sker - i dette tilfælde når brugeren skriver i søgefeltet
    const tekst = event.target.value; // Gemmer den tekst brugeren skriver i en konstant
    setSoegeTekst(tekst); // Opdaterer søgeteksten med den tekst brugeren skriver
    navigate('/soeg', { state: { soegeTekst: tekst } }); // Naviger til søgeview med søgetekst via .state, der kan tilgås i Soeg.jsx
  };

  return (
    <>
      {/* Søgefelt */}
      <section className={mystyle.soegefelt}>
        <input className={mystyle.input} type="text" value={soegeTekst} onChange={haandterSoegning} onFocus={haandterFocus} onBlur={() => setIsActive(soegeTekst.length > 0)} />
        <label className={`${mystyle.label} ${isActive ? mystyle.labelAktiv : ''}`}> {/* Tildeler klassen label og hvis klassen er altiv får den også klassen Aktiv tilføjet */}
          <p>SØG</p>
        </label>
      </section>

      {/* Navigation */}
      <section className={mystyle.ydreSektion}>
        <nav className={mystyle.navigation}>
          {links} {/* Returnerer arrayet */}
        </nav>
      </section>
    </>
  );
}