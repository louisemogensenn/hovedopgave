import IndholdsBoks from "../components/IndholdsBoks";
import data from "../content.json";

export default function ItSikkerhed() {
  const itSikkerhedDokumenter = [];
  
  for (let i = 0; i < data.dokumenter.length; i++) {
    const dokument = data.dokumenter[i];
    const erItSikkerhed = dokument.kategorier.includes("it-sikkerhed");
    
    if (erItSikkerhed) {
      itSikkerhedDokumenter.push(
        <IndholdsBoks 
          key={dokument.id}
          overskrift={dokument.overskrift}
          tekst={dokument.beskrivelse}
          dokument={dokument}
        />
      );
    }
  }
  
  return (
    <>
      {itSikkerhedDokumenter}
    </>
  );
}