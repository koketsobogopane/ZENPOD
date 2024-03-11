
import { useState } from 'react';
import Dialog from '@mui/material/Dialog'

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';


const SearchModal = (props) => {
    
    const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  }
    return (
<>
        <TextField
            style={{margin: 20, display: 'flex', justifyContent: 'space-around'}}
           onChange={(event) => props.handleSearchInput(event)}
          id="filled-search"
          label="Search"
          type="search"
          variant="standard"
          name='title'
        />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Genre_label">Genre</InputLabel>
        <Select
          labelId="Genre_label"
          id="Genre"
          value={props.searchQuery.genre}
          onChange={(event) => props.handleSearchInput(event)}
          name='genre'
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          
        </Select>
      </FormControl>  
      </>      
    )
    
}


export default SearchModal