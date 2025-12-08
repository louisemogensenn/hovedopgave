import mystyle from "./Soegefelt.module.css";
import { useState } from 'react';
import data from "../content.json";
import IndholdsBoks from "./IndholdsBoks";

export default function Soegefelt() {
  const [isActive, setIsActive] = useState(false); // State for at styre label-aktivitet (om den er aktiv og derfor oppe eller om den er nede)
  const [soegeTekst, setSoegeTekst] = useState(''); // State for at gemme søgeteksten. Søgeteksten er tom i starten

  // En funktion til at håndtere søgningen
  const haandterSoegning = (event) => { // Når funktionen kaldes får den et event-objekt. Eventobjektet er med pilesyntaxen angivet under neden
    const tekst = event.target.value; // En konstant gemmer den værdi, brugeren skriver i søgefeltet
    setSoegeTekst(tekst); // Søgeteksten bliver opdateret med den nye værdi med funktionen setSoegeTekst
  };

  // Find dokumenter der matcher søgningen
  const soegeresultater = [];
  if (soegeTekst.length > 0) {
    for (let i = 0; i < data.dokumenter.length; i++) {
      const dokument = data.dokumenter[i];
      const soegeTekstLower = soegeTekst.toLowerCase();
      const overskriftLower = dokument.overskrift.toLowerCase();
      const beskrivelseLower = dokument.beskrivelse.toLowerCase();
      const findesIOverskrift = overskriftLower.includes(soegeTekstLower);
      const findesIBeskrivelse = beskrivelseLower.includes(soegeTekstLower);
      
      if (findesIOverskrift || findesIBeskrivelse) {
        soegeresultater.push(
          <IndholdsBoks 
            key={dokument.id}
            overskrift={dokument.overskrift}
            tekst={dokument.beskrivelse}
          />
        );
      }
    }
  }

  return (
    <>
      <section className={mystyle.soegefelt}>
        <input 
          className={mystyle.input} 
          type="text" 
          value={soegeTekst}
          onChange={haandterSoegning}
          onFocus={() => setIsActive(true)} 
          onBlur={() => setIsActive(soegeTekst.length > 0)}
        />
        <label className={`${mystyle.label} ${isActive ? mystyle.labelAktiv : ''}`}>
          <p>SØG</p>
        </label>
      </section>

      {soegeTekst.length > 0 && (
        <section className={mystyle.resultater}>
          {soegeresultater.length > 0 ? (
            <>
              <h3>Fundet {soegeresultater.length} resultater</h3>
              {soegeresultater}
            </>
          ) : (
            <p>Ingen dokumenter matcher din søgning</p>
          )}
        </section>
      )}
    </>
  );
}