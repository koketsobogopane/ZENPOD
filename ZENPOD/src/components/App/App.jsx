import { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import { Global, css } from "@emotion/react"
import List from "../List/List"
import Show from '../Show/Show'

const App = () => {

    const changeView = () =>  {
        setView(<Show />)
    }

    const [ view, setView ] = useState(<List onClick={changeView} />)
    
    

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
            {view}
            </div>
    )
}

export default App
