import React = require('react');
import axios from 'axios';

export interface Results {

}

export interface AppProps {
    url: string;
}

export interface AppState {
    results: Results | null;
    error: string | null;
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props?: AppProps, context?: any) {
        super(props, context);
        this.state = {
            results: null,
            error: null,
        }
        this.updateResults();
    }
    updateResults() {
        let ax = axios.create();
        ax.get(this.props.url).then((body) => {
            console.log("data = ", body.data);
            this.setState({ ...this.state, error: null, results: body.data });
            return body.data;
        }).catch((e) => {
            this.setState({ ...this.state, error: e.toString(), results: null })
        })
    }
    render() {
        if (this.state.results == null) return <span>Loading...</span>;
        return <span>Hello{JSON.stringify(this.state.results)}</span>;
    }
}