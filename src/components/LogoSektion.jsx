import kundeLogo from '../assets/dmjxLogo.png';
import mystyle from './LogoSektion.module.css';
import dotLegalLogo from '../assets/dotLegalLogo.svg';
import { Link } from 'react-router-dom';

export default function LogoSektion(){
  return (
    <article className={mystyle.ydreArticle}>
      <section className={mystyle.logoSektion}>
        {/* Klikker brugeren på kundelogoet åbnes DMJX's hjemmeside i en ny fane */}
        <Link to="https://www.dmjx.dk" target="_blank" rel="noopener noreferrer">
          <img className={mystyle.kundeLogo} src={kundeLogo} alt="DMJX - Danmarks Medie- og Journalisthøjskole"/>
        </Link>
        {/* Klikker brugeren på Trust Center sektionen åbnes .legal's hjemmeside i en ny fane */}
        <Link to= "https://www.dotlegal.com" target="_blank" rel="noopener noreferrer" className={mystyle.trustCenterMobil}>
          <article className={mystyle.trustCenterSektion}>
            <p className={mystyle.trustCenterTekst}>TRUST CENTER</p>
            <figure className={mystyle.poweredBySektion}>
              <p>powered by</p>
              <img src={dotLegalLogo} alt=".legal-logo"/>
            </figure>
          </article>
        </Link>
      </section>
    </article>
  )
}