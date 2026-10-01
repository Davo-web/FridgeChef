import Hero from "./hero/Hero";
import styles from './Main.module.scss';
const Main = () => {
    return (
        <div className={styles.main}>
            <Hero />
        </div>
    )
}

export default Main