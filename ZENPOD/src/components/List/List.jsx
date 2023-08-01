import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent"
import CardMedia from '@mui/material/CardMedia'
import {  Typography } from '@mui/material'
import { CardActionArea } from "@mui/material"
import { styled } from '@mui/material'

export const genres = [	
    {id: "1", name: "Personal Growth"},
    {id: "2", name: "True Crime and Investigative Journalism"},
    {id: "3", name: "History"},
    {id: "4", name: "Comedy"},
    {id: "5", name: "Entertainment"},
    {id: "6", name: "Business"},
    {id: "7", name: "Fiction"},
    {id: "8", name: "News"},
    {id: "9", name: "Kids and Family"},
]

const List = (props) => {
 
    
   

    const MainList = styled('main')`
        margin: .5rem;
    `

    const StyledCard = styled(Card)`
        background-color: #ABD1B5;
        color: #51291E;
       
    `
    return (
        
        <MainList>
            
            {props.content.map(
                (element) => {
                    return (
                        <StyledCard key={element.id} id={element.id} sx={{ mt: 2}} variant='outlined' onClick={() => props.onClick(element.id)}>
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
                                    <Typography>
                                        Description:<br/>{element.description}<br/><br/>
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
                    )
                }
            )}
            
        </MainList>
        
    )
}



export default List 