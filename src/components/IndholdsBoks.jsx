import mystyle from './IndholdsBoks.module.css';
import infoikon from '../assets/infoikon.svg';

export default function Indholdsboks(ikon, overskrift, tekst) {
    return (
        <>
            <section className={mystyle.boks}>

                <article className={mystyle.venstre}>
                    <img className={mystyle.ikon} src={ikon} alt="Ikon-type"/>
                </article>

                <article className={mystyle.midte}>
                    <h3>Lorem Ipsum</h3>
                    <p>Her er fyldeteksten. </p>
                </article>

                <article className={mystyle.hoejre}>
                    {/* Her placeres knap og en toggle, der viser preview, hvis knappen er en download-knap */}
                    <button>Download</button>
                    <p>Preview</p>
                </article>
                
                <aside>
                    <img src={infoikon} alt="Infoikon"/>
                </aside>
            </section>
        </>
    );
}