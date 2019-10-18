import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Icon from '../Icon';
import Spinner from '.';

const sizes = Object.values(Icon.SIZES);
const stories = storiesOf('Spinner', module);

stories.add('Playground', () => (
  <Spinner size={select('Size', sizes, Icon.SIZES.M)} />
));
