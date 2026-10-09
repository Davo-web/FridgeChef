import Hero from "../Hero/Hero";
import ResultsBar from "../ResultsBar/ResultsBar";
import styles from './Main.module.scss';
const Main = () => {
    return (
        <div className={styles.main}>
            <Hero />
            <ResultsBar />
        </div>
    )
}

export default Main