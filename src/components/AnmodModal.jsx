import { useEffect } from 'react';
import mystyle from './AnmodModal.module.css';

export default function AnmodModal({ erAaben, luk, overskrift }) {
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

  const haandterIndsendelse = (event) => {
    event.preventDefault();
    console.log("Anmodning sendt for:", overskrift);
    luk();
  };

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
        
        <h2>Anmod om adgang til {overskrift}</h2>
        <p>Dette dokument kræver godkendelse. Udfyld formularen for at anmode om adgang.</p>
        
        <form onSubmit={haandterIndsendelse} className={mystyle.form}>
          <label>
            Navn
            <input type="text" placeholder="Dit fulde navn" required />
          </label>
          
          <label>
            Email
            <input type="email" placeholder="din@email.dk" required />
          </label>
          
          <label>
            Virksomhed
            <input type="text" placeholder="Virksomhedsnavn" required />
          </label>
          
          <label>
            Formål
            <textarea 
              placeholder="Beskriv hvorfor du har brug for adgang til dette dokument" 
              rows="4"
              required
            ></textarea>
          </label>
          
          <button type="submit" className={mystyle.sendKnap}>
            Send anmodning
          </button>
        </form>
      </div>
    </>
  );
}