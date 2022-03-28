import { TextField,Box ,Button  } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useState ,useRef} from 'react';

import {ADD_TODO} from "../redux/actions"
const useStyles=makeStyles(()=>({

  root:{

    "@media (max-width: 300px ) ":{

   
     display:'flex',
    //  flexDirection:'column',
     alignItems:'center'
      // margin:"-2rem",
      // padding:"1rem",
      // marginTop:"1rem",
      // marginLeft:"-3.5rem",
  
  }
    
  },

  text:{
    backgroundImage: `linear-gradient(260deg,#2376ae 10%,#CF9FFF 50%);`,
    color:'black',
    "@media (max-width: 360px ) ":{

      width:"60vw" ,
      
      // margin:"-2rem",
      // padding:"1rem",
      // marginTop:"1rem",
      // marginLeft:"-3.5rem",

  },
  "@media (max-width: 300px ) ":{

    width:"50vw" ,
    marginLeft:"28vw",
   
    // margin:"-2rem",
    // padding:"1rem",
    // marginTop:"1rem",
    // marginLeft:"-3.5rem",

}

  },

 
  btnu:{
   

   
  "@media (max-width: 300px ) ":{

   
    // marginLeft:"-100vw",
    // marginBottom:"5vh"
    // margin:"-2rem",
    // padding:"1rem",
    // marginTop:"1rem",
    // marginLeft:"-3.5rem",

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

  return <Box className={classes.root}>
      <TextField className={classes.text}
      // fullWidth
      style={{minWidth:"30vw"}}
      inputRef={titleFieldRef}
      label="Add New Todo" 
      variant="filled"
      onChange={handleTextChange}
      >
          

      </TextField>
      <Button className={classes.btnu} 
         style={{height:55}}
          variant="contained" 
          color="primary"
          onClick={addTodoItem}
          
          >
            Add
          </Button>


  </Box>;
}
