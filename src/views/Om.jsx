import IndholdsBoks from "../components/IndholdsBoks";
import data from "../content.json";
import mystyle from "./Om.module.css";
import dmjxLogo from "../assets/dmjxLogo.png";
import faqPil from "../assets/faqPil.svg";
import Inputfelt from "../components/Inputfelt";

export default function Om() {
  const omDokumenter = []; // Oprettter et tomt array til at gemme "om" dokumenter
  
  for (let i = 0; i < data.dokumenter.length; i++) { // Løber igennem alle dokumenter i data.json
    const dokument = data.dokumenter[i]; // Opretter en konstant for hvert dokument
    const erOm = dokument.kategorier.includes("om"); // Opretter en konstant, de rundersøger kategorierne for at se om "om" er inkluderet
    
    if (erOm) { // Hvis om er inkluderet for det nuværende dokument
      omDokumenter.push( // Tilføjes en indholdboks til omDokumenter arrayet med .push for netop dette dokument
        <IndholdsBoks 
          key={dokument.id} // Sikrer en unik key til hver boks-komponent
          overskrift={dokument.overskrift} // Angiver overskriften for boksen for det nuværende dokuments overskrift
          tekst={dokument.beskrivelse} // Angiver beskrivelsen i boksen for det nuværende dokuments beskrivelse
          dokument={dokument} // Sender hele dokument-objektet som prop til IndholdsBoks-komponenten
        />
      );
    }
  }
  
  return (
    <>
    <section className={mystyle.ydreboks}>
        <section className={mystyle.indreboks}>
        <article className={mystyle.venstre}></article>
          <article className={mystyle.midte}>
            <h3>Danmarks Medie- og Journalisthøjskole - DMJX</h3>
            <p><span>Website:</span> <a href="https://www.dmjx.dk/">https://www.dmjx.dk/</a></p>
            <p><span>Land:</span> Danmark</p>
            <br></br>
            <br></br>

              <article className={mystyle.lokationer}>
                <section>
                  <p>København</p>
                  <p>Amagerfælledvej 190</p>
                  <p>2300 Kbh. S</p>
                  <p>+45 89 440 440</p>
                </section>
                <section>
                  <p>Aarhus</p>
                  <p>Helsingforsgade 6A-D</p>
                  <p>8200 Aarhus N</p>
                  <p>+45 89 440 440 </p>
                </section>
              </article>
          </article>
          <article className={mystyle.hoejre}>
            <img src={dmjxLogo} alt="Danmarks Medie- og Journalisthøjskole" />
          </article>
        </section>
      </section>

      {omDokumenter} {/* Returnerer alle dokumenter med om */}

      <section className={mystyle.ydreboks}>
        <section className={mystyle.indreboks}>
        <article className={mystyle.venstre}></article>
          <article className={mystyle.faqMidte}>
            <h3>Frequently Asked Questions</h3>


              <article className={mystyle.faq}>
                <aside className={mystyle.faqElement}>
                  <p>Hvordan bruger jeg dette Trust Center?</p>
                  <img src={faqPil} alt="Åbn FAQ-ikon"/>
                </aside>
                  <hr></hr>
                
                <aside className={mystyle.faqElement}>
                  <p>Hvordan henter jeg det dokumentation jeg skal bruge?</p>
                  <img src={faqPil} alt="Åbn FAQ-ikon"/>
                </aside>
                  <hr></hr>
                
                <aside className={mystyle.faqElement}>
                  <p>Hvorfor skal jeg anmode om noget indhold og ikke om andet?</p>
                  <img src={faqPil} alt="Åbn FAQ-ikon"/>
                </aside>
                  <hr></hr>

                <aside className={mystyle.faqElement}>
                  <p>Hvordan får jeg et Trust Center til min egen virksomhed?</p>
                  <img src={faqPil} alt="Åbn FAQ-ikon"/>
                </aside>
                  <hr></hr>

              </article>
          </article>

        </section>
      </section>

      <section className={mystyle.ydreboks}>
        <section className={mystyle.indreboks}>
        <article className={mystyle.venstre}></article>
          <article className={mystyle.faqMidte}>
            <h3>Brug for hjælp?</h3>

            <br></br>

            <p>Kan du ikke finde den dokumentation, du skal bruge eller har du andre spørgsmål kan du udfylde formularen herunder. Vi står altid klar til at hjælpe, hvis du har brug for det.</p>


              <article className={mystyle.inputfelter}>
                <Inputfelt label="NAVN" type="text" />
                <Inputfelt label="E-MAIL" type="email" />
                <aside className={mystyle.textarea}>
                  <Inputfelt label="SPØRGSMÅL" type="text" />
                </aside>
              </article>
              <p>Du kan altid kontakte vores compliance-ansvarlige Jens Jensen på +45 12 34 56 78 eller jj@dmjx.dk</p>
          </article>

          <article className={mystyle.knapHoejre}>
            <button className={mystyle.knap}><p>Send spørgsmål</p></button>
          </article>
        </section>
      </section>
    </>
  );
}