import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Selector from '.';

const defaultProps = {
  onChange: () => {},
  options: [
    { label: 'Luke', value: 1 },
    { label: 'Han', value: 2 },
    { label: 'Chewy', value: 3 },
  ],
};
const stories = storiesOf('Form/Selector', module);

stories.add('All states', () => (
  <>
    <Heading>Selector</Heading>
    <Heading level={2}>States</Heading>

    <Heading level={3}>Not selected</Heading>
    <Selector {...defaultProps} id='not-selected' />

    <Heading level={3}>Hover</Heading>
    <Selector {...defaultProps} id='is-hover' className='is-hover' />

    <Heading level={3}>Disabled</Heading>
    <Selector
      {...defaultProps}
      id='disabled-option'
      options={[
        ...defaultProps.options,
        { label: 'Leia', value: 4, disabled: true },
      ]}
    />

    <Heading level={3}>Selected</Heading>
    <Selector {...defaultProps} id='default-index' defaultIndex={1} />

    <Heading level={3}>Selected and disabled</Heading>
    <Selector
      {...defaultProps}
      id='selected-and-disabled'
      defaultIndex={0}
      disabled
    />

    <Heading level={3}>Invalid</Heading>
    <Selector {...defaultProps} id='invalid' defaultIndex={1} isInvalid />

    <Heading level={3}>Valid</Heading>
    <Selector {...defaultProps} id='valid' defaultIndex={2} isValid />
  </>
));

stories.add('Playground', () => (
  <Selector
    {...defaultProps}
    id='playground'
    onChange={action('onChange')}
    options={object('Options', defaultProps.options)}
  />
));
