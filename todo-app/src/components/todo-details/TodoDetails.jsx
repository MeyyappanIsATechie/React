import React from 'react'
import PropTypes from 'prop-types';
import { Dialog , DialogTitle, DialogActions, Button} from '@mui/material';

const TodoDetails = ({todoDetails, openDialog, onClose}) => {
  return <React.Fragment>
    <Dialog open={openDialog} onClose={(event, reason) => {
        if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
          return;
        }
        onClose();
    }}>
        <DialogTitle>{todoDetails ? todoDetails.todo : 'Details'}</DialogTitle>
        <DialogActions>
            <Button onClick={onClose}>
                Close
            </Button>
        </DialogActions>
      </Dialog>
  </React.Fragment>

}

TodoDetails.propTypes = {
    todoDetails: PropTypes.shape({
        id: PropTypes.number,
        todo: PropTypes.string,
        completed: PropTypes.bool,
      }).isRequired,
  openDialog: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default TodoDetails
