import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Datepicker from '.';
import Heading from '../Heading';

const stories = storiesOf('Datepicker', module);

const dateKnob = (name, defaultValue) => {
  const date = text(name, defaultValue);
  return new Date(date);
};

stories.add('Playground', () => (
  <>
    <Heading>Datepicker</Heading>
    <Datepicker
      onChange={action('onChange')}
      value={dateKnob('value', '2020-11-04')}
    />

    <Heading>Datepicker invalid</Heading>
    <Datepicker
      invalid={boolean('invalid', true)}
      onChange={action('onChange')}
    />

    <Heading>Datepicker valid</Heading>
    <Datepicker valid={boolean('valid', true)} onChange={action('onChange')} />

    <Heading>Datepicker FR</Heading>
    <Datepicker
      locale='fr-FR'
      placeholder='Choisir une date'
      onChange={action('onChange')}
    />
  </>
));
