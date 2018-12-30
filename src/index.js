import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/index.css';
import configureStore from './store/configureStore';
import RootContainer from './containers/RootContainer';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <RootContainer />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));