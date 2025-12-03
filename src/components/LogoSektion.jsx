import kundeLogo from '../assets/dmjxLogo.png';
import mystyle from './LogoSektion.module.css';
import dotLegalLogo from '../assets/dotLegalLogo.svg';

export default function LogoSektion(){
    return (
        <>
        <section className={mystyle.logoSektion}>
        <img className={mystyle.kundeLogo} src={kundeLogo} alt="DMJX - Danmarks Medie- og Journalisthøjskole"/>
        <article className={mystyle.trustCenterSektion}>
            <p className={mystyle.trustCenterTekst}>TRUST CENTER</p>
            <figure className={mystyle.poweredBySektion}>
                <p>powered by</p>
                <img src={dotLegalLogo} alt=".legal-logo"/>
            </figure>
        </article>
        </section>
        </>
    )
}