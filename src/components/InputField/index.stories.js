import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import InputField from './index';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Form/InputField', module);

stories.add('Playground', () => {
  const label = text('Label (empty to hide)', 'Default label');
  const helper = text('Helper (empty to hide)', 'Default helper');
  const invalid = boolean('Is Invalid?', false);
  const valid = boolean('Is Valid?', false);

  return (
    <>
      <InputField
        id='input-field'
        label={label}
        helper={helper}
        invalid={invalid}
        valid={valid}
        onChange={action('onChange')}
      />

      <Code>{`
  <InputField
    id='input-field'
    label='${label}'
    helper='${helper}' ${invalid ? '\n    invalid' : ''} ${
        valid ? '\n    valid' : ''
      }
    onChange={action('onChange')}
  />
  `}</Code>
    </>
  );
});
