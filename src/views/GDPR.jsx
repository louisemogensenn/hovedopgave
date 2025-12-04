import IndholdsBoks from "../components/IndholdsBoks";
import data from "../content.json";

export default function GDPR() {
  const gdprDokumenter = [];
  
  for (let i = 0; i < data.dokumenter.length; i++) {
    const dokument = data.dokumenter[i];
    const erGDPR = dokument.kategorier.includes("gdpr");
    
    if (erGDPR) {
      gdprDokumenter.push(
        <IndholdsBoks 
          key={dokument.id}
          overskrift={dokument.overskrift}
          tekst={dokument.beskrivelse}
        />
      );
    }
  }
  
  return (
    <>
      {gdprDokumenter}
    </>
  );
}