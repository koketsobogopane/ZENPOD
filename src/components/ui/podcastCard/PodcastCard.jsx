import styles from './PodcastCard.module.css';
import { Link } from 'react-router-dom';

const PodcastCard = (props) => {
  const { cardElements } = props;
  return (
    <div>
      <Link to={`/show/${cardElements.id}`}>
        <div className={styles.podcastContainer}>
          <img
            className={styles.podcastImage}
            loading="lazy"
            src={cardElements.image}
            alt="title"
          />
        </div>
        <h3>{cardElements.title}</h3>
      </Link>
    </div>
  );
};

export default PodcastCard;

