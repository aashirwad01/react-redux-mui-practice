import { Box ,Typography ,Divider , List } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import TodoItem from './todo-item';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';



const useStyles=makeStyles(()=>({
    root:{
        marginTop:"5vh",
        padding:"3vh",
        // backgroundImage: `linear-gradient(280deg,#2376ae 60%,#000000 90%);`,
        backgroundImage: `linear-gradient(80deg,#2376ae 20%,#c16ecf 60%);`,
        // backgroundColor:"rgb(92.9%,92.9%,92.9%)",
        maxWidth:"65vw" ,
       

        "@media (max-width: 1100px ) and (min-width:800px)":{

            maxWidth:"40vw" ,
            
            // margin:"-2rem",
            // padding:"1rem",
            // marginTop:"1rem",
            // marginLeft:"-3.5rem",

        } ,

        "@media (max-width: 360px ) ":{

            maxWidth:"80vw" ,
           
            // margin:"-2rem",
            // padding:"1rem",
            // marginTop:"1rem",
            // marginLeft:"-3.5rem",

        },
        "@media (max-width: 300px ) ":{

            maxWidth:"100vw" ,
            padding:"1vh",
            marginLeft:"20vw"
            // margin:"-2rem",
            // padding:"1rem",
            // marginTop:"1rem",
            // marginLeft:"-3.5rem",

        }
    },
    text:{
        // margin:"4rem", 
        
    }

    

}))

export default function TodosContainer() {
    const classes=useStyles();
    

    const {todos}=useSelector((state)=>{
        return {
            todos:state.todos,
        }
    })


    const prioritisedTodos=(function prioritise(){

        const importantTodos=[];
        const notImportantTodos=[];

        todos.forEach((todo)=>{
            if(todo.important){
                importantTodos.push(todo);
            }
            else{
               notImportantTodos.push(todo) ;
            }
        })

        

        return importantTodos.concat(notImportantTodos)

    })();

    var mytodo=0;
    var completetodo=0;
    (prioritisedTodos.map(todo=>{
        if(!todo.completed){
            mytodo=mytodo+1
        }
        else{
            completetodo=completetodo+1;
        }
    }))

  


  return <Box className={classes.root}>
      <Grid  container   spacing={10} >
          <Grid item sx={{ flexDirection: { xs: "column", md: "row"} }}>
              <Typography 
            //   style={{margin:4}} 
              className={classes.text} align="left" variant="h5" gutterBottom >
                My Todos ({mytodo})
              </Typography>
              <Divider/>
            <List>
                {prioritisedTodos.map(todo=>{
                    if(!todo.completed){
                        return <TodoItem key={todo.id} {...todo}/>
                    }
                    else{
                        return null;
                    }
                   
                    })}
            </List>
              
          </Grid>
          <Grid item sx={{ flexDirection: { xs: "column", md: "row"} }}>
          <Typography align="left" variant="h5" gutterBottom>
                Completed Todos ({completetodo})
              </Typography>
              <Divider/>
              <List>
                {prioritisedTodos.map(todo=>{
                    if(todo.completed){
                        return <TodoItem key={todo.id} {...todo}/>
                    }
                    else{
                        return null;
                    }
                   
                    })}
            </List>

          </Grid>

      </Grid>

  </Box>;
}
