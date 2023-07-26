import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';


const SearchModal = (props) => {
    return (

        <Dialog
        open = {props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-search"
        >
            <DialogTitle id='alert-dialog-title'>
                Search for shows
            </DialogTitle>
            <DialogContent id= 'alert-dialog-search'>
            <TextField
          id="filled-search"
          label="Search"
          type="search"
          variant="standard"
        />
            </DialogContent>
            <Button onClick={props.handleClose}>Cancel</Button>
        </Dialog>
    )
    
}


export default SearchModal