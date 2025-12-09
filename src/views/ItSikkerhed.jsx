import IndholdsBoks from "../components/IndholdsBoks";
import data from "../content.json";

export default function ItSikkerhed() {
  const itSikkerhedDokumenter = []; // Opretter et tomt array til it-sikkerhed dokumenter
  
  for (let i = 0; i < data.dokumenter.length; i++) { // Løber igennem alle dokumenter i data.json
    const dokument = data.dokumenter[i]; // Gemmer det nuværende dokument i en konstant
    const erItSikkerhed = dokument.kategorier.includes("it-sikkerhed"); // Opretter en konstant der undersøger om dokumentets kategorier indeholder "it-sikkerhed"
    
    if (erItSikkerhed) { // Hvis dokumentet er kategoriseret som it-sikkerhed
      itSikkerhedDokumenter.push( // Tilføjer et IndholdsBoks-komponent til itSikkerhedDokumenter-arrayet
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
      {itSikkerhedDokumenter} {/* Returnerer alle indholdsbokse med it-sikkerhedsdokumenter */}
    </>
  );
}