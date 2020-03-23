import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Helper from './index';
import Heading from '../Heading';

const stories = storiesOf('Form/Helper', module);

stories.add('Playground', () => (
  <>
    <Heading>Helper</Heading>
    <Helper>{text('Content', 'Input helper')}</Helper>
  </>
));
