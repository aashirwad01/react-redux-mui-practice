import { TextField,Box ,Button  } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useState ,useRef} from 'react';

import {ADD_TODO} from "../redux/actions"
const useStyles=makeStyles(()=>({

  root:{
    
  },

  text:{

  },

 
  btn:{
    // height:55,

    "@media (max-width: 480px)":{
          
     
      marginTop:"1rem",
     

  }

  }


}))

export default function TodoAdder() {

 

  const classes=useStyles();

    const [title,setTitle]=useState(null);
    const titleFieldRef=useRef(null);

    const dispatch =useDispatch();

    function handleTextChange(e){
        // update the title

        setTitle(e.target.value);

    }

    function addTodoItem(){

        // we will need to dispatch the Add Todo redux action here

        if(title){
          dispatch({
            type:ADD_TODO,
            payload:{
              title,
            },
          })
          setTitle(null)
          titleFieldRef.current.value="";
  

        }
        
        // we dispatch an add todo action here
    }

  return <Box>
      <TextField className={classes.text}
      style={{width:"15rem",marginLeft:"-2.5rem"}}
      inputRef={titleFieldRef}
      label="Add New Todo" 
      variant="filled"
      onChange={handleTextChange}
      >
          

      </TextField>
      <Button classname={classes.btn} 
      style={{
          height:55,
          }} 
          variant="contained" 
          color="primary"
          onClick={addTodoItem}
          
          >
            Add
          </Button>


  </Box>;
}
