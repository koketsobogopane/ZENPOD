import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { IconButton, Slider } from '@mui/material';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.background.default,
})) ;

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: grey[800],
}))

const AudioDrawer = (props) => {
    const { window } = props;
    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    const AudioPlayer = styled(Box)`
        color: #EDF4ED;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible'
                    },
                }}
                />
                <Box sx={{textAlign: 'center', pt: 1}}>
                    <Button  onClick={toggleDrawer(true)}>Audio</Button>    
                </Box>
                <SwipeableDrawer
                    container={container}
                    anchor='bottom'
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={false}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    >
                        <StyledBox 
                           sx={{
                                position: 'absolute',
                                top: -drawerBleeding,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                visibility: 'visible',
                                right: 0,
                                left: 0,
                            }}
                            >
                            <Puller onClick={toggleDrawer(true)} />
                            <Typography sx={{ p: 2, color: '#EDF4ED' }}>Audio Title</Typography>
                            </StyledBox>
                            <StyledBox
                                sx={{
                                    px: 2,
                                    pb: 2,
                                    height: '100%',
                                    overflow: 'auto',
                                }}
                                >
                                <AudioPlayer>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <img src='/asset/podcast.gif' alt='audio cover' />
                                        <div style={{padding: '20px'}} >
                                            
                                        </div>
                                    </div>
                                    <Slider sx= {{ pt:3}} />
                                    <div>
                                        
                                            <IconButton >
                                                <PlayArrowRounded fontSize='large'/>
                                            </IconButton>
                                           
                                    </div>
                                </AudioPlayer>
                                </StyledBox>
                    </SwipeableDrawer>
        </Root>
    )
}

export default AudioDrawer 
//<Skeleton variant="rectangular" height="100%" />