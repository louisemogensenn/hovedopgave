import mystyle from "./Knap.module.css";

export default function Knap({knaptekst, onClick}) {
  const tekstIKnap = knaptekst.trim().toLowerCase(); // Fjern mellemrum og gør teksten små bogstaver
  const erDownload = tekstIKnap === "download"; // Tjek om teksten er "download" - returnerer true eller false
  
  return (
    <>
      <section className={mystyle.knapOgPreview}>
        <button className={mystyle.knap} onClick={onClick}><p>{knaptekst}</p></button>
        {erDownload && (
          <p className={mystyle.preview}>Preview</p>
        )}
      </section>
    </>
  );
}