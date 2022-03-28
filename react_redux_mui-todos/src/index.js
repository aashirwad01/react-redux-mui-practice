import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import {store} from './redux/store'
import Todos from './app'
import './style.css'

import { createTheme } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core';

const theme = createTheme({
    palette: {
      primary: {
        //   `linear-gradient(280deg,#2376ae 10%,#c16ecf 50%);`,
        main: '#000000'
      }
    }
  });
  
const ReduxApp=()=>{
    return<Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <Todos/>
        </MuiThemeProvider>
    </Provider>
   

}



ReactDom.render(<ReduxApp/>,document.getElementById('root'))