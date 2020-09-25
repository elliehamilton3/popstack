/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Page from './page.component';
import { BrowserRouter as Router } from 'react-router-dom';

export default { title: 'Page', component: Page };
export const Basic = () => <Router><Page /></Router>;