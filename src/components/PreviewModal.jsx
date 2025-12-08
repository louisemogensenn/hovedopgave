import { useEffect } from 'react';
import mystyle from './PreviewModal.module.css';
import Inputfelt from './Inputfelt';
import Knap from './Knap';
import Kryds from '../assets/kryds.svg';

export default function PreviewModal({ erAaben, luk, overskrift, dokument }) {
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

  const haandterDownload = () => {
    console.log("Download:", overskrift);
    luk();
  };

  if (!erAaben) return null;

  return (
    <>
      <div className={mystyle.overlay} onClick={luk}></div>
      
      <div className={mystyle.modal}>
        <button className={mystyle.lukKnap} onClick={luk}>
          <img src={Kryds} alt="Luk" />
        </button>
        
        <section className={mystyle.modalOverskrifter}>
          <h2 className={mystyle.oeversteOverskrift}>PREVIEW AF</h2>
          <h2>{overskrift}</h2>
        </section>
        
        <p>Her kan du se et preview af dokumentet inden download.</p>

        <form className={mystyle.inputfelter}>
          <Inputfelt className={mystyle.previewFelt} label="PREVIEW" type="text" />
        </form>
        
        <aside className={mystyle.knapper}>
          <Knap knaptekst="Afbryd" onClick={luk} />
          <Knap knaptekst="Download" onClick={haandterDownload} />
        </aside>
      </div>
    </>
  );
}