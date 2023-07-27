
import styled from "@emotion/styled"
import { Card, Typography, Button, IconButton } from "@mui/material"
import { useEffect, useState } from 'react'
import {Accordion, AccordionSummary, AccordionDetails,} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Loading from "../Loading/Loading"
import Slider from '@mui/material/Slider'

const Show = (props) =>{ 

 const [ show, setShow ] = useState()

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
         <Button style={{ margin: '10px', color: 'black'  }}>Back</Button>   
        

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
            <Typography>
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
                { show.seasons.map((element) => (
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
                        <Accordion key={index}>
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
                                <div>{episode.description}</div>
                            <EpisodeControls>
                                    <IconButton>
                                        <PlayArrowIcon />
                                    </IconButton>
                                    <IconButton>
                                        <StarOutlineIcon />
                                    </IconButton>
                                    <Slider
                                        size="small"
                                        defaultValue={79}
                                        aria-label="Small"
                                        valueLabelDisplay="auto"
                                        />
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
        </Content>
        </>
    )
}    

export default Show