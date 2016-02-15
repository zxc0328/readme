module.exports = {
  "rules": {
    "semi": [
      2,
      "never"
    ],
    "arrow-body-style": [2, "always"],
  },
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react"
  ]
};
