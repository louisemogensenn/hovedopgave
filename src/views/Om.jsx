import IndholdsBoks from "../components/IndholdsBoks";
import data from "../content.json";

export default function Om() {
  const omDokumenter = [];
  
  for (let i = 0; i < data.dokumenter.length; i++) {
    const dokument = data.dokumenter[i];
    const erOm = dokument.kategorier.includes("om");
    
    if (erOm) {
      omDokumenter.push(
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
      {omDokumenter}
    </>
  );
}