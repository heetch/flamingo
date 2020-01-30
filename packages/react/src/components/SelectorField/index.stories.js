import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Heading from '../Heading';

import SelectorField from '.';

const stories = storiesOf('Form controls/SelectorField', module);

stories.add('Playground', () => (
  <>
    <Heading>Selector Field</Heading>

    <Heading level={3}>Not selected</Heading>
    <SelectorField
      id='selector-field'
      label={text('Label (empty to hide)', 'Default label')}
      helper={text('Helper (empty to hide)', 'Default helper')}
      onChange={action('onChange')}
      options={[
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
      ]}
    />

    <Heading level={3}>Selected</Heading>
    <SelectorField
      defaultIndex={1}
      id='selector-field'
      label={text('Label (empty to hide)', 'Default label')}
      helper={text('Helper (empty to hide)', 'Default helper')}
      onChange={action('onChange')}
      options={[
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
      ]}
    />

    <Heading level={3}>Invalid</Heading>
    <SelectorField
      id='selector-field'
      label={text('Label (empty to hide)', 'Default label')}
      helper={text('Helper (empty to hide)', 'Default helper')}
      onChange={action('onChange')}
      isInvalid
      options={[
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
      ]}
    />

    <Heading level={3}>Valid</Heading>
    <SelectorField
      id='selector-field'
      label={text('Label (empty to hide)', 'Default label')}
      helper={text('Helper (empty to hide)', 'Default helper')}
      onChange={action('onChange')}
      isValid
      options={[
        { label: 'Foo', value: 'foo' },
        { label: 'Bar', value: 'bar' },
        { label: 'Baz', value: 'baz' },
      ]}
    />
  </>
));
