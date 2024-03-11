import styles from './PodcastCard.module.css'
import { Link } from 'react-router-dom';

const PodcastCard = (props) => {

    const {image, title,} = props; 
  return (
    <div>
        <Link to={`/show`}>
        <div className={styles.podcastContainer}>
        <img className={styles.podcastImage} src={image} alt="title" />
        </div>
        <h3>
            {title}
        </h3>
        </Link>
    </div>
  )
}

export default PodcastCard
/**<Link to= {`/show`}  style={{ listStyle: 'none', textDecoration: 'none'}}>
                        <StyledCard  id={element.id} sx={{ mt: 2}} variant='outlined' onClick={() => {props.onClick(element.id)}}>
                            
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height='240px'
                                image= {element.image}
                                alt="Preview Show Image"/>

                                <CardContent>
                                    <Typography variant='h5' component='div'>
                                        {element.title}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Genre: {element.genres.map((genre) => genres[genre -1].name)}
                                    </Typography>
                                    <Typography component={'span'}>
                                        Description:{element.description.slice(0, 50)}

                                    
                                    </Typography>
                                    <Typography>
                                        Last updated:<br/>{`${new Date(element.updated).toLocaleDateString("en-GB")}`}<br/><br/>
                                    </Typography>
                                    <Typography>
                                        Seasons:<br/>{element.seasons}<br/><br/>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            
                        </StyledCard>
                        </Link> */