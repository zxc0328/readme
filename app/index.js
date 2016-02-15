import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import readme from './reducers/readme.js'
import Foo from './components/foo.js'
import configureStore from './store/configureStore.js'

let store = configureStore()

const render = () => { ReactDOM.render(
	<Foo
  value={store.getState()}
  onIncrement={ () => {
			store.dispatch({
			  type: 'INCREMENT',
			})
			console.log("store.getState()")
		}}
	onDecrement={ () => {
			store.dispatch({
			  type: 'DECREMENT',
			})
		}}
	/>, document.getElementById('readme')
)}

store.subscribe(render)
render()

