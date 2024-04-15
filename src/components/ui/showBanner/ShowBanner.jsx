import styles from './showBanner.module.css';

const ShowBanner = (props) => {
  const { image, title, description } = props;

  return (
    <div className={styles.banner}>
      <img src={image} className={styles.backgroundImage} alt="banner" />
      <div  className={styles.content}>
        <h2>{title}</h2>
        <p>{description.slice(0, 300)}...</p>
        <h3>Seasons: {props.seasons.length}</h3>
      </div>
    </div>
  );
};

export default ShowBanner;
