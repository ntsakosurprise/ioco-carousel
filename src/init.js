
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route } from 'react-router-dom'

// import history from './history'

// function App() {
//   return <h1>Hello React Router</h1>;
// }
export default (App)=>{

    console.log('THe app in init')
    console.log(App)

    ReactDOM.render(

        <Router >

            <Route component={App} />

            {/* <App /> */}

            
        </Router>,
        document.getElementById('root')
    )
}


// import { BrowserRouter } from "react-router-dom";

// function App() {
//   return <h1>Hello React Router</h1>;
// }

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );