import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import UploaderField from '.';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Form/UploaderField', module);

stories.add('Playground', () => {
  const label = text('Label (empty to hide)', 'Default label');
  const helper = text('Helper (empty to hide)', 'Default helper');
  const valid = boolean('Valid', false);
  const invalid = boolean('Invalid', false);
  return (
    <>
      <UploaderField
        id='uploader-field'
        label={label}
        helper={helper}
        onChange={action('onChange')}
        valid={valid}
        invalid={invalid}
      />
      <Code>{`
      <UploaderField
        id='uploader-field'
        label='${label}'
        helper='${helper}'
        onChange={noop}
        valid={${valid}}
        invalid={${invalid}}
      />
      `}</Code>
    </>
  );
});
