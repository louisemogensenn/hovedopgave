import IndholdsBoks from "../components/IndholdsBoks";
import data from "../content.json";

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
      {omDokumenter} {/* Returnerer alle dokumenter med om */}
    </>
  );
}