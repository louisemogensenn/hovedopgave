import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from "../content.json";
import IndholdsBoks from "../components/IndholdsBoks";
import styles from "./Soeg.module.css";

export default function Soeg() {
  const location = useLocation();
  const soegeTekst = location.state?.soegeTekst || ''; // Henter søgetekst fra navigation state
  const [resultater, setResultater] = useState([]); // State til at gemme søgeresultater

  // useEffect kører hver gang soegeTekst ændrer sig
  useEffect(() => {
    // Hvis der ikke er søgetekst, vis alle dokumenter i alfabetisk rækkefølge
    if (soegeTekst.length === 0) {
      const alleDokumenter = [...data.dokumenter].sort((a, b) => 
        a.overskrift.localeCompare(b.overskrift, 'da')
      );
      setResultater(alleDokumenter);
      return;
    }

    // Find dokumenter der matcher søgningen
    const soegeresultater = [];
    for (let i = 0; i < data.dokumenter.length; i++) {
      const dokument = data.dokumenter[i];
      const soegeTekstLower = soegeTekst.toLowerCase();
      const overskriftLower = dokument.overskrift.toLowerCase();
      const beskrivelseLower = dokument.beskrivelse.toLowerCase();
      
      // Tjek om søgeteksten findes i overskrift eller beskrivelse
      if (overskriftLower.includes(soegeTekstLower) || beskrivelseLower.includes(soegeTekstLower)) {
        soegeresultater.push(dokument);
      }
    }
    
    setResultater(soegeresultater); // Opdater resultater state
  }, [soegeTekst]); // Kør useEffect når soegeTekst ændres

  return (
    <div className={styles.soegeside}>
      {soegeTekst.length === 0 ? (
        <>
          <h2>Alle dokumenter ({resultater.length})</h2>
          <div className={styles.resultater}>
            {resultater.map(dokument => (
              <IndholdsBoks 
                key={dokument.id}
                overskrift={dokument.overskrift}
                tekst={dokument.beskrivelse}
                dokument={dokument}
              />
            ))}
          </div>
        </>
      ) : resultater.length > 0 ? (
        <>
          <h2>Fundet {resultater.length} resultater</h2>
          <div className={styles.resultater}>
            {resultater.map(dokument => (
              <IndholdsBoks 
                key={dokument.id}
                overskrift={dokument.overskrift}
                tekst={dokument.beskrivelse}
                dokument={dokument}
              />
            ))}
          </div>
        </>
      ) : (
        <p>Ingen dokumenter matcher din søgning</p>
      )}
    </div>
  );
}