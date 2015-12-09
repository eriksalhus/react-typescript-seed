/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts"/>

import * as React from 'react';
import { Router } from "react-router";
import * as routes from './routes.tsx';
import * as ReactDOM from 'react-dom';

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
