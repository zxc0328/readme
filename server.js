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
       <style>body{margin:0;background-color:#e0e0e0}.item{display:block;font-size:24px;position:relative;padding:20px}.canvas{width:900px;border-radius:4px;margin:0 auto;background-color:#fff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.atom{width:100%;min-height:40px;font-size:20px;position:relative}.item_header{width:100%;padding-bottom:10px;border-bottom:1px solid #00bfa5}.item .value{display:inline-block}.item .delete{float:right;padding:0;background-color:#fdfdfd;border:none;cursor:pointer;visibility:hidden}.item:hover .delete{visibility:visible}.info_item{width:100%}.info_item img{display:block;width:50%;height:auto;margin-left:auto;margin-right:auto;border-radius:50%}.list{height:200px}.atom:hover .atom_edit{display:block}.atom_edit{position:absolute;top:0;right:0;display:none}.atom_svg_bar svg{width:80%;transition:all}.atom_svg_bar svg rect{transition:all 1s}.panel{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);background-color:#fff;position:fixed;top:100px;left:100px;border-radius:4px;padding-top:30px;padding-bottom:30px}.panel_container{width:80%;margin:0 auto}.panel_container_title{padding-bottom:20px}.item_proto{display:block;padding:10px;border-radius:2px;background-color:#00bfa5;color:#fff;margin-left:auto;margin-right:auto;margin-bottom:10px}.info_btn{width:100px;height:30px;text-align:right;position:absolute;right:20px;top:20px}.info_btn--add{margin-right:10px}.info_btn button{padding:0;font-size:20px;outline:none;color:#fff;border:none;display:inline-block;width:30px;height:30px;line-height:30px;vertical-align:top;border-radius:50%;background-color:#8a2be2}.toggleSwticher{position:fixed;right:20px;bottom:200px}.switcher{transition:all .5s;height:200px;border-top:1px solid #00bfa5;background-color:hsla(0,0%,100%,.6);position:fixed;bottom:0;left:0;width:100%;font-size:20px;color:#00bfa5;box-sizing:border-box;padding:20px}.switcher_item{display:inline-block;vertical-align:top;margin-right:20px}.switcher_item img{width:100px;height:auto}.submit_btn{position:fixed;right:20px;bottom:240px}.beforeSubmit{font-size:20px;position:fixed;right:20px;bottom:260px}</style>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
    `
}

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  let state = JSON.parse(req.body.state)
  state.global.editing = false
  console.log(state.global.editing)
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

  // Send the rendered page back to the client
  //wkhtmltopdf(renderFullPage(html), { pageSize: 'letter' })
  // .pipe(res)
wkhtmltopdf(renderFullPage(html), 
  { 
    output: './out.pdf',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight:0,
    disableSmartShrinking:true
  }, 
  function (code, signal) {
  res.send(renderFullPage(html))
});
  //res.setHeader("content-type", "application/pdf");
   // fs.createReadStream("./out.pdf").pipe(res);
  //wkhtmltopdf(, { output: 'out.pdf' });
  
}
app.use('/build', Express.static('build'))

app.post('/online', handleRender)

app.get('/pdf', function (req, res) {
  var tempFile="./out.pdf";
  fs.readFile(tempFile, function (err,data){
     res.contentType("application/pdf");
     res.send(data);
  });
})
app.listen(port)
console.log('Server start at localhost:3333!')