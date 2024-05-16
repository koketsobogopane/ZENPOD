import { Link } from "react-router-dom";
import styles from "./showContent.module.css";

const ShowContent = (props) => {

  return (
    
    <div className={styles["card"]}><div className={styles.container}>
        {props.seasons.map(
            (season) => {
                return (
                    <Link  key={season.season} to={`/${season.title}`}>
                    <div  className={styles.card}>
                        <img src={season.image} alt= 'Poster' loading="lazy" />
                        <h3>Season: {season.title}</h3>
                    </div>
                    </Link>
                )
            }
        )}
    </div></div>
    
    
  )
}

export default ShowContent