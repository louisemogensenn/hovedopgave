import mystyle from "./Soegefelt.module.css";
import { useState } from 'react';

export default function Soegefelt() { /* I oprettelsen af komponenten skal inputetfeltet have en placeholder og en type inputangivet */
    const [isActive, setIsActive] = useState(false); /* setIsActive benyttes til at ændre state på isAtice. Denne kan enten være true eller false */

    return (

      <>
        <section className={mystyle.soegefelt}>
          <input className={mystyle.input} type="text" onFocus={() => setIsActive(true)} onBlur={(e) => setIsActive(e.target.value !== '')}/>
          <label className={`${mystyle.label} ${isActive ? mystyle.labelAktiv : ''}`}><p>SØG</p></label>
        </section>
      </>  
      );
}