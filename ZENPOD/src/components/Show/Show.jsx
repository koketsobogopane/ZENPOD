
import styled from "@emotion/styled"
import { Card, Typography, Button, IconButton } from "@mui/material"
import { useEffect, useRef, useState } from 'react'
import {Accordion, AccordionSummary, AccordionDetails,} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Pause from "@mui/icons-material/Pause"
import InfoIcon from '@mui/icons-material/Info';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Star from '@mui/icons-material/Star'
import Loading from "../Loading/Loading"
import Slider from '@mui/material/Slider'
import { Link, Route, Routes } from "react-router-dom"






const Show = (props) =>{ 


/**
 * A state for all the shows that are being marked as favourites
 */
 const [ isFavourate, setIsFavourate] = useState([])

 const [ show, setShow ] = useState()

 const [ play, setPlay ] = useState(false)
 const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(-1);
 const MAX_DESCRIPTION_LENGTH = 150;

 const toggleDescription = () => {
    const descriptionElement = document.getElementById('show-description');
    if (descriptionElement) {
      descriptionElement.classList.toggle('show-full');
    }
  };
 
  const addtoFavourites = (event) => {

    if (event.target.classList.contains('is-favourite') ){
        event.target.classList.remove("is-favourite")
        event.target.textContent = 'Add to Favourites'
    } else {
        event.target.classList.add("is-favourite"); 
        event.target.textContent = 'Remove from Favourites'
        const body = event.target.parentElement
    }
  }
//  const toggleAudio = (index) => {
//     console.log (index)
//     if (currentEpisodeIndex !== index) {
//         // If a new episode is clicked to play
//         if (currentEpisodeIndex !== -1) {
//           // Pause the current episode if it's already playing
//           audioRefs[currentEpisodeIndex].current?.pause();
//         }
  
//         // Start playing the new episode
//         audioRefs[index].current.src = show.seasons[index].episodes[0].file;
//         audioRefs[index].current?.play();
//         setCurrentEpisodeIndex(index);
//       } else {
//         // Pause the track when clicked again
//         audioRefs[index].current?.pause();
//         setCurrentEpisodeIndex(-1);
//       }


    // if (play) {
    //     // pause the track when clicked again
    //     audioRef.current?.pause();
    //     setPlay(false)
    // } else {

        
    //     audioRef.current?.play()
    //     setPlay(true)
    // }
 //}

//  const audioRefs = show.seasons.map(() => useRef(null));

//  useEffect(() => {
//     // Clean up the audio elements when the component unmounts
//     audioRefs.forEach((ref) => ref.current?.pause());
//   }, []);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(` https://podcast-api.netlify.app/id/${props.displayShow}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [props.displayShow]);

  if (!show) return <Loading />

 

  

    const Image = styled.img`
        width: 150px;
        height: 150px;
        border-radius: 16px;
        box-shadow: 1px 1px 15px rgb(128, 128, 128);
        position: relative; 
        top: -100px;
    `
const Header = styled.div`
   text-align: center;
   position: relative;
`

const Content = styled.div`
    margin: .7rem;
    margin-top: 1rem;
`

const List = styled.div`
    list-style: none;
    padding: none;

`

const EpisodeElement = styled(Card)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const EpisodeControls = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`

    return (

        <>
        <Podcast image={show.image} description={show.description} title={show.title} id={show.id} seasons={show.seasons} setIsFavourate={setIsFavourate}/>
        {/* <Link to= '/'>
         <Button style={{ margin: '10px', color: 'black'  }} >Back</Button>   
         </Link>

        <div className="image-card" style={{
                    backgroundImage: `url(${show.image})`, 
                    backgroundSize: 'cover', 
                    filter: 'blur(20px)',
                    height: '150px',
                    margin: '0',
                    position: "relative"
                    }}> 
                    
                </div>
               
        <Content>
            <Typography component={'span'}>
            <header>
            
                <Header>
                 
                <Image src={show.image } alt=""  className="image"  />
                <h2>{show.title}</h2>
                </Header>
                <section> 
                    <p>{show.description}</p>
                </section>
            </header>

            <main>
                <h4>Seasons</h4>
                < List>
                { show.seasons.map((element, i) => (
                    <Accordion key= {element.season} sx={{mt:2, p:1}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h4>Season {element.season}</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                                <h4>Episodes</h4>
                        {element.episodes.map((episode,index) => (
                        <Accordion key={index} id={index}>
                            <AccordionSummary
                                expandIcon={ <InfoIcon />}
                                aria-controls={"panel"+(index+3)+"b"}
                                id={"panel"+(index+3)}
                                >
                                <span>
                                    {episode.title}
                                </span>
                                

                            </AccordionSummary>
                            <AccordionDetails>
                                <div id= "show-description" className="show-full">{episode.description}</div>
                                <Button onClick={toggleDescription}>
                                    {document
                                        .getElementById('show-description')
                                        ?.classList.contains('show-full')
                                        ? 'Show Less'
                                        : 'Show More'}
                                    </Button>
                            <EpisodeControls id={episode.title} >
                                    {/* <IconButton onClick={() => toggleAudio(index)}>
                                        {
                                            !play? <PlayArrowIcon /> : <Pause />
                                        }
                                    </IconButton> */}
                                     {/* <audio  src={episode.file} controls  />
                                    <Button id={element.id} variant="outlined" sx={{m: 2}} onClick={(event) => addtoFavourites(event, index) } >
                                          Add to Favourites
                                    </Button>
                                </EpisodeControls>
                            </AccordionDetails>
                            </Accordion>
                        ))}
                        </AccordionDetails>
                    </Accordion >
                    ) )}
                </List>
            </main>
            </Typography>
        </Content> */} 
        </>
    )
}    

export default Show

const Podcast = (props) => {


    const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 16px;
    box-shadow: 1px 1px 15px rgb(128, 128, 128);
    position: relative; 
    top: -100px;
`
    const Content = styled.div`
    margin: .7rem;
    margin-top: 1rem;
`
const List = styled.div`
    list-style: none;
    padding: none;
    `

const Header = styled.div`
   text-align: center;
   position: relative;
   `

    return (
        <>
            <Link to= '/'>
            <Button style={{ margin: '10px', color: 'black'  }} >Back</Button>   
            </Link>

             <div className="image-card" style={{
                    backgroundImage: `url(${props.image})`, 
                    backgroundSize: 'cover', 
                    filter: 'blur(20px)',
                    height: '150px',
                    margin: '0',
                    position: "relative"
                    }}> 
                </div>

            <Content>
                <Typography component={'span'}>
                <header>
            
                <Header>
                 
                <Image src={props.image } alt="seasonImage"  className="image"  />
                <h2>{props.title}</h2>
                </Header>
                <section> 
                    <p>{props.description}</p>
                </section>
                </header>

                <main>
                    <Typography component={'span'}>
                        <h3>Seasons</h3>
                    </Typography>

                    <List>
                        {
                            props.seasons.map(
                                (seasonObj) => {
                                    return (
                                        <Card key= {seasonObj.season} sx={{mt:2, p:1}}>
                                            <h4>Season {seasonObj.season}</h4>
                                            <Link to="episodes"><Button>{seasonObj.episodes.length} Episodes</Button>
                                            </Link>
                                        <Routes>
                                            <Route path="episodes" element={
                                               <Episodes 
                                               setIsFavourate={props.setIsFavourate}
                                               seasonNumber={seasonObj.season}
                                               showImg={seasonObj.image}
                                                 episodesObj={seasonObj.episodes} />}/>
                                                 </Routes>
                                        </Card>
                                    )
                                }
                            )
                        }
                    </List>
                </main>
                </Typography>
            </Content>

        </>
    )
}

const Episodes = ({ episodesObj, showImg, seasonNumber, setIsFavourate }) => {
    const addtoFavourites = (event) => {

        if (event.target.classList.contains('is-favourite') ){
            event.target.classList.remove("is-favourite")
            event.target.textContent = 'Add to Favourites'
        } else {
            event.target.classList.add("is-favourite"); 
            event.target.textContent = 'Remove from Favourites'
            const body = event.target
            setIsFavourate(body.id)
        }
      }

    return (
        <>
            <Typography component={'span'} >
                <h4>Episodes</h4>
                {
                    episodesObj.map((episode) => {
                        return (
                            <Card key={episode.title} >
                                <Typography component = {'span'}>

                                <h5>{episode.title}</h5>
                                <p>{episode.description}</p>
                                <audio  src={episode.file} controls  />
                                <Button id={episode.title} variant="outlined" sx={{m: 2}} onClick={(event) => addtoFavourites(event) } >
                                          Add to Favourites
                                    </Button>
                                </Typography>
                            </Card>
                        )
                    })
                }
            </Typography>
        </>
    )
}