import styles from './showBanner.module.css';
import { PropTypes }  from 'prop-types'

const ShowBanner = (props) => {
  const { image, title, description } = props;

  return (
    <div className={styles.banner}>
      <img src={image} loading= 'lazy'className={styles.backgroundImage} alt="banner" />
      <div  className={styles.content}>
        <h2>{title}</h2>
        <p>{description.slice(0, 300)}...</p>
        <h3>Seasons: {props.seasons.length}</h3>
      </div>
    </div>
  );
};
ShowBanner.proptypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  seasons: PropTypes.arrayOf(PropTypes.number),
}

export default ShowBanner;

