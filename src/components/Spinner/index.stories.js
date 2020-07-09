import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import StoryHeading from '../StoryHeading/StoryHeading';
import Icon from '../_DeprecatedIcon';
import Spinner from '.';

const sizes = Object.values(Icon.SIZES);
const stories = storiesOf('Spinner', module);

stories.add('Playground', () => (
  <>
    <StoryHeading>Spinner</StoryHeading>
    <Spinner size={select('Size', sizes, Icon.SIZES.M)} />
  </>
));
