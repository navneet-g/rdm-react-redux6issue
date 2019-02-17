import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import {connect, Provider} from "react-redux";


const rootReducer = combineReducers({counter})
const store = createStore(rootReducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>,
  rootEl
)

const mapStateToProps = (state) => {
  debugger;
  return {
    value: state.counter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement:() => dispatch({ type: 'INCREMENT' }),
    onDecrement:() => dispatch({ type: 'DECREMENT' })
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

render()
