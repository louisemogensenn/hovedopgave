import mystyle from "./Soegefelt.module.css";
import Inputfelt from "./Inputfelt";

export default function Soegefelt() {

  return (
    <>
    <section className={mystyle.soegefeltSection}>
    <Inputfelt className={mystyle.soegefelt} label="Søg" />
    </section>
    </>
    
  );
}
