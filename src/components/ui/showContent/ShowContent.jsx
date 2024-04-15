import styles from "./showContent.module.css";

const ShowContent = (props) => {

  return (
    <div className={styles.container}>
        {props.seasons.map(
            (season) => {
                return (
                    <div key={season.season}  className={styles.card}>
                        <img src={season.image} alt= 'Poster' loading="lazy" />
                        <h3>Season: {season.title}</h3>
                    </div>
                )
            }
        )}
    </div>
  )
}

export default ShowContent