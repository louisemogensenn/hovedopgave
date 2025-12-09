import IndholdsBoks from "../components/IndholdsBoks"; // Importerer IndholdsBoks-komponenten, der bruges til at vise hvert dokument
import data from "../content.json"; // Forbindelsen til content.json-filen, hvorfra dokumenterne hentes

export default function GDPR() {
  const gdprDokumenter = []; // Et tomt array der skal indeholde alle GDPR-dokumenter
  
  for (let i = 0; i < data.dokumenter.length; i++) { // Løber igennem alle dokumenter i content.json (alle objekter i arrayet dokumenter)
    const dokument = data.dokumenter[i]; // Gemmer det nuværende dokument i en konstant
    const erGDPR = dokument.kategorier.includes("gdpr"); // Tjekker om dokumentets kategorier indeholder "gdpr"
    
    if (erGDPR) { // Hvis dt nuværende dokument er kategoriseret som "gdpr", tilføjes det til gdprDokumenter-arrayet
      gdprDokumenter.push( // Det tilfjes med .push, der tilføjer dokumentet i slutningen arrayet
        <IndholdsBoks /* Der oprettes en indholdsboks for dette GDPR-dokument, der med .push tilføjes i slutningen af arrayet med understående informationer */
          key={dokument.id} // Sikrer en unik key for hver boks
          overskrift={dokument.overskrift} // Angiver overskriften for boksen som det nuværende dokuments overskrift
          tekst={dokument.beskrivelse} // Angiver beskrivelsen i boksen som det nuværende dokuments beskrivelse
          dokument={dokument} // Sender hele dokument-objektet som prop til IndholdsBoks-komponenten. Dette bruges til at åbne det korrekte dokument når der klikkes på boksen
        />
      );
    }
  }
  
  return (
    <>
      {gdprDokumenter}  {/* Returnerer alle indholdbokse */}
    </>
  );
}