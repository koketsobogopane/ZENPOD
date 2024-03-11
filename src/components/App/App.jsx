
import Navbar from "../Navbar/Navbar"
import { Global, css } from "@emotion/react"
import List from "../List/List"
import Show from '../Show/Show'
import { useEffect, useState} from 'react'
import Loading from "../Loading/Loading"
import {Box} from "@mui/material"
import Fuse from 'fuse.js'
import { genres } from "../List/List"
import styled from "@emotion/styled"
import { Routes, Route, Link, useResolvedPath, useMatch, useNavigate } from "react-router-dom"
import SearchModal from "../SearchModal/SearchModal"
import Favourates from "../Favourates/Favourates"


const App = () => {



    const [content, setContent] = useState()
    const [sortBy, setSortBy] = useState('A-Z')
    const [showId, setShowId] = useState([])
    const [searchQuery, setSearchQuery] = useState({
        title: '',
        genre:'',
    })
    const [currentEpisode, setCurrentEpisode] = useState(null);
    // State to track whether the user has signed up
  const [isSignedUp, setIsSignedUp] = useState(false);

  // Function to handle successful sign-up
  const handleSignUp = () => {
    setIsSignedUp(true);
    navigate('/')
}

const navigate = useNavigate()

    const resolvedPathBrowse = useResolvedPath("/browse")
    const isBrowsing = useMatch({path: resolvedPathBrowse.pathname, end: true})
    const resolvedPathShow = useResolvedPath(`/show/*`)
    const isOnShow = useMatch({path: resolvedPathShow.pathname, end: true})
    const resolvedPathSignIn = useResolvedPath(["/signin", "/signup"])
    const isOnSignIn = useMatch({path: resolvedPathBrowse.pathname, end: true})



    useEffect(
    
    () => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://podcast-api.netlify.app/shows')
                const data = await response.json();
                setContent(data);
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }
    ,[]
    )
   

     // Function to handle episode change
  const onEpisodeChange = (episode) => {
    // Pause the audio if a different episode is playing
    if (currentEpisode && currentEpisode.id !== episode.id) {
      const audioElement = document.querySelector("audio");
      if (audioElement) {
        audioElement.pause();
      }
    }

    // Set the new current episode
    setCurrentEpisode(episode);
  };

    const onClick = (option) => {
        setSortBy(option) 
    }

    const handleShowClick = (id) => (
        setShowId(prevState => (
            prevState === id? null : id
        ))
        
    )

   

    const handleSearchInput = (event) => {
        setSearchQuery(prevState => ({
            ...prevState,
            [event.target.name]: [event.target.value]}))

            
           
                    
                

    }
    
   
if (!content) return <Loading />
let sortedShows = content


const fuseOptions = {
    keys: ['title'],
    threshold: 0.2,
    includeScore: true,
}



const fuse = new Fuse(content, fuseOptions)
const result = fuse.search(searchQuery.title)
const filteredContent = result.map(character => character.item)


if (sortBy === "A-Z") {
      sortedShows = content?.sort((a, b) => a["title"].localeCompare(b['title']));
    } else if (sortBy === "Z-A") {
      sortedShows = content?.sort((a, b) => b["title"].localeCompare(a['title']));
    } else if (sortBy === "Oldest to Newest") {
      sortedShows = content?.sort((a, b) => new Date(a['updated']) - new Date(b['updated']));
    } else if (sortBy === "Newest to Oldest") {
      sortedShows = content?.sort((a, b) => new Date(b['updated']) - new Date(a['updated']));
    }else if (searchQuery.genre) sortedShows = (content.filter(show => show.genres.includes(genres[searchQuery.genre]))) 

sortedShows = filteredContent.length === 0 ? content : filteredContent


    const global = css`0
        body {
            margin: 0;
            background-color: #edf4ed;
        } 
    ` 
    
    return (
        <div>
     <Global styles={global} />



    <MainApp 
            onClick = {onClick}
             setSearchQuery = {setSearchQuery}
             isBrowsing = {isBrowsing}
             handleSearchInput = {handleSearchInput}
             searchQuery = {searchQuery}
             isOnShow = {isOnShow}
             handleShowClick = {handleShowClick}
             sortedShows = {sortedShows}
             showId = {showId}

        /> 
            
            </div>
    )
}


const MainApp = ({ onClick, setSearchQuery, isBrowsing, handleSearchInput, searchQuery, isOnShow, handleShowClick, sortedShows, showId}) => {
   
    const Subnav = styled(Box)`
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:.5rem .7rem;
    font-size: large;
    color: #51291E;

 `
   
    return(
        <>  
            <Navbar/>
                <Routes>
                    <Route path="/home"  element={<List onClick={handleShowClick} content={sortedShows} />}/>
                    <Route path="/favourates"  element={<Favourates />}/>
                    <Route path="/browse"  element={<List onClick={handleShowClick} content={sortedShows} />}/>
                    <Route path=  {`/show/*`}  element={<Show displayShow={showId} />} />
                </Routes>
               
        </>
    )
}

export default App
