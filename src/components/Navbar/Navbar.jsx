import { useState } from 'react';
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
import styles from './Navbar.module.css';
import Logo from '../../../public/assets/ZenLogo.png';
import { Link } from 'react-router-dom';

const option = ['A-Z', 'Z-A', 'Oldest to Newest', 'Newest to Oldest'];

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortValue, setSortValue] = useState('A-Z');

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleItemsClick = () => {
    handleCloseMenu();
  };

  const StyleAppBar = styled(AppBar)`
    background-color: #79b791;
    color: #51291e;
  `;
  return (
    <header className={styles.header}>
      <Link to={'/'} className={styles.logoContainer}>
        <img src={Logo} alt="logo" />
        <h1>ZENPOD</h1>
      </Link>

      <SearchSharpIcon />
    </header>
  );
};

export default Navbar;
