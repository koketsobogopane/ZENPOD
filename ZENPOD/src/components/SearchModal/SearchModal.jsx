
import { useState } from 'react';
import Dialog from '@mui/material/Dialog'

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { genres } from '../List/List';

const SearchModal = (props) => {
    
    
   
    return (

        <TextField
            style={{margin: 20, display: 'flex', justifyContent: 'space-around'}}
           onChange={(event) => props.handleSearchInput(event)}
          id="filled-search"
          label="Search"
          type="search"
          variant="standard"
          name='search'
        />
            
        
    )
    
}


export default SearchModal