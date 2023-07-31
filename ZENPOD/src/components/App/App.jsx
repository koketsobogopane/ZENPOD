
import Navbar from "../Navbar/Navbar"
import { Global, css } from "@emotion/react"
import List from "../List/List"
import Show from '../Show/Show'
import { useEffect, useState } from 'react'
import Loading from "../Loading/Loading"
import AudioDrawer from "../AudioDrawer/AudioDrawer"

const App = () => {
    
    const [content, setContent] = useState()
    const [sortBy, setSortBy] = useState('A-Z')
    // sort by A to Z or Z to A
    let sortedShows 
    if(!content){
        sortedShows= []
        } 
        else if(sortBy === "A-Z"){
            sortedShows = content?.sort((a, b) => a["title"].localeCompare( b['title']))
        }
        else  if(sortBy === "Z-A"){
            sortedShows = [...content].reverse()
        } 
        else if(sortBy === "Oldest to Newest"){
            sortedShows = content ?.sort((a, b)=> new Date(a['updated']) - new Date(b['updated']))
        }else if(sortBy === "Newest to Oldest"){
            sortedShows = content ?.sort((a, b)=> new Date(a['updated']) - new Date(b['updated']))
        }

        
    
    const onClick = (option) => {
        setSortBy(option) 
    }
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
   
    const [showIsClicked, setShowIsClicked] = useState(null)
    const [showId, setShowId] = useState()
    
    const handleClick = (id) => {
        setShowIsClicked("viewing")
        setShowId(id)
    }
if (!content) return <Loading />


    const global = css`
        body {
            margin: 0;
            background-color: #edf4ed;
        }   
    ` 
    return (
        <div>
        <Global styles={global} />
            <Navbar sortClick={onClick}/>
            {showIsClicked ? <Show displayShow={showId} /> : <List onClick={handleClick}  content={sortedShows} />}
            <AudioDrawer />
            </div>
    )
}

export default App
