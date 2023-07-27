import { useState } from 'react'
import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SortSharpIcon from '@mui/icons-material/SortSharp';
import SelfImprovementSharpIcon from '@mui/icons-material/SelfImprovementSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SearchModal from '../SearchModal/SearchModal';

const option = [
    'A-Z',
    'Z-A',
    'Oldest to Newest',
    'Newest to Oldest'
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = () => {
        setIsOpen(true);
      };
    
      const handleClose = () => {
        setIsOpen(false);
      };

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
                <IconButton
                size='large'
                edge="end"
                color='inherit'
                aria-label="menu"
                sx={{ mr: 1 }}
                >
                    <SortSharpIcon/>  
                    
                </IconButton>
                <IconButton
                onClick={handleClickOpen}
                size='large'
                edge="end"
                color='inherit'
                aria-label="menu"
                sx={{ mr: 1 }}
                >
                    <SearchSharpIcon/>   
                </IconButton>
            </Toolbar>
            <SearchModal handleClose={handleClose}open={isOpen}/>
        </StyleAppBar>
        
    )
}


export default Navbar