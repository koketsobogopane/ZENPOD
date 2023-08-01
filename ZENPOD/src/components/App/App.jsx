
import Navbar from "../Navbar/Navbar"
import { Global, css } from "@emotion/react"
import List from "../List/List"
import Show from '../Show/Show'
import { useEffect, useState } from 'react'
import Loading from "../Loading/Loading"
import AudioDrawer from "../AudioDrawer/AudioDrawer"
import Fuse from 'fuse.js'
import { genres } from "../List/List"


const App = () => {
    
    const [content, setContent] = useState()
    const [sortBy, setSortBy] = useState('')
    const [searchQuery, setSearchQuery] = useState({
        title:'',
        genre: ''
    })
    
    // sort by A to Z or Z to A
    let sortedShows = []
    if(!content){
        sortedShows
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
            sortedShows = content ?.sort((a, b)=> new Date(b['updated']) - new Date(a['updated']))
        } else {
            sortedShows = content
        }

        
          
        
           
    
        

        if (content){
            sortedShows = content.filter((element) => {
                const lowerCaseTitle = searchQuery.title.toLowerCase();
                const genreId = parseInt(searchQuery.genre);
            
                const titleMatch = element.title.toLowerCase().includes(lowerCaseTitle);
                const genreMatch = !isNaN(genreId) && element.genres.includes(genreId);
            
                // Check if both title and genre match the search query
                if (searchQuery.genre !== '' && searchQuery.title !== '') {
                  return titleMatch && genreMatch;
                }
            
                // Only check title match if genre is not specified
                if (searchQuery.genre === '' && searchQuery.title !== '') {
                  return titleMatch;
                }
            
                // Only check genre match if title is not specified
                if (searchQuery.genre !== '' && searchQuery.title === '') {
                  return genreMatch;
                }
            
                // If neither genre nor title is specified, return all elements
                return true;})}
        // })}
            // if (!search) {
            //     console.log('search is undefined'); // No need to search if the searchQuery is empty
            //     return
            //   }

            //   const fuseOptions = {
            //     keys: ['name'],
            //     includeScore: true,
            //   }

            //   const fuse = new Fuse(sampleData, fuseOptions);

            //   const searchResults = fuse.search(search);
            //   const filteredData = searchResults.map((result) => result.item)

            //   console.log ('Search Result:', filteredData)
            

        // const searchResults = fuse.search(search);
        // const filteredData = searchResults.map((result) => result.item)
        // console.log (filteredData)
        
    
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
            <Navbar sortClick={onClick}  setSearchQuery = {setSearchQuery} />
            {showIsClicked ? <Show displayShow={showId} /> : <List onClick={handleClick}  content={sortedShows} />}
            <AudioDrawer />
            </div>
    )
}

export default App
