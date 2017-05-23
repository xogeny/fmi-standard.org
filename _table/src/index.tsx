import React = require('react');
import ReactDOM = require('react-dom');

import { App } from './app';

export function run(url: string) {
    ReactDOM.render(<App url={url} />, document.getElementById("tool-table"));
}
