//import React from 'react'
import PropTypes from 'prop-types';
import {Card, CardActions, CardContent, Typography, Button} from '@mui/material';

const TodoItems = ({todo, fetchCurrentTodo}) => {
  return (
    // <li>
    // <p>{todo.todo}</p>
    //   <p>{todo.completed ? "Completed" : "Incomplete"}</p>
    //   </li>
    <Card sx={{
        maxWidth:350,
        display: 'flex',
        justifyContent: 'space-between',
        // border: '1px solid #ccc',
        flexDirection: 'column' 
    }}>
        <CardContent>
            <Typography variant="h5" color={'text.secondary'} >{todo.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={()=>fetchCurrentTodo(todo.id)} sx={{
                backgroundColor: 'black',
                color: 'white',
                //padding: '5px 10px',
                // borderRadius: '5px',
                opacity: "0.75",
                '&:hover': {
                    backgroundColor: 'red',
                    color: 'white',
                    opacity: "1"
                }
            }}>Details</Button>
        </CardActions>
    </Card>
  )
}

TodoItems.propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
    fetchCurrentTodo: PropTypes.func.isRequired,  // a function that fetches current todo by its id.
  };

export default TodoItems
