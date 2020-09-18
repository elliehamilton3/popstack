import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import HelpButton from './help.component';

const stories = storiesOf('HelpButton', module).addParameters({
  component: HelpButton,
});

stories.add('Default', () => (
  <BrowserRouter>
    <HelpButton />
  </BrowserRouter>
));
