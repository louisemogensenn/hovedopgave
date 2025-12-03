import mystyle from "./BundLogo.module.css";
import bundLogoSvg from "../assets/dotlegalLogoMedPayOff.svg";
import { Link } from "react-router-dom";

export default function BundLogo() {
  return (
    <>
      <section className={mystyle.bundLogo}>
        <Link to="https://www.dotlegal.com/en/">
          <img src={bundLogoSvg} alt=".legal logo - Compliance Software" />
        </Link>
      </section>
    </>
  );
}
