import { useEffect } from 'react';
import mystyle from './AnmodModal.module.css';
import Inputfelt from './Inputfelt';
import Knap from './Knap';
import Kryds from '../assets/kryds.svg';

export default function AnmodModal({ erAaben, luk, overskrift }) {

  if (!erAaben) return null; // Returner null hvis modalen ikke er åben

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
        
        <p>Vores <span>{overskrift}</span> er begrænset i den offentlige adgang, og derfor skal denne anmodes om eksplicit. Indtast dine oplysninger og angiv din årsag til adgangsanmodningen. Vi gennemlæser din anmonding inden for 24 timer, og svar samt eventuelt dokumentation sendes på til den angivne mail.</p>
        
        <form className={mystyle.inputfelter}>
          <Inputfelt label="NAVN" type="text" />
          <Inputfelt label="VIRKSOMHED" type="text" />
          <Inputfelt label="E-MAIL" type="email" />
          <aside className={mystyle.textarea}>
            <Inputfelt label="ANMODNING" type="textarea" />
          </aside>
        </form>
          
          <aside className={mystyle.knapper}>
            <Knap className={mystyle.knap} knaptekst="Afbryd" onClick={luk} />
            <Knap className={mystyle.knap} knaptekst="Send anmodning" />
          </aside>
        
      </section>
    </>
  );
}