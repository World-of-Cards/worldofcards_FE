import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";
import './style/global.scss';

const App = () => {
  return <span>Hello, World!</span>;
};

ReactDOM.render(<App />, document.getElementById('root'));