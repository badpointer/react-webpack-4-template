import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Hello: 'Hello from within App Container!'
    };
  };

  render() {
    return (
      <h1>
        {this.state.Hello}
        <br />
        {this.props.helloDefaultProp}
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </h1>
    );
  };
};

AppContainer.defaultProps = {
  helloDefaultProp: 'Hello being a Default Prop'
};

AppContainer.propTypes = {
  helloDefaultProp: PropTypes.string.isRequired
};

export default AppContainer;
