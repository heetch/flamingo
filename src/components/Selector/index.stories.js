import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, object } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Selector from '.';
import { Code } from '../../storybook-utils';

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
    <Code>{`
    <Selector 
      onChange={noop} 
      options={[
        { label: 'Luke', value: 1 },
        { label: 'Han', value: 2 },
        { label: 'Chewy', value: 3 },
      ]}
    />
    `}</Code>

    <Heading level={3}>Disabled</Heading>
    <Selector
      {...defaultProps}
      id='disabled-option'
      options={[
        ...defaultProps.options,
        { label: 'Leia', value: 4, disabled: true },
      ]}
    />
    <Code>{`
    <Selector 
      onChange={noop} 
      options={[
        { label: 'Luke', value: 1 },
        { label: 'Han', value: 2 },
        { label: 'Chewy', value: 3 },
        { label: 'Leia', value: 4, disabled: true },
      ]}
    />
    `}</Code>

    <Heading level={3}>Selected</Heading>
    <Selector {...defaultProps} id='default-index' defaultIndex={1} />
    <Code>{`
    <Selector {...otherProps} defaultIndex={1} />    
    `}</Code>

    <Heading level={3}>Selected and disabled</Heading>
    <Selector
      {...defaultProps}
      id='selected-and-disabled'
      defaultIndex={0}
      disabled
    />
    <Code>{`
    <Selector {...otherProps} defaultIndex={0} disabled />    
    `}</Code>

    <Heading level={3}>Invalid</Heading>
    <Selector {...defaultProps} id='invalid' defaultIndex={1} isInvalid />
    <Code>{`
    <Selector {...otherProps} defaultIndex={1} isInvalid />    
    `}</Code>

    <Heading level={3}>Valid</Heading>
    <Selector {...defaultProps} id='valid' defaultIndex={2} isValid />
    <Code>{`
    <Selector {...otherProps} defaultIndex={2} isValid />
    `}</Code>
  </>
));

stories.add('Playground', () => (
  <Selector
    id='playground'
    onChange={action('onChange')}
    options={object('Options', defaultProps.options)}
    disabled={boolean('Disabled', false)}
    isInvalid={boolean('Is Invalid', false)}
    isValid={boolean('Is Valid', false)}
  />
));
