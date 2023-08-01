
import { useState } from 'react';
import Dialog from '@mui/material/Dialog'

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { genres } from '../List/List';

const SearchModal = (props) => {
    
    const [searchValue, setSearchValue] = useState({
        title: "",
        genre:"",
    })
   
    return (

        <Dialog
        open = {props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-search"
        fullWidth={true}
        maxWidth={"sm"}
        >
            <form>
            <DialogTitle id='alert-dialog-title'>
                Search for shows
            </DialogTitle>
            <DialogContent id= 'alert-dialog-search'>
                <div style={{ display:'flex', flexDirection: 'column'}}>
            <TextField
            style={{marginTop: 20}}
           onChange={(event) => setSearchValue((prevState) =>({
            ...prevState,
            title : event.target.value
           }))}
          id="filled-search"
          label="Search"
          type="search"
          variant="standard"
          name='search'
        />
        <FormControl fullWidth sx={{mt: 2}}>
        <InputLabel id='genres' >Genre</InputLabel>
        <Select
        labelId='genres'
        value={searchValue.genre}
        onChange={(event) => setSearchValue((prevState) =>({
            ...prevState,
            genre : [event.target.value]
           }))}
        label= 'Genre'
        id='genre'
        >

        <MenuItem value="">
            All Genres
        </MenuItem>
        {[...genres].map((genre, )=>(
            <MenuItem key={genre.id}  value={genre.id}>{genre.name}</MenuItem>)
            )}

        </Select>
        </FormControl>
        </div>
            </DialogContent>
            
            <Button onClick={props.handleClose}>Cancel</Button>
            <Button onClick={(event) =>{
                event.preventDefault()
                props.setSearchQuery(searchValue)
                props.handleClose()
            }
                }>Search</Button>
            </form>
        </Dialog>
        
    )
    
}


export default SearchModal