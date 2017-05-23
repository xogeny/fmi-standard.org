import React = require('react');
import { storiesOf } from '@kadira/storybook';
import { App } from '../src/app';

storiesOf("Table", module)
    .add("Table Application", () => (
        <App url="./table.json" />
    ))