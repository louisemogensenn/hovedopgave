import mystyle from './IndholdsBoks.module.css';
import flueben from '../assets/flueben.svg';
import infoikon from '../assets/infoikon.svg';
import Knap from './Knap.jsx';

export default function Indholdsboks({overskrift, tekst}) {
    return (
        <>
            <section className={mystyle.ydreboks}>

                <aside>
                    <img className={mystyle.infoikon} src={infoikon} alt="Info ikon"/>
                </aside>

                <section className={mystyle.indreboks}>

                <article className={mystyle.venstre}>
                    <img className={mystyle.ikon} src={flueben} alt="Ikon-type"/>
                </article>

                <article className={mystyle.midte}>
                    <h3>{overskrift}</h3>
                    <p>{tekst} </p>
                </article>

                <article className={mystyle.hoejre}>
                    {/* Her placeres knap og en toggle, der viser preview, hvis knappen er en download-knap */}
                    <Knap knaptekst="Download" />
                </article>
                </section>
            </section>
        </>
    );
}