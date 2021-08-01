
import React from 'react'
import ReactDOM from 'react-dom'
import { Router,Route } from 'react-router-dom'

import history from './history'


export default (App)=>{

    ReactDOM.render(

        <Router history={history} >

            <Route component={App} />

            
        </Router>,
        document.getElementById('root')
    )
}