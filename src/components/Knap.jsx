import mystyle from "./Knap.module.css";

export default function Knap( {knaptekst} ) {

    return (
        <>
            <section>
                <button className={mystyle.knap}>{knaptekst}</button>
            </section>
        </>
    )

    
}

