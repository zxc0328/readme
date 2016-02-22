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

function renderFullPage(html) {
  return "\n    <!doctype html>\n    <html>\n      <head>\n        <title>Readme server rendering</title>\n        <link rel=\"stylesheet\" href=\"/build/styles.4fdf3b34200b714d144a.css\">\n      </head>\n      <body>\n        <div id=\"root\">" + html + "</div>\n      </body>\n    </html>\n    ";
}

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
  // Create a new Redux store instance
  var store = (0, _redux.createStore)(_reducers2.default, { "global": { "editing": false, "themeSwitcherVisibility": false }, "blocks": [{ "id": 0, "items": ["204d2cfc-832d-4b43-8016-e4562058eb0e"], "style": { "width": "30%", "backgroundColor": "#00bfa5", "display": "inline-block", "minHeight": "1000px", "verticalAlign": "top" } }, { "id": 1, "items": ["148abf5a-ec48-4655-a098-41d0750b91dc"], "style": { "width": "70%", "padding": "20px", "boxSizing": "border-box", "display": "inline-block", "minHeight": "1000px", "verticalAlign": "top" } }], "items": [{ "id": "148abf5a-ec48-4655-a098-41d0750b91dc", "type": 0, "title": "rer", "atoms": ["b817fa8d-78e0-4010-a770-3500aa7c31c9"], "editing": false }, { "id": "204d2cfc-832d-4b43-8016-e4562058eb0e", "type": 1, "title": "Click to edit title", "atoms": ["d6d7650b-1e5d-49bf-9c7f-0b51911b4247", "6251bbfc-cf1b-40d5-bac8-a4ed5d7c28c3"], "editing": false }], "atoms": [{ "id": "b817fa8d-78e0-4010-a770-3500aa7c31c9", "type": 0, "editing": false, "typeName": "listItemWithTitle", "title": "rer", "description": "rer" }, { "id": "d6d7650b-1e5d-49bf-9c7f-0b51911b4247", "type": 1, "editing": false, "typeName": "imgItem", "src": "", "description": "" }, { "id": "6251bbfc-cf1b-40d5-bac8-a4ed5d7c28c3", "type": 0, "editing": false, "typeName": "listItemWithTitle", "title": "erer", "description": "rer" }] });

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

  // Send the rendered page back to the client
  res.send(renderFullPage(html));
}
app.use(_express2.default.static('../build'));

app.get('/', handleRender);

app.listen(port);
console.log('Server start at localhost:3000!');