import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroTitle}>
                <h1>What's in your fridge?</h1>
                <h3>Turn tour ingredients into delicious meals.</h3>
                <h3>Less waste. More tasty.</h3>
            </div>
            <label className={styles.searchBox} htmlFor="input">
                <input
                    id="input"
                    type="search"
                    placeholder='e.g. chicken'
                    className={styles.input}
                />
                <button className={styles.inputBtn}>Add</button>
            </label>
            <div className={styles.tags}>
                <div className={styles.tag}>
                    <p className={styles.ingredient}>salt</p>
                    <button className={styles.tagBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" /></svg>
                    </button>
                </div>
                <div className={styles.tag}>
                    <p className={styles.ingredient}>bread</p>
                    <button className={styles.tagBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;