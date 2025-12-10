import mystyle from './AnmodModal.module.css';
import { useState } from 'react';
import Inputfelt from './Inputfelt';
import Knap from './Knap';
import Kryds from '../assets/kryds.svg';
import loadingEllipse from "../assets/loadingEllipse.svg";
import fluebenDownload from "../assets/fluebenDownload.svg";

export default function AnmodModal({ erAaben, luk, overskrift }) {
  if (!erAaben) return null; // Returner null hvis modalen ikke er åben
  const [downloadState, setDownloadState] = useState('ikkePaabegyndt'); // 'ikkePaabegyndt', 'loading', 'faerdig'

  const beskrivelseAfAnmodaarsag = "Vores " + overskrift + " er begrænset i den offentlige adgang, og derfor skal denne anmodes om eksplicit. Indtast dine oplysninger og angiv din årsag til adgangsanmodningen. Vi gennemlæser din anmonding inden for 24 timer, og svar samt eventuelt dokumentation sendes på til den angivne mail.";
  const confirmationBesked = "Din anmodning er sendt. Vi bestræber os på at besvare din henvendelse inden for 24 timer i hverdage.";
  
  const haandterKlik = () => {
    setDownloadState('loading');
    setTimeout(() => {
      setDownloadState('faerdig');
    }, 2000);
  };

  return (
    <>
      <section className={mystyle.overlay} onClick={luk}></section>
      
      <section className={mystyle.modal}>

        <button className={mystyle.lukKnap} onClick={luk}>
          <img src={Kryds} alt="Luk" />
        </button>
        
        <section className={mystyle.modalOverskrifter}>
          <h2 className={mystyle.oeversteOverskrift}>ANMOD OM ADGANG TIL</h2>
          <h2>{overskrift}</h2>
        </section>
        
        <p>
          {downloadState === 'faerdig' ? confirmationBesked : 
          beskrivelseAfAnmodaarsag
          }
          </p>
        
        <form className={mystyle.inputfelter}>
          <Inputfelt label="NAVN" type="text" />
          <Inputfelt label="VIRKSOMHED" type="text" />
          <Inputfelt label="E-MAIL" type="email" />
          <aside className={mystyle.textarea}>
            <Inputfelt label="ANMODNING" type="text" />
          </aside>
        </form>
          
          <aside className={mystyle.knapper}>
            <Knap className={mystyle.knap} knaptekst="Afbryd" onClick={luk} />
            <button className={mystyle.knap} onClick={haandterKlik}>
              {downloadState === 'ikkePaabegyndt' && <p>Send anmodning</p>} {/* Hvis det er en download-knap og stadigt ikke er påbegyndt vises knapteksten */}
              {downloadState === 'loading' && ( // Hvis det er en downloadknap og stadiet er loading vises den roterende cirkel
                <img src={loadingEllipse} alt="Loading" className={mystyle.rotation} width="20" height="20"/>
              )}
              {downloadState === 'faerdig' && ( // Hvis det er en downloadknap og stadiet er færdig vises fluebenet
                <img src={fluebenDownload} alt="Faerdig med download" className={mystyle.flueben}/>
              )}
            </button>
          </aside>
        
      </section>
    </>
  );
}