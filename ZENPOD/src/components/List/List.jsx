import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent"
import CardMedia from '@mui/material/CardMedia'
import { Typography } from '@mui/material'
import { CardActionArea } from "@mui/material"
import { styled } from '@mui/material'
import { faker } from '@faker-js/faker'


const List = (props) => {
 
 
 // Mock data for previews shows
    const mockPreviwShows = new Array(30).fill(undefined).map(
        (_, index) => ({
            id :index+1,
            title: `${faker.name.firstName()} ${faker.name.lastName()}` ,
            description:`${faker.lorem.sentence()}`,
            imageURL: faker.image.urlPicsumPhotos(),
            genres: faker.word.words(5)

        })
    )

    const MainList = styled('main')`
        margin: .5rem;
    `

    const StyledCard = styled(Card)`
        background-color: #ABD1B5;
        color: #51291E;
       
    `
    return (
        <MainList>
            {mockPreviwShows.map(
                (element) => {
                    return (
                        <StyledCard key={element.id} id={element.id} sx={{ mt: 2}} variant='outlined' onClick={() => props.onClick(element.id)}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height='240px'
                                image= {element.imageURL}
                                alt="Preview Show Image"/>

                                <CardContent>
                                    <Typography variant='h5' component='div'>
                                        {element.title}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Genre:{`   ${element.genres[Math.floor((Math.random()* element
                                        .genres
                                        .length))]}`}
                                    </Typography>
                                    <Typography>
                                        Description:<br/>{element.description}<br/><br/>
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