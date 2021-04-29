import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Icon from '../Icon';
import Spinner from '.';
import { Code } from '../../storybook-utils';

const sizes = Object.values(Icon.SIZES);
const stories = storiesOf('Spinner', module);

stories.add('Playground', () => {
  const size = select('Size', sizes, Icon.SIZES.M);
  return (
    <>
      <Heading>Spinner</Heading>
      <Spinner size={size} />
      <Code>{`
      <Spinner size='${size}' />
      `}</Code>
    </>
  );
});
