import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SelectorField from '.';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Form/SelectorField', module);

const label = text('Label (empty to hide)', 'Default label');
const helper = text('Helper (empty to hide)', 'Default helper');
const onChange = action('onChange');
const invalid = boolean('isInvalid');
const valid = boolean('isValid');
const options = [
  { label: 'Foo', value: 'foo' },
  { label: 'Bar', value: 'bar' },
  { label: 'Baz', value: 'baz' },
];

stories.add('Playground', () => (
  <>
    <SelectorField
      id='selector-field'
      label={label}
      helper={helper}
      onChange={onChange}
      isInvalid={invalid}
      isValid={valid}
      options={options}
    />
    <Code>{`
    <SelectorField
      id='selector-field'
      label='${label}'
      helper='${helper}'
      onChange={onChange}
      isInvalid={${invalid}}
      isValid={${valid}}
      options={options}
    />
    `}</Code>
  </>
));
