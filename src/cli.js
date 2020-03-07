#!/usr/bin/env node

const importJsx = require("import-jsx")
const { render } = require("ink")
const React = require("react")

const ui = importJsx("./ui")

render(React.createElement(ui))
