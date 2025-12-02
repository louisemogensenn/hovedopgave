import { useLocation } from "react-router-dom"

export default function Layout() {
    const nuvLokation = useLocation(); // Returnerer en liste af informationer om den nuværende lokation
    const sti = nuvLokation.pathname; // Tilgå én specifik information fra ovenstående - nem lige stien, der returnerer "/" eller "/om" eller "/kontakt" osv.

    return (
        <>
        {/* Heri angives rammen for indholdet - altså det, der ikke ændrer sig, der i stedet danner rammen for indholdet */}

        
        </>
    )
}