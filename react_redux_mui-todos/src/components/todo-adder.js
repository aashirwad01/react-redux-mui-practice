import { TextField,Box ,Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import React from 'react';
import { useState ,useRef} from 'react';

import {ADD_TODO} from "../redux/actions"

export default function TodoAdder() {

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
      <TextField
      style={{width:400,}}
      inputRef={titleFieldRef}
      label="Add New Todo" 
      variant="filled"
      onChange={handleTextChange}
      >
          

      </TextField>
      <Button style={{
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
