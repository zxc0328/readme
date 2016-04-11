import "babel-register"
import "babel-polyfill"
import fs from 'fs'
import path from 'path'
import Express from 'express'
import React from 'react'
import wkhtmltopdf from 'wkhtmltopdf'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './app/reducers'
import Readme from './app/containers/Readme.jsx'
import bodyParser from 'body-parser'
import uuid from 'node-uuid'
const app = Express()
const port = 3333

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Readme server rendering</title>
        <link rel="stylesheet" href="http://localhost:3333/styles.css" />
        <style>
        .canvas_container{
          padding:0;
          overflow:visible;
        }
        body{
          background:none;
        }

        </style>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
    `
}


function getPdfHandler(req, res) {
  let state = JSON.parse(req.body.state)
  state.global.editing = false

  // Create a new Redux store instance
  const store = createStore(rootReducer, state)
  
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
    	<div className="readme">
      	<Readme />
    	</div>
  	</Provider>
  )

  const fileName =  uuid.v4() + '.pdf'

  wkhtmltopdf(renderFullPage(html), 
  { 
    output: './pdf/' + fileName,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight:0,
    disableSmartShrinking:true
  }, 
  function (code, signal) {
    res.send(JSON.stringify({fileName}))
  })
}


function getHtmlHandler(req, res) {

  let state = JSON.parse(req.body.state)
  state.global.editing = false

  // Create a new Redux store instance
  const store = createStore(rootReducer, state)
  
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <div className="readme">
        <Readme />
      </div>
    </Provider>
  )

  res.send(renderFullPage(html))
}

app.use('/', Express.static('build'))

app.post('/getpdf', getPdfHandler)

app.post('/gethtml', getHtmlHandler)

app.get('/pdf/:fileName', function (req, res) {
  const fileName = req.params.fileName
  const url = './pdf/' + fileName
  fs.readFile(url, function (err,data){
     res.contentType("application/pdf")
     res.send(data);
  });
})

app.get('/',function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.listen(port)
console.log('Server start at localhost:3333!')