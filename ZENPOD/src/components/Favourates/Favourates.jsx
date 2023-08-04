import { Card, CardMedia, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import {CardContent} from "@mui/material";
 



const Favourates = () => {
    const [fetchError, setFetchError] = useState(null)
    const [favourites, setFavourites] = useState(null)

    

    useEffect(() => {
        const fetchFavourites = async () => {
            const  { data, error } = await supabase
             .from('favourites')
             .select()

             if (error) {
                setFetchError('Could not fetch the favourites')
                setFavourites(null)
                console.log(error)
             }
             if (data) {
                setFavourites(data)
                setFetchError(null)
             }
        }

        fetchFavourites()
    },[])  
    

    


    return (
        <div>
           {fetchError && (<p>{fetchError}</p>)} 
           {favourites && (favourites.map((favourate=>(
            <FavouratesCard key={favourate._id} image={favourate.showImage} audioFile={favourate.audioFile} season={favourate.season} epTitle={favourate.title} createdAt={favourate.created_at}/>
           )
           ))
           )}
        </div>
        )
}




export default Favourates

const FavouratesCard = ({ image, season, audioFile, epTitle, createdAt }) => {
    const date = new Date(createdAt).toLocaleDateString('en-GB')

    return (
        <>
            <Card sx={{p:3, m:5}}>
                <Typography>{epTitle}</Typography>
                <CardMedia>
                   <img src= {image} />
                </CardMedia>
                <CardContent style={{padding: '10px'}} >
                    <Typography>{season}</Typography>
                    <Typography>Picked on: {date}</Typography>

                </CardContent>
                <CardMedia>
                    <audio src={audioFile} controls />
                </CardMedia>
            </Card>
        </>
    )
}