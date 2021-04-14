import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { addDays, subDays, subYears } from 'date-fns';

import fr from 'date-fns/locale/fr';
import DatepickerDay from '.';
import Heading from '../Heading';

const stories = storiesOf('DatepickerDay', module);

const dateKnob = (name, defaultValue) => {
  const date = text(name, defaultValue);
  return new Date(date);
};

const noop = () => {};

stories.add('All states', () => (
  <>
    <Heading>DatepickerDay</Heading>

    <Heading level={2}>With value</Heading>
    <DatepickerDay
      inputProps={{ id: 'default' }}
      onChange={noop}
      value={new Date('2020-08-04')}
      isClearable
    />

    <Heading level={2}>With custom locale</Heading>
    <DatepickerDay
      inputProps={{ id: 'custom-locale' }}
      locale={{ key: 'fr', dateFnsLocale: fr }}
      placeholder='Choisir une date'
      value={new Date('1989-11-04')}
      onChange={noop}
    />
    <Heading level={2}>With disabled days</Heading>
    <DatepickerDay
      onChange={date => new Date(date)}
      maxDate={addDays(new Date(), 5)}
      minDate={subDays(new Date(), 2)}
    />
    <Heading level={2}>With years dropdown</Heading>
    <DatepickerDay
      maxDate={addDays(new Date(), 5)}
      minDate={subYears(new Date(), 2)}
      showYearDropdown
      scrollableYearDropdown
      isClearable
    />
    <Heading level={2}>Validation</Heading>
    <DatepickerDay inputProps={{ id: 'invalid' }} invalid onChange={noop} />
    <DatepickerDay inputProps={{ id: 'valid' }} valid onChange={noop} />

    <Heading level={2}>With a portal overlay</Heading>
    <DatepickerDay withPortal onChange={noop} />
  </>
));

stories.add('Playground', () => (
  <DatepickerDay
    id='datepicker-playground'
    onChange={action('onChange')}
    onFocus={action('onFocus')}
    onBlur={action('onBlur')}
    invalid={boolean('invalid')}
    valid={boolean('valid')}
    locale={select('locale', ['en', 'fr', 'nl', 'pt'])}
    value={dateKnob('value', '2020-11-04')}
    clearButtonLabel={text('clearButtonLabel', 'Remove')}
    placeholder={text('placeholder', 'Select a date')}
    dateFormat={text('dateFormat', 'dd/MM/yyyy')}
    isClearable={boolean('isClearable', true)}
  />
));
