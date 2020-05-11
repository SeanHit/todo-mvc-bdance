import React ,{Component} from 'react'
import {Provider} from 'react-redux'
import App from './App'
import store from './redux/store'
export default class Redux extends Component {

    render() {
        return(
           <Provider store={store}>
               <App />
           </Provider>
        )
    }
}