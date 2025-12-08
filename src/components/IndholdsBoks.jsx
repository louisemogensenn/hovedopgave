import mystyle from './IndholdsBoks.module.css';
import flueben from '../assets/flueben.svg';
import Knap from './Knap.jsx';
import AnmodModal from "./AnmodModal.jsx";
import PreviewModal from "./PreviewModal.jsx";
import { useState } from 'react';

export default function Indholdsboks({overskrift, tekst, dokument}) {
  const [erUdvidet, setErUdvidet] = useState(false);
  const [erAnmodModalAaben, setErAnmodModalAaben] = useState(false);
  const [erPreviewModalAaben, setErPreviewModalAaben] = useState(false);
  
  const haandterLaesMere = () => {
    setErUdvidet(!erUdvidet);
  };

  const haandterDownload = () => {
    console.log("Download fil:", overskrift);
    // Her tilføjer du download-logik senere
  };

  const haandterAnmod = () => {
    setErAnmodModalAaben(true);
  };

  const haandterPreview = () => {
    setErPreviewModalAaben(true);
  };

  return (
    <>
      <section className={mystyle.ydreboks}>
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
  {dokument.direkteDownload ? (
    <Knap 
      knaptekst="Download" 
      onClick={haandterDownload}
      onPreviewClick={haandterPreview}
    />
  ) : (
    <Knap knaptekst="Anmod" onClick={haandterAnmod} />
  )}
</article>
        </section>
      </section>

      <AnmodModal 
        erAaben={erAnmodModalAaben} 
        luk={() => setErAnmodModalAaben(false)}
        overskrift={overskrift}
      />

      <PreviewModal 
        erAaben={erPreviewModalAaben} 
        luk={() => setErPreviewModalAaben(false)}
        overskrift={overskrift}
        dokument={dokument}
      />
    </>
  );
}