import { useState } from 'react';
import mystyle from "./Knap.module.css";
import loadingEllipse from "../assets/loadingEllipse.svg";
import fluebenDownload from "../assets/fluebenDownload.svg";

export default function Knap({knaptekst, onClick, primaer = true}) {
  const [downloadState, setDownloadState] = useState('ikkePaabegyndt'); // 'ikkePaabegyndt', 'loading', 'faerdig'
  
  const tekstIKnap = knaptekst.trim().toLowerCase(); // Fjern mellemrum og gør teksten små bogstaver
  const erDownload = tekstIKnap === "download"; // Tjek om teksten er "download" - returnerer true eller false
  
  const haandterKlik = (e) => {
    if (erDownload) {
      setDownloadState('loading');

      setTimeout(() => { 
        setDownloadState('faerdig');
      }, 2000); // Skifter til flueben efter 2 sekunder
      
    } else {
      if (onClick) onClick(e); // For andre knapper, kald bare onClick
    }
  };
  
  return (
    <>
      <section className={mystyle.knapOgPreview}>
        <button className={primaer ? (mystyle.knap) : (mystyle.sekundaer)} onClick={haandterKlik}>
          {erDownload ? ( // Hvis det er en download-knap
            <>
              {downloadState === 'ikkePaabegyndt' && <p>{knaptekst}</p>} {/* Hvis det er en download-knap og stadigt ikke er påbegyndt vises knapteksten */}
              
              {downloadState === 'loading' && ( // Hvis det er en downloadknap og stadiet er loading vises den roterende cirkel
                <img src={loadingEllipse} alt="Loading" className={mystyle.rotation} width="20" height="20"/>
              )}
              
              {downloadState === 'faerdig' && ( // Hvis det er en downloadknap og stadiet er færdig vises fluebenet
                <img src={fluebenDownload} alt="Faerdig med download" className={mystyle.flueben}/>
              )}
            </>
          ) : (
            <p>{knaptekst}</p> // Ellers vises teksten i knappen
          )}
        </button>
        {erDownload && ( // Hvis det er en download-knap vises preview teksten
          <p className={mystyle.preview}>Preview</p>
        )}
      </section>
    </>
  );
}