import React from 'react';

import { makeStyles } from '@material-ui/core';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Paper,

} from '@material-ui/core'

import TodoAdder from './components/todo-adder';
import TodosContainer from './components/todos-container'

const useStyles=makeStyles((theme)=>({
  root:{},
  appContainer:{
    paddingLeft:100,
    paddingRight:100,
    marginTop:100,
    // backgroundColor:"blue",
  },
  wrapper:{
    textAlign:"center",
    width:"100%"
  }
}))

export default function Todos() {

  const classes=useStyles();

  return <Box className={classes.root}>
   <AppBar position="static">
     <Toolbar>
       <IconButton edge="start" color="inherit">
         <img style={{width:"50px"}} src="logo.png" alt="TODO" />

       </IconButton>
       <Typography variant="h5">
          TODOS LIST
       </Typography>
     </Toolbar>

   </AppBar>
   <Container className={classes.appContainer}>
    <Paper className={classes.wrapper} elevation={0}>
      {/* A component to add todos -"TodoAdder" */}

      <TodoAdder/>

      {/* Container are to dispaly all todos -"TodosContainer*/}
      <TodosContainer />
    </Paper>
   </Container>
  </Box>;
}
