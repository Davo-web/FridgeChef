import styles from './ResultsBar.module.scss';

const ResultsBar = () => {
    return (
        <>
            <label htmlFor="resultsbarInput" className={styles.resultsbar}>
                <p className={styles.resultsbarText}>Found: <span>12</span> recipes</p>
                <select name="resultsbarInput">
                    <option value="">Most matched</option>
                    <option value="Opt1">Opt1</option>
                    <option value="Opt2">Opt2</option>
                    <option value="Opt3">Opt3</option>
                </select>
            </label>
        </>
    )
}

export default ResultsBar;