import Card from '@mui/material/Card'
import { styled } from '@mui/material'
import { Grid } from '@mui/material'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../index.css'
import PodcastCard from '../ui/PodcastCard'
import styles from './List.module.css'


export const genres  = ['All', 'Music', 'Science & Technology','Comedy']

const List = (props) => {
 
   
    return (
        
        <div className={styles.container}>
            <Grid container spacing={2}>
            {props.content.map(
                (element) => {
                    return (
                        <Grid item xs={7} sm={5} md={2} key={element.id}>
                        <PodcastCard image= {element.image} title={element.title}/>
                    </Grid>
                    )
                }
            )}
            </Grid>
        </div>
        
    )
}



export default List 