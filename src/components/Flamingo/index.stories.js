import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Flamingo from './';

storiesOf('Flamingo', module)
  .add('It works!', () => (
    <Flamingo />
  ))
