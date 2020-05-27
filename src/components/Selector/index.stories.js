import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';

import StoryHeading from '../StoryHeading/StoryHeading';
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
    <StoryHeading>Selector</StoryHeading>
    <StoryHeading level={2}>States</StoryHeading>

    <StoryHeading level={3}>Not selected</StoryHeading>
    <Selector {...defaultProps} id='not-selected' />

    <StoryHeading level={3}>Hover</StoryHeading>
    <Selector {...defaultProps} id='is-hover' className='is-hover' />

    <StoryHeading level={3}>Disabled</StoryHeading>
    <Selector
      {...defaultProps}
      id='disabled-option'
      options={[
        ...defaultProps.options,
        { label: 'Leia', value: 4, disabled: true },
      ]}
    />

    <StoryHeading level={3}>Selected</StoryHeading>
    <Selector {...defaultProps} id='default-index' defaultIndex={1} />

    <StoryHeading level={3}>Selected and disabled</StoryHeading>
    <Selector
      {...defaultProps}
      id='selected-and-disabled'
      defaultIndex={0}
      disabled
    />

    <StoryHeading level={3}>Invalid</StoryHeading>
    <Selector {...defaultProps} id='invalid' defaultIndex={1} isInvalid />

    <StoryHeading level={3}>Valid</StoryHeading>
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
