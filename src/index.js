import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App'
import 'tachyons'
import {searchRobots,requestRobots} from './Reducers'

const rootReducer=combineReducers({searchRobots,requestRobots})
const logger = createLogger()
const middleWares = [logger,ReduxThunk]
const store = createStore(rootReducer,applyMiddleware(...middleWares))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
