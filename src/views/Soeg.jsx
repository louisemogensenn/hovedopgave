import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../content.json"; // Opretter forbindelse til datafilen content.json
import IndholdsBoks from "../components/IndholdsBoks";
import mystyle from "./Soeg.module.css";

export default function Soeg() {
  const location = useLocation(); // Returnerer location-objektet, der indeholder oplysninger om den aktuelle URL
  let soegeTekst = ""; // Søgeteksten er en tom streng som standard
  if (location.state && location.state.soegeTekst) { // Hvis der findes en søgetekst i location.state der hentes fra Navigation.jsx og brugeren har skrevet noget i søgefeltet, der også hentes fra Navigation.jsx
    soegeTekst = location.state.soegeTekst; // Opdateres søgetekst med den tekst brugeren har skrevet i søgefeltet
  }
  const [resultater, setResultater] = useState([]); // State til at gemme søgeresultater

  useEffect(() => { // useEffect kører hver gang soegeTekst ændrer sig - se anden parameter i useEffect []
    // Hvis søgeteksten er tom, vis alle dokumenter
    if (soegeTekst.length === 0) {
      setResultater(data.dokumenter); // Opdaterer resultater med alle dokumenter fra data.json
      return; // Afslutter funktionen her
    }

    const soegeresultater = []; // Tomt array til at gemme søgeresultater
    for (let i = 0; i < data.dokumenter.length; i++) { // Løber igennem alle dokumenter i data.json
      const dokument = data.dokumenter[i]; // Gemmer det nuværende dokument i en konstant
      const soegeTekstLower = soegeTekst.toLowerCase(); // Gør søgeteksten til små bogstaver
      const overskriftLower = dokument.overskrift.toLowerCase(); // Gør dokumentets overskrift til små bogstaver
      const beskrivelseLower = dokument.beskrivelse.toLowerCase(); // Gør dokumentets beskrivelse til små bogstaver
      // Tjek om søgeteksten findes i overskrift eller beskrivelse
      if (
        overskriftLower.includes(soegeTekstLower) || // Hvis overskriften indeholder søgeteksten eller...
        beskrivelseLower.includes(soegeTekstLower) // Hvis beskrivelsen indeholder søgeteksten
      ) {
        soegeresultater.push(dokument); // Hvis en af de to ovenstående betingelser er opfyldt, tilføjes dokumentet til søgeresultaterne i slutningen af arrayet med .push
      }
    }
    setResultater(soegeresultater); // Opdaterer resultater med de fundne søgeresultater
  }, [soegeTekst]); // Kør useEffect når soegeTekst ændres - så hver gang brugerne tilføjer eller fjerner et bogstav i søgefeltet opdateres indholdet

  return (
    <article>
      {soegeTekst.length === 0 ? ( // Via en ternær operator tjekkes om søgeteksten er tom
        <>
          <p className={mystyle.tekst}>Viser alle {resultater.length} dokumenter</p> {/* Hvis søgeteksten er tom vises denne tekst */}
          <section> {/* Container til alle dokumenter */}
            {resultater.map((dokument) => ( // Mapper igennem alle dokumenter og viser et IndholdsBoks-komponent for hvert dokument
              <IndholdsBoks
                key={dokument.id} // Sikrer en unik key til hver boks-komponent
                overskrift={dokument.overskrift} // Angiver overskriften for boksen for det nuværende dokuments overskrift
                tekst={dokument.beskrivelse} // Angiver beskrivelsen i boksen for det nuværende dokuments beskrivelse
                dokument={dokument} // Sender hele dokument-objektet som prop til IndholdsBoks-komponenten
              />
            ))}
          </section>
        </>
      ) : resultater.length > 0 ? ( // Ellers tjekkes det om der er fundet resultater
        <>
          <p className={mystyle.tekst}>{resultater.length} resultater matcher din søgning</p> {/* Hvis dette er tilfældet angivet hvor mange resultater, der er fundet */}
          <section> {/* Container til søgeresultaterne */}
            {resultater.map((dokument) => ( // Mapper igennem resultaterne og viser et IndholdsBoks-komponent for hvert dokument
              <IndholdsBoks
                key={dokument.id} // Sikrer en unik key til hver boks-komponent
                overskrift={dokument.overskrift} // Angiver overskriften for boksen for det nuværende dokuments overskrift
                tekst={dokument.beskrivelse} // Angiver beskrivelsen i boksen for det nuværende dokuments beskrivelse
                dokument={dokument} // Sender hele dokument-objektet som prop til IndholdsBoks-komponenten
              />
            ))}
          </section>
        </>
      ) : ( // Hvis ingen resultater er fundet og søgeteksten ikke er tom vises denne tekst
        <p className={mystyle.tekst}>Ingen dokumenter matcher din søgning</p>
      )}
    </article>
  );
}