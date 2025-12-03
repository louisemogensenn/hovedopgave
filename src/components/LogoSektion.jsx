import kundeLogo from '../assets/dmjxLogo.png';
import mystyle from './LogoSektion.module.css';
import dotLegalLogo from '../assets/dotLegalLogo.svg';
import { Link } from 'react-router-dom';

export default function LogoSektion(){
    return (
        <>
        <section className={mystyle.logoSektion}>
            <Link to="https://www.dmjx.dk"><img className={mystyle.kundeLogo} src={kundeLogo} alt="DMJX - Danmarks Medie- og Journalisthøjskole"/></Link>
            <Link to="https://www.dotlegal.com/en/">
                <article className={mystyle.trustCenterSektion}>
                    <p className={mystyle.trustCenterTekst}>TRUST CENTER</p>
                    <figure className={mystyle.poweredBySektion}>
                        <p>powered by</p>
                        <img src={dotLegalLogo} alt=".legal-logo"/>
                    </figure>
                </article>
            </Link>
        </section>
        </>
    )
}