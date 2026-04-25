import styles from './Hero.module.css'

export default function Hero({ onNavigate }){
    return(
       <div className={styles.main}>
        <section className={styles.content}>
            <h1 className={styles.title}>
                Find your forever ❤️
            </h1>
            <p className={styles.subtitle}>
                Discover a world beyond matrimony
            </p>
            <button className={styles.matchButton} onClick={() => onNavigate('dashboard')}>
                Find Your Match
            </button>
        </section>

        <div className={styles.statsBar}>
            <p>
                #1 Matchmaking Service &nbsp; | &nbsp; ⭐️⭐️⭐️⭐️⭐️ Ratings on Playstore by 2.4 lakh users &nbsp; | &nbsp; 80 Lakh Success Stories
            </p>
        </div>
       </div>
    )
}