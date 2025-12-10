import mystyle from "./BundLogo.module.css";
import bundLogoSvg from "../assets/dotlegalLogoMedPayOff.svg";
import { Link } from "react-router-dom";
import tilTopPil from "../assets/tilTopPil.svg";

export default function BundLogo() {

  const scrollTilTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <article className={mystyle.bundLogoOgPil}>
      <section className={mystyle.bundLogo}>
        <Link to="https://www.dotlegal.com/en/">
        <img src={bundLogoSvg} alt=".legal logo - Compliance Software" />
        </Link>
      </section>
      <aside className={mystyle.tilTopPil}>
        <img src={tilTopPil} alt="Scroll til top-pil" onClick={scrollTilTop}/>
      </aside>
      </article>
    </>
  );
}
