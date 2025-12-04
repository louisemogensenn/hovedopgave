import mystyle from "./Soegefelt.module.css";
import { useState } from 'react';
import data from "../content.json";
import IndholdsBoks from "./IndholdsBoks";

export default function Soegefelt() {
  const [isActive, setIsActive] = useState(false);
  const [soegeTekst, setSoegeTekst] = useState('');
  
  const haandterSoegning = (event) => {
    const tekst = event.target.value;
    setSoegeTekst(tekst);
  };
  
  // Funktion der markerer søgeordet i teksten
  const markerSoegeord = (tekst, soegeord) => {
    if (soegeord.length === 0) return tekst;
    
    const regex = new RegExp(`(${soegeord})`, 'gi');
    const dele = tekst.split(regex);
    
    return dele.map((del, index) => {
      const erMatch = del.toLowerCase() === soegeord.toLowerCase();
      if (erMatch) {
        return <strong key={index}>{del}</strong>;
      }
      return del;
    });
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
            overskrift={markerSoegeord(dokument.overskrift, soegeTekst)}
            tekst={markerSoegeord(dokument.beskrivelse, soegeTekst)}
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