import styles from './RecipeCard.module.scss';

const RecipeCard = () => {
    return (
        <div className={styles.recipeCard}>
            <img src="#" alt="meal" />
            <h3 className={styles.recipeCardTitle}>Chiken Rice Bowl</h3>
            <div className={styles.countResultMatching}>
                <img src="#" alt="s" />
                <p className={styles.countResultMatchingText}>3 of 3 mathced</p>
            </div>
        </div>
    )
}

export default RecipeCard;