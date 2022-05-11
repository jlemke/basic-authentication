import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import Router from './Router';
import 'antd/dist/antd.css';

import { Amplify } from 'aws-amplify';
import config from './aws-exports';


Amplify.configure(config);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Router />);

// Above, but in single line because I was curious
//createRoot(document.getElementById('root')).render(<Router />);

// Deprectated code from textbook :
// import ReactDOM from 'react-dom';
// ReactDOM.render(<Router />, document.getElementById('root'));