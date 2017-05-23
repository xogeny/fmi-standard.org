import React = require('react');
import axios from 'axios';
import { Table } from './table';

export interface AppProps {
    url: string;
}

export interface AppState {
    table: Table | null;
    error: string | null;
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props?: AppProps, context?: any) {
        super(props, context);
        this.state = {
            table: null,
            error: null,
        }
        this.updateResults();
    }
    updateResults() {
        let ax = axios.create();
        ax.get(this.props.url).then((body) => {
            console.log("data = ", body.data);
            this.setState({ ...this.state, error: null, table: body.data });
            return body.data;
        }).catch((e) => {
            this.setState({ ...this.state, error: e.toString(), table: null })
        })
    }
    render() {
        if (this.state.table == null) return <span>Loading...</span>;
        return <span>Hello{JSON.stringify(this.state.table)}</span>;
    }
}