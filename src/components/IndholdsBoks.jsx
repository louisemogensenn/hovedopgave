import mystyle from "./IndholdsBoks.module.css";
import flueben from "../assets/flueben.svg";
import Knap from "./Knap.jsx";
import AnmodModal from "./AnmodModal.jsx";
import { useState } from "react";

export default function Indholdsboks({ overskrift, tekst, dokument }) { // Når Indholdsboks kaldes, modtager den props: overskrift (der bruges til at angive overskriften), tekst, der bruges til at angive indholdsteksten, og dokument (et objekt, der indeholder oplysninger om dokumentet, herunder om det kan downloades direkte eller ej).
  const [erUdvidet, setErUdvidet] = useState(false); // State til at spore om teksten er udvidet eller ej
  const [erAnmodModalAaben, setErAnmodModalAaben] = useState(false); // State til at spore om anmodningsmodalen er åben eller ej

  const haandterLaesMere = () => { // Kaldes når brugeren klikker på "Læs mere" eller "Læs mindre" knappen
    setErUdvidet(!erUdvidet); // Skifter tilstanden af erUdvidet mellem sand og falsk
  };

  const haandterAnmod = () => { // Kaldes når brugeren klikker på "Anmod" knappen
    setErAnmodModalAaben(true); // Sætter tilstanden af erAnmodModalAaben til sand for at åbne modalvinduet
  };

  return (
    <>
      <section className={mystyle.ydreboks}>
        <section className={mystyle.indreboks}>
          <article className={mystyle.venstre}>
            <img className={mystyle.ikon} src={flueben} alt="Ikon-type" />
          </article>
          <article className={mystyle.midte}>
            <h3>{overskrift}</h3>
            <p className={erUdvidet ? "" : mystyle.tekstBeskaaret}>{tekst}</p>
            {!erUdvidet && (
              <button className={mystyle.laesMereKnap} onClick={haandterLaesMere}>
                Læs mere
              </button>
            )}
            {erUdvidet && (
              <button className={mystyle.laesMereKnap} onClick={haandterLaesMere}>
                Læs mindre
              </button>
            )}
          </article>
          <article className={mystyle.hoejre}>
            {dokument.direkteDownload ? ( // Hvis dokumentet kan downloades direkte, vises en "Download" knap
              <Knap knaptekst="Download" />
            ) : (
              <Knap knaptekst="Anmod" onClick={haandterAnmod} /> // Ellers vises en anmod-knap
            )}
          </article>
        </section>
      </section>

      <AnmodModal
        erAaben={erAnmodModalAaben} // Prop til at styre om modalvinduet er åbent eller ej
        luk={() => setErAnmodModalAaben(false)} // Funktion til at lukke modalvinduet
        overskrift={overskrift} // Prop til at sende overskriften til modalvinduet
      />
    </>
  );
}
