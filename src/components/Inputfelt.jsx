import { useState } from 'react';
import mystyle from './Inputfelt.module.css';

export default function Inputfelt({label, type}) { /* I oprettelsen af komponenten skal inputetfeltet have en placeholder og en type inputangivet */
    const [isActive, setIsActive] = useState(false); /* setIsActive benyttes til at ændre state på isAtice. Denne kan enten være true eller false */

    return (
        <div className={mystyle.indholdscontainer}>
          <input
            type={type}
            onFocus={() => setIsActive(true)}
            onBlur={(e) => setIsActive(e.target.value !== '')} // Hvis inputfeltet mister fokus (brugeren klikker uden for), tjekkes det, om der er noget tekst i feltet. Hvis der er, forbliver isActive true, ellers sættes den til false
            className={mystyle.input}
          />
          <label className={`${mystyle.label} ${isActive ? mystyle.labelAktiv : ''}`}> {/* Her får label klassen label og hvis den er aktiv får den klassen labelActive */}
            <p>{label}</p>
          </label>
        </div>
      );
}