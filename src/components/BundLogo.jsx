import mystyle from "./BundLogo.module.css";
import bundLogoSvg from "../assets/dotlegalLogoMedPayOff.svg";

export default function BundLogo() {
  return (
  <>
  <section className={mystyle.bundLogo}>
    <img src={bundLogoSvg} alt=".legal logo - Compliance Software" />
  </section>
  </>

  );
}
