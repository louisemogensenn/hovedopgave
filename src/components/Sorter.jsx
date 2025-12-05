import mystyle from './Sorter.module.css'

export default function Sorter () {

    return (
        <>
        <article className={mystyle.ydreArticle}>
            <section className={mystyle.sorter}>
                <img src="/src/assets/sorter.svg" alt="Sorter-ikon" />
            </section>
        </article>
        </>
    )
}