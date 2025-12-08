import { useEffect } from 'react';
import mystyle from './AnmodModal.module.css';
import Inputfelt from './Inputfelt';
import Knap from './Knap';
import Kryds from '../assets/kryds.svg';

export default function AnmodModal({ erAaben, luk, overskrift }) {
  useEffect(() => {
    const haandterEscape = (event) => {
      if (event.key === 'Escape') {
        luk();
      }
    };

    if (erAaben) {
      document.addEventListener('keydown', haandterEscape);
    }

    return () => {
      document.removeEventListener('keydown', haandterEscape);
    };
  }, [erAaben, luk]);

  const haandterIndsendelse = (event) => {
    event.preventDefault();
    luk();
  };

  if (!erAaben) return null;

  return (
    <>
      <div className={mystyle.overlay} onClick={luk}></div>
      
      <div className={mystyle.modal}>

        <button className={mystyle.lukKnap} onClick={luk}>
          <img src={Kryds} alt="Luk" />
        </button>
        
        <section className={mystyle.modalOverskrifter}>
          <h2 className={mystyle.oeversteOverskrift}>ANMOD OM ADGANG TIL</h2>
          <h2>{overskrift}</h2>
        </section>
        
        <p>Vores <span>{overskrift}</span> er begrænset i den offentlige adgang, og derfor skal denne anmodes om eksplicit. Indtast dine oplysninger og angiv din årsag til adgangsanmodningen. Vi gennemlæser din anmonding inden for 24 timer, og svar samt eventuelt dokumentation sendes på til den angivne mail.</p>
        
        <form className={mystyle.inputfelter}>
          <Inputfelt className={mystyle.specialInputfelt} label="NAVN" type="text" />
          <Inputfelt className={mystyle.specialInputfelt} label="VIRKSOMHED" type="text" />
          <Inputfelt className={mystyle.specialInputfelt} label="E-MAIL" type="email" />
          <Inputfelt className={mystyle.specialInputfelt} label="ANMODNING" type="textarea" />
        </form>
          
          <aside className={mystyle.knapper}>
            <Knap className={mystyle.knap} knaptekst="Afbryd" onClick={luk} />
            <Knap className={mystyle.knap} knaptekst="Send anmodning" />
          </aside>
        
      </div>
    </>
  );
}