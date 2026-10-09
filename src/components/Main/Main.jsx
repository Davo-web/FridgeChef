import Hero from "../Hero/Hero";
import ListCards from "../ListCards/ListCards";
import ResultsBar from "../ResultsBar/ResultsBar";
import styles from './Main.module.scss';
const Main = () => {
    return (
        <div className={styles.main}>
            <Hero />
            <ResultsBar />
            <ListCards />
        </div>
    )
}

export default Main