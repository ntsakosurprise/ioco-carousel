
import React, {Component} from 'react'
import {Switch,withRouter} from 'react-router-dom'
import Public from '../Public/component'
import routes from '../Essentials/routes'



class Router extends Component{

    render(){

        return(
            
            <Switch>

                {

                    routes.map((r,i)=>{

                        return <Public />
                    })
                }
            </Switch>
        )
    }
}

export default withRouter(Router)