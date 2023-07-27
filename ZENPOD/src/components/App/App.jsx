
import Navbar from "../Navbar/Navbar"
import { Global, css } from "@emotion/react"
import List from "../List/List"
import Show from '../Show/Show'
import { useEffect, useState } from 'react'
import Loading from "../Loading/Loading"


const App = () => {
    
    const [content, setContent] = useState()

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
            <Navbar/>
            {showIsClicked ? <Show displayShow={showId} /> : <List onClick={handleClick}  content={content} />}
            </div>
    )
}

export default App
