import mystyle from "./Knap.module.css";

export default function Knap( {knaptekst} ) {

    const tekstIKnap = knaptekst.trim().toLowerCase(); // Fjern mellemrum og gør teksten små bogstaver

    let previewClass = mystyle.preview;

    if ({knaptekst}.toLowerCase === "download") {
        previewClass += "" + mystyle.Aktiv;
    }

    return (
        <>
            <section>
                <button className={mystyle.knap}>{knaptekst}</button>
                <p className={mystyle.preview}>Preview</p>
            </section>
        </>
    )

    
}

