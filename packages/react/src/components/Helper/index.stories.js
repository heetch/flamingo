import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import { Helper } from '..';

const stories = storiesOf('Form controls/Helper', module);

stories.addDecorator(withKnobs);

stories.add('Playground', () => (
  <Helper>{text('Content', 'Input helper')}</Helper>
));
