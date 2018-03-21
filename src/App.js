import React, {Component} from 'react';

// Import Components Here
import {AppContainer} from './components/AppContainer';


class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <AppContainer/>
            </React.Fragment>
        )
    }
};

export default App;