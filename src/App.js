import React, {Component} from 'react';

// Import Components Here
import {AppContainer} from './components/AppContainer';

// Material UI kicks off elegant,consistent, and simple baselineto build upon
import CssBaseline from 'material-ui/CssBaseline';


class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <CssBaseline/>
                <AppContainer/>
            </React.Fragment>
        );
    }
}

export default App;