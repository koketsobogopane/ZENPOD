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
import { Menu, MenuItem } from '@mui/material';

const option = [
    'A-Z',
    'Z-A',
    'Oldest to Newest',
    'Newest to Oldest'
]

const Navbar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    
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

    const handleItemsClick = (option) => {
        console.log (option);
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
                <IconButton
                size='large'
                edge="end"
                color='inherit'
                aria-label="menu"
                sx={{ mr: 1 }}
                >
                    <SortSharpIcon 
                    titleAccess="Sort"
                    onClick={handleClick}
                    aria-controls={open ? 'Sort-Menu': undefined}
                    aria-haspopup= 'true'
                    aria-expanded = { open ? 'true' : undefined}
                    />  
                    <Menu 
                    id='Sort-Menu'
                    anchorEl={anchorEl}
                    aria-labelledby = "Sort-Menu"
                    open={open}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    >
                        {option.map((element)=> (
                            <MenuItem 
                                value = {element}
                                onClick= {() => {
                                    props.sortClick(element)
                                    setAnchorEl(null);
                                }}
                                key= {element} 
                                >{element}</MenuItem>
                            ))}
                    </Menu>
                </IconButton>
                <IconButton
                onClick={handleClickOpen}
                size='large'
                edge="end"
                color='inherit'
                aria-label="menu"
                sx={{ mr: 1 }}
                >
                    <SearchSharpIcon titleAccess='Search'/>   
                </IconButton>
            </Toolbar>
            <SearchModal handleClose={handleClose}open={isOpen}/>
        </StyleAppBar>
        
    )
}


export default Navbar