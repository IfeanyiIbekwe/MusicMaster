import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faSearch)







ReactDOM.render(

    <App/>, document.getElementById('root')
);