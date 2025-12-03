import IndholdsBoks from "../components/IndholdsBoks";
export default function GDPR() {

    const broedtekstEt = "Din Artikel 30 fortegnelse er en rapport, der giver et overblik over, hvordan persondata behandles i din virksomhed. På engelsk er betegnelsen for artikel 30 fortegnelse 'Record of Processing Activities', hvilket direkte oversættes til 'fortegnelse over behandlingsaktiviteter'. En behandlingsaktivitet refererer til en detaljeret beskrivelse af, hvordan ";
    const broedtekstTo = "Heps";
    
    return (
        <>
        <IndholdsBoks overskrift="Artikel30-fortegnelse" tekst={broedtekstEt} />
        <IndholdsBoks overskrift="Overskrift" tekst={broedtekstTo} />
        </>
    )
}