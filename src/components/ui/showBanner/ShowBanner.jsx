import styles from './showBanner.module.css';

const ShowBanner = (props) => {
  const { image, title } = props;

  return (
    <div>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${image})` }}
      />

      <h2>{title}</h2>
    </div>
  );
};

export default ShowBanner;
