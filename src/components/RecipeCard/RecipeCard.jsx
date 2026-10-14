import styles from './RecipeCard.module.scss';
import chickenRiceBowlImg from '../../assets/images/chiken_rice_bowl.png';

// h3 заменить на h2 и стили глянуть
const RecipeCard = () => {
    return (
        <div className={styles.recipeCard}>
            <img src={chickenRiceBowlImg} alt="meal" />
            <h3 className={styles.recipeCardTitle}>Chiken Rice Bowl</h3>
            <div className={styles.countResultMatching}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" /></svg>
                <p className={styles.countResultMatchingText}>3 of 3 ingredients mathced</p>
            </div>
        </div>
    )
}

export default RecipeCard;