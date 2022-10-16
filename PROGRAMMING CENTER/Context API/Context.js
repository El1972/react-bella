
import React from 'react';                                                      // 1
import ReactDOM from 'react-dom';
//import './index.css';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import App from './App';
import './App.css'
import {FurnitureProvider} from './utilities/Context';



ReactDOM.render(
<FurnitureProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</FurnitureProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();










import React, { Component } from 'react';       // Context.js                 // 2

const FurnitureContext = React.createContext();

class FurnitureProvider extends Component {

    state = {  }


    render() { 

        return (
        <FurnitureContext.Provider value={"Hello there"}> {/* can be a string, or object */}
            {this.props.children}
        </FurnitureContext.Provider>
        )
    }
}

const FurnitureConsumer = FurnitureContext.Consumer;
 
export {FurnitureProvider, FurnitureConsumer, FurnitureContext}











import React, { Component } from 'react';                 // Centerlistingone.jsx       // 3
import { FurnitureContext } from '../utilities/Context'

class Centerlistingone extends Component {

    static contextType = FurnitureContext  // must be contextType!!! (Required)

    state = {  }


    render() { 
        const value = this.context
        console.log(value);            // if you want to see the value in console
        
        return (
         <div>This is where the magic happens, it prints in value{value}</div>
        )
    }
}
 
export default Furniture











import React from 'react';                      // ParentFilter.jsx                     // 4
import Leftfilterone from './Leftfilterone';
import Centerlistingone from './Centerlistingone';

function ParentFilter() {
    return (
        <div>
            <Leftfilterone />
            <Centerlistingone />
        </div>
    )
}
export default ParentFilter