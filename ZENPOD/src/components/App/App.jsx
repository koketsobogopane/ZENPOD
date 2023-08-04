
import Navbar from "../Navbar/Navbar"
import { Global, css } from "@emotion/react"
import List from "../List/List"
import Show from '../Show/Show'
import { useEffect, useState, useLayoutEffect } from 'react'
import Loading from "../Loading/Loading"
import {Box} from "@mui/material"
import Fuse from 'fuse.js'
import { genres } from "../List/List"
import { Button } from "@mui/material"
import styled from "@emotion/styled"
import { Routes, Route, Link, useResolvedPath, useMatch, resolvePath } from "react-router-dom"
import SearchModal from "../SearchModal/SearchModal"
import Favourates from "../Favourates/Favourates"
import SignIn from "../SignIn/SignIn"
import supabase from "../../config/supabaseClient"


const App = () => {
    console.log(supabase)
    const [content, setContent] = useState()
    const [sortBy, setSortBy] = useState('A-Z')
    const [showId, setShowId] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const resolvedPathBrowse = useResolvedPath("/browse")
    const isBrowsing = useMatch({path: resolvedPathBrowse.pathname, end: true})
    const resolvedPathShow = useResolvedPath(`/show/${showId}`)
    const isOnShow = useMatch({path: resolvedPathShow.pathname, end: true})
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
   

    const onClick = (option) => {
        setSortBy(option) 
    }

    const handleShowClick = (id) => (
        setShowId(prevState => (
            prevState === id? null : id
        )),
        console.log(showId)
    )

   

    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value)
        console.log (searchQuery)
    }
    
   
if (!content) return <Loading />
let sortedShows = content


const fuseOptions = {
    keys: ['title'],
    threshold: 0.2,
    includeScore: true,
}



const fuse = new Fuse(content, fuseOptions)
const result = fuse.search(searchQuery)
const filteredContent = result.map(character => character.item)


if (sortBy === "A-Z") {
      sortedShows = content?.sort((a, b) => a["title"].localeCompare(b['title']));
    } else if (sortBy === "Z-A") {
      sortedShows = content?.sort((a, b) => b["title"].localeCompare(a['title']));
    } else if (sortBy === "Oldest to Newest") {
      sortedShows = content?.sort((a, b) => new Date(a['updated']) - new Date(b['updated']));
    } else if (sortBy === "Newest to Oldest") {
      sortedShows = content?.sort((a, b) => new Date(b['updated']) - new Date(a['updated']));
    }


sortedShows = filteredContent.length === 0 ? content : filteredContent

 const Subnav = styled(Box)`
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:.5rem .7rem;
    font-size: large;
    color: #51291E;

 `
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
            {
               isBrowsing ? <SearchModal handleSearchInput= {handleSearchInput} /> : ''  
            }
            {
               isOnShow?  '':(<Subnav >
                            
                            <Link   to="/" style={{ margin: '10px', color: '#51291E', }} >Home</Link>
                            <Link   to="/favourates" style={{ margin: '10px', color: '#51291E', }} >Favourates</Link>
                            <Link   to="/browse" style={{ margin: '10px', color: '#51291E', }} >Browse</Link>
                            
                                        
                        </Subnav >) 
            }
            <Routes>
                <Route path="/"  element={<List onClick={handleShowClick} content={sortedShows} />}/>
                <Route path="/favourates"  element={<Favourates />}/>
                <Route path="/browse"  element={<List onClick={handleShowClick} content={sortedShows} />}/>
                <Route path=  {`/show/*`}  element={<Show displayShow={showId} />} />
            </Routes>

            </div>
    )
} 

export default App
