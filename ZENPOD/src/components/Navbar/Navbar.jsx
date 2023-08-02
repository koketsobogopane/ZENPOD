import { useState } from 'react'
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import SortSharpIcon from '@mui/icons-material/SortSharp';
import SelfImprovementSharpIcon from '@mui/icons-material/SelfImprovementSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SearchModal from '../SearchModal/SearchModal';
import { FormControl, Menu, MenuItem, Select } from '@mui/material';


const option = [
    'A-Z',
    'Z-A',
    'Oldest to Newest',
    'Newest to Oldest'
]

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [sortValue, setSortValue] = useState('A-Z')
    
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
            setAnchorEl(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    const handleClickOpen = () => {
        setIsOpen(true);
      };
    
      const handleClose = () => {
        setIsOpen(false);
      };

    const handleItemsClick = () => {
        handleCloseMenu()
    }

    const StyleAppBar = styled(AppBar)`
        background-color: #79B791;
        color: #51291E;
    ` 
    return (
        <StyleAppBar position="sticky">
            <Toolbar>
            <IconButton
                size='small'
                edge="start"
                color='inherit'
                aria-label="menu"
                disableRipple= {true}
                >
                    <SelfImprovementSharpIcon />   
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    ZENPOD
                </Typography>
                <FormControl
                    size='small'
                    sx={{minWidth: 23}}
                >
                    <InputLabel id= 'sorting'>Sort By</InputLabel>
                    <Select 
                        labelId='sorting'
                        value={sortValue}
                        onChange={(e)=>{setSortValue(e.target.value)}}
                        autoWidth
                        label="Sorting"
                        id='Sorting'

                    >
                        {option.map((element)=> (
                            <MenuItem 
                                value = {element}
                                onClick= {() => {
                                    props.sortClick(element)
                                    handleItemsClick()
                                }}
                                key= {element} 
                                >{element}</MenuItem>
                            ))}
                    </Select>
                </FormControl>
            </Toolbar>
        </StyleAppBar>
        
    )
}


export default Navbar