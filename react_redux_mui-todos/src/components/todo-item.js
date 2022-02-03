import { Checkbox, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import { FormGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { DELETE_TODO, TOGGLE_COMPLETED,TOGGLE_IMPORTANT } from '../redux/actions';
import DeleteIcon from '@material-ui/icons/Delete'
import { IconButton } from '@material-ui/core';
import { ListItemSecondaryAction } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star'
import StarOutlineIcon from '@material-ui/icons/StarOutline'


export default function TodoItem({id,title,completed,important}) {

    const dispatch=useDispatch()
    function toggleCheckBox(){
        // need to dispatch an action which Toggles checkbox

        

        dispatch({
            type:TOGGLE_COMPLETED,
            payload:{
                id,
            }
        })
    }

    function toggleImportant(){
        dispatch({
            type:TOGGLE_IMPORTANT,
            payload:{
                id,
            }
        })
    }


    function handleDeleteClick(){
        dispatch({
            type:DELETE_TODO,
            payload:{
                id,
            }
        })
    }

  return (
      <ListItem dense >
          <FormGroup>
              <FormControlLabel
              control={
                  <Checkbox 
                  checked={completed}
                  onChange={toggleCheckBox}
                  name={title}
                  color='primary'
                  
                  
                  />

              }
              label={<Typography style={{textDecoration:completed && "line-through",
              }}>
                  {title}
              </Typography>}
              >

              </FormControlLabel>
          </FormGroup>

          <ListItemSecondaryAction>
              <IconButton onClick={toggleImportant} edge="end">
                  {important ?<StarIcon/>:<StarOutlineIcon/>}

              </IconButton>
              <IconButton onClick={handleDeleteClick} edge="end">
                  <DeleteIcon/>
              </IconButton>

          </ListItemSecondaryAction>
          
      </ListItem>
  )
}
