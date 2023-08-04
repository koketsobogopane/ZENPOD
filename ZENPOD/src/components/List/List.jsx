import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent"
import CardMedia from '@mui/material/CardMedia'
import {  Button, Typography } from '@mui/material'
import { CardActionArea } from "@mui/material"
import { styled } from '@mui/material'
import { Link, Route, Router } from 'react-router-dom'
import { Grid } from '@mui/material'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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



const Corousel = (props) => {
    // ...
  
    const toggleDescription = (index) => {
        const descriptionElement = document.getElementById(`show-description-${index}`);
        if (descriptionElement) {
          descriptionElement.classList.toggle('show-full');
        }
      };

    // Carousel settings
    const carouselSettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      centerPadding: '0px', // Adjust this value based on your preference
      autoplaySpeed: 5000,
      autoplay: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2, // Show 3 items on screens with width <= 1024px
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1, // Show 2 items on screens with width <= 768px
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1, // Show 1 item on screens with width <= 480px
            slidesToScroll: 1,
          },
        },
      ],
    };
  

    const CardContainer = styled('div')`
    height: 350px;
    width: 300px;
    /* Add any additional styling for the cards here */
    
    @media (max-width: 1024px) {
      height: 300px;
      width: 250px;
    }

    @media (max-width: 768px) {
      height: 250px;
      width: 200px;
    }

    @media (max-width: 480px) {
      height: 100px;
      width: 150px;
    }

    
  `;

const CardGenre = styled(Typography)`
font-size: 18px;
white-space: nowrap;

@media (max-width: 480px) {
  font-size: 10px;
}
`;

const CardTitle = styled(Typography)`
font-size: 18px;
white-space: nowrap;

@media (max-width: 480px) {
  font-size: 10px;
}
`;

const CardImage = styled(CardMedia)`
height: 200px;
object-fit: cover;

@media (max-width: 480px) {
  height: 120px;
}
`;

const CardDescription = styled(Typography)`
font-size: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

@media (max-width: 480px) {
  font-size: 12px;
}
`;

    const MainList = styled('main')`
    margin: 5rem;`
  
  
  const StyledCard = styled(Card)`
        background-color: #ABD1B5;
        color: #51291E;
        width: 20rem;
        height: 32rem;
       
    `
    
    return (
      <MainList>
        <Slider {...carouselSettings}>
          {props.content.map((element) => {
            return (
              
                <CardContainer key={element.id}>
                <StyledCard
                  id={element.id}
                  sx={{ mt: 2 }}
                  variant="outlined"
                  onClick={() => {
                    props.onClick(element.id);
                  }}
                >
                  <Link to={`/show/${element.id}`} style={{ listStyle: 'none', textDecoration: 'none' }}>
                    <CardActionArea>
                      <CardImage component="img" height="240px" image={element.image} alt="Preview Show Image" />
                      <CardContent>
                        <CardTitle variant="h5" component="div">
                          {element.title}
                        </CardTitle>
                        <CardGenre sx={{ mb: 1.5 }} color="text.secondary">
                          Genre: {element.genres.map((genre) => genres[genre - 1].name)}
                        </CardGenre>
                        <CardDescription component={'span'} className="show-full" id='show-description'>
                          {element.description.slice(0, 50)}
                        </CardDescription>
                        <Typography>
                          Last updated:<br />
                          {`${new Date(element.updated).toLocaleDateString('en-GB')}`}<br /><br />
                        </Typography>
                        <Typography>
                          Seasons:<br />
                          {element.seasons}<br /><br />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </StyledCard>
                </CardContainer>
              
            );
          })}
        </Slider>
      </MainList>
    );
  };
  

const List = (props) => {
 
   


    const MainList = styled('main')`
        margin: .5rem;
    `

    const StyledCard = styled(Card)`
        background-color: #ABD1B5;
        color: #51291E;
        height: 100%;
       
    `
    return (
        
        <MainList>
            <Corousel content = {props.content} onClick ={props.onClick} />
            <Grid container spacing={2}>
            {props.content.map(
                (element) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={element.id}>
                        <Link to= {`/show`}  style={{ listStyle: 'none', textDecoration: 'none'}}>
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
                        </Link>
                    </Grid>
                    )
                }
            )}
            </Grid>
        </MainList>
        
    )
}



export default List 