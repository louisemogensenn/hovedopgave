import { useEffect } from 'react';
import mystyle from './PreviewModal.module.css';

export default function PreviewModal({ erAaben, luk, overskrift, dokument }) {
  // Luk modal ved tryk på Escape
  useEffect(() => {
    const haandterEscape = (event) => {
      if (event.key === 'Escape') {
        luk();
      }
    };

    if (erAaben) {
      document.addEventListener('keydown', haandterEscape);
    }

    return () => {
      document.removeEventListener('keydown', haandterEscape);
    };
  }, [erAaben, luk]);

  // Hvis modal ikke er åben, vis ingenting
  if (!erAaben) return null;

  return (
    <>
      {/* Mørk baggrund */}
      <div className={mystyle.overlay} onClick={luk}></div>
      
      {/* Modal-boks */}
      <div className={mystyle.modal}>
        {/* Luk-knap */}
        <button className={mystyle.lukKnap} onClick={luk}>
          ✕
        </button>
        
        <h2>{overskrift}</h2>
        
        <div className={mystyle.preview}>
          <p><strong>Type:</strong> {dokument?.type}</p>
          <p><strong>Størrelse:</strong> {dokument?.stoerrelse}</p>
          <p><strong>Opdateret:</strong> {dokument?.opdateringsdato}</p>
          
          <div className={mystyle.beskrivelse}>
            <h3>Beskrivelse</h3>
            <p>{dokument?.beskrivelse}</p>
          </div>
          
          <button className={mystyle.downloadKnap}>
            Download dokument
          </button>
        </div>
      </div>
    </>
  );
}