"use strict";

require("babel-register");

require("babel-polyfill");

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _server = require("react-dom/server");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reducers = require("../app/reducers");

var _reducers2 = _interopRequireDefault(_reducers);

var _Readme = require("../app/containers/Readme.jsx");

var _Readme2 = _interopRequireDefault(_Readme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  // Create a new Redux store instance
  var store = (0, _redux.createStore)(_reducers2.default);

  // Render the component to a string
  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      "div",
      { className: "readme" },
      _react2.default.createElement(_Readme2.default, null)
    )
  ));

  // Grab the initial state from our Redux store
  var initialState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, initialState));
}

function renderFullPage(html) {
  return "\n    <!doctype html>\n    <html>\n      <head>\n        <title>Readme server rendering</title>\n        <link rel=\"stylesheet\" href=\"http://localhost:8080/build/styles.4fdf3b34200b714d144a.css\">\n      </head>\n      <body>\n        <div id=\"root\">" + html + "</div>\n      </body>\n    </html>\n    ";
}

app.listen(port);
console.log('Server start at localhost:3000!');