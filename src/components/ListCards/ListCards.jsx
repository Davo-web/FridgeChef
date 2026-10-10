import RecipeCard from '../RecipeCard/RecipeCard';
import styles from './ListCards.module.scss';

const ListCards = () => {
    return (
        <ul className={styles.listcards}>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </ul>
    )
}

export default ListCards;