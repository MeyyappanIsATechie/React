//import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import classes from "./styles.module.css";
import TodoItems from "./components/todo-items/TodoItems";
import TodoDetails from "./components/todo-details/TodoDetails";
import { Skeleton } from "@mui/material";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchCurrentTodo = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://dummyjson.com/todos/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // for debugging purposes only
      if(data){
      setTodoDetails(data);
      setOpenDialog(true);
      }
      else{
        console.log("No data found for this ID");
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const fetchList = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://dummyjson.com/todos");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // for debugging purposes only
      setTodoList(data.todos);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setTodoDetails(null);
  };

  if(loading) {
    return <Skeleton variant="rectangular" width={650} height={450}/>
  }

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Todo app using Material UI</h1>
      <div className={classes.centeredDiv}>
        {/* {loading && <div>Loading...</div>} */}
        {error && <div>Error: {error}</div>}
        {!loading && todoList.length > 0 && (
            todoList.map((todo) => (
              <TodoItems fetchCurrentTodo={fetchCurrentTodo} key={todo.id} todo={todo} />
            ))
        )}
      </div>
      <TodoDetails openDialog={openDialog} todoDetails={todoDetails} onClose={handleCloseDialog}/>
    </div>
  );
};

export default App;
