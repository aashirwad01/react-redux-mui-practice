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
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';





const useStyles=makeStyles((theme)=>({
  root:{},
  tool:{
    "@media (max-width: 300px ) ":{

      minWidth:"110vw" ,
     
      // margin:"-2rem",
      // padding:"1rem",
      // marginTop:"1rem",
      // marginLeft:"-3.5rem",

  }
  },
  appContainer:{
    // paddingLeft:100,
    // paddingRight:100,

    marginTop:'10vh',
    // backgroundColor:"blue",
  },
  wrapper:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center',
    // textAlign:"center",
   
    width:"100%",
    // backgroundImage: `linear-gradient(150deg,#2376ae 5%,#000000 80%);`,

    // backgroundImage:`linear-gradient(280deg,#2376ae 0%,#000000 50%);`,
    "@media (max-width: 300px ) ":{

      width:"70vw",
      // margin:"-2rem",
      // padding:"1rem",
      // marginTop:"1rem",
      // marginLeft:"-3.5rem",

  }

  }
}))

export default function Todos() {

  const classes=useStyles();

  return <Box className={classes.root}>
   <AppBar className={classes.tool}  position="static">
     <Toolbar  >
       <IconButton edge="start" color="inherit">
         <PlaylistAddCheckIcon fontSize='large' />
         {/* <img style={{width:"50px"}} src="logo.png" alt="TODO" /> */}

       </IconButton>
       <Typography variant="h6">
          TODOS LIST
       </Typography>
     </Toolbar>

   </AppBar>
   <Container className={classes.appContainer}>
    <Box className={classes.wrapper} >
      {/* A component to add todos -"TodoAdder" */}

      <TodoAdder/>

      {/* Container are to dispaly all todos -"TodosContainer*/}
      <TodosContainer />
    </Box>
   </Container>
  </Box>;
}
