import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Datepicker from '.';
import StoryHeading from '../StoryHeading/StoryHeading';

const stories = storiesOf('Datepicker', module);

const dateKnob = (name, defaultValue) => {
  const date = text(name, defaultValue);
  return new Date(date);
};

const noop = () => {};

stories.add('All states', () => (
  <>
    <StoryHeading>Datepicker</StoryHeading>

    <StoryHeading level={2}>With value</StoryHeading>
    <Datepicker onChange={noop} value={new Date('2020-11-04')} />

    <StoryHeading level={2}>With custom locale</StoryHeading>
    <Datepicker locale='fr-FR' placeholder='Choisir une date' onChange={noop} />

    <StoryHeading level={2}>Validation</StoryHeading>
    <Datepicker invalid onChange={noop} />
    <Datepicker valid onChange={noop} />
  </>
));

stories.add('Playground', () => (
  <Datepicker
    onChange={action('onChange')}
    invalid={boolean('invalid')}
    valid={boolean('valid')}
    locale={select('locale', ['en-US', 'fr-FR'])}
    value={dateKnob('value', '2020-11-04')}
  />
));
