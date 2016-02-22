import "babel-register"
import "babel-polyfill"
import path from 'path'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../app/reducers';
import Readme from '../app/containers/Readme.jsx';

const app = Express()
const port = 3000

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(rootReducer)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
    	<div className="readme">
      	<Readme />
    	</div>
  	</Provider>
  )

  // Grab the initial state from our Redux store
  const initialState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, initialState))
}

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Readme server rendering</title>
        <link rel="stylesheet" href="http://localhost:8080/build/styles.4fdf3b34200b714d144a.css">
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
    `
}

app.listen(port)
console.log('Server start at localhost:3000!')