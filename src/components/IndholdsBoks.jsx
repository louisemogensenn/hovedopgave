import mystyle from './IndholdsBoks.module.css';
import flueben from '../assets/flueben.svg';
import infoikon from '../assets/infoikon.svg';
import Knap from './Knap.jsx';
import { useState } from 'react';

export default function Indholdsboks({overskrift, tekst}) {
  const [erUdvidet, setErUdvidet] = useState(false);
  
  const haandterLaesMere = () => {
    setErUdvidet(!erUdvidet);
  };
  
  // const tekstIKnap = knaptekst.trim().toLowerCase(); // Fjern mellemrum og gør teksten små bogstaver
  // const erDownload = tekstIKnap === "download"; // Tjek om teksten er "download" - returnerer true eller false
  
  return (
    <>
      <section className={mystyle.ydreboks}>
        {/* 
            {erDownload &&
                <aside>
                    <img className={mystyle.infoikon} src={infoikon} alt="Info ikon"/>
                </aside>
            }
        */}
        <section className={mystyle.indreboks}>
          <article className={mystyle.venstre}>
            <img className={mystyle.ikon} src={flueben} alt="Ikon-type"/>
          </article>
          <article className={mystyle.midte}>
            <h3>{overskrift}</h3>
            <p className={erUdvidet ? '' : mystyle.tekstBeskaaret}>
              {tekst}
            </p>
            {!erUdvidet && (
              <button 
                className={mystyle.laesMereKnap} 
                onClick={haandterLaesMere}
              >
                Læs mere
              </button>
            )}
            {erUdvidet && (
              <button 
                className={mystyle.laesMereKnap} 
                onClick={haandterLaesMere}
              >
                Læs mindre
              </button>
            )}
          </article>
          <article className={mystyle.hoejre}>
            {/* Her placeres knap og en toggle, der viser preview, hvis knappen er en download-knap */}
            <Knap knaptekst="Download" />
          </article>
        </section>
      </section>
    </>
  );
}