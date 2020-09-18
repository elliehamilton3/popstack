import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Page } from './page.component';

const stories = storiesOf('Question Page', module).addParameters({
  component: Page,
  decorators: [withKnobs],
});

stories.add('Default', () => {
  const content = text('Content', 'Page Content/Sub-components');

  return (
    <BrowserRouter>
      <Page>
        <div
          style={{
            whiteSpace: 'pre-line',
          }}
        >
          {content}
        </div>
      </Page>
    </BrowserRouter>
  );
});
