import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Selector from '.';

const defaultProps = () => ({
  id: `selector-${Math.random()}`,
  onChange: action('onChange'),
});

const stories = storiesOf('Form controls/Selector', module);

stories.add('All states', () => (
  <>
    <Heading>Selector</Heading>
    <Heading level={2}>States</Heading>

    <Heading level={3}>Not selected</Heading>
    <Selector
      {...defaultProps()}
      options={object('Not Selected options', [
        { label: 'Luke', value: 1 },
        { label: 'Han', value: 2 },
        { label: 'Chewy', value: 3 },
        { label: 'Leia', value: 4 },
      ])}
    />

    <Heading level={3}>Hover</Heading>
    <Selector
      {...defaultProps()}
      className='is-hover'
      options={object('Hover', [
        { label: 'Luke', value: 1 },
        { label: 'Han', value: 2 },
      ])}
    />

    <Heading level={3}>Disabled</Heading>
    <Selector
      {...defaultProps()}
      options={object('Disabled options', [
        { label: 'Luke', value: 1, disabled: true },
        { label: 'Darth', value: 4 },
        { label: 'Chewy', value: 3 },
      ])}
    />

    <Heading level={3}>Selected</Heading>
    <Selector
      {...defaultProps()}
      options={object('Selected options', [
        { label: 'Luke', value: 1 },
        { label: 'Han', value: 2 },
      ])}
    />

    <Heading level={3}>Selected and disabled</Heading>
    <Selector
      {...defaultProps()}
      defaultIndex={0}
      disabled
      options={object('Selected and disabled options', [
        { label: 'Luke', value: 1 },
        { label: 'Han', value: 2 },
        { label: 'Chewy', value: 3 },
      ])}
    />
  </>
));

stories.add('Playground', () => <Selector {...defaultProps()} />);
