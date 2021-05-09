import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './App.css';

// let requireAll = requireContext => requireContext.keys().map(requireContext);
// let svgs = require.context('./assets/svgs/', false, /\.svg$/);
// requireAll(svgs);

ReactDom.render(<App />, document.getElementById("root"));