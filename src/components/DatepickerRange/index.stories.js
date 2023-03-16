import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import fr from 'date-fns/locale/fr';
import DatepickerRange from '.';
import Heading from '../Heading';
import { Code } from '../../storybook-utils';

const stories = storiesOf('DatepickerRange', module);

const dateKnob = (name, defaultValue) => {
  const date = text(name, defaultValue);
  return new Date(date);
};

stories.add('All states', () => (
  <>
    <Heading>DatepickerRange</Heading>

    <Heading level={2}>With value</Heading>
    <DatepickerRange
      id='default'
      value={new Date('2020-08-04')}
      isClearable
      startPlaceholder='Start date range'
      endPlaceholder='End date range'
    />
    <Code>{`
    <DatepickerDay id='default' value={new Date('2020-08-04')} isClearable startPlaceholder='Start date range' endPlaceholder='End date range'/>
    `}</Code>

    <Heading level={2}>Pink version</Heading>
    <DatepickerRange
      id='default'
      value={new Date('2020-08-04')}
      isClearable
      startPlaceholder='Start date range'
      endPlaceholder='End date range'
      isPink
    />
    <Code>{`
    <DatepickerDay id='default' value={new Date('2020-08-04')} isClearable startPlaceholder='Start date range' endPlaceholder='End date range' isBlue/>
    `}</Code>

    <Heading level={2}>With custom locale</Heading>
    <DatepickerRange
      id='custom-locale'
      locale={{ key: 'fr', dateFnsLocale: fr }}
      placeholder='Choisir une date'
      startPlaceholder='Debut...'
      endPlaceholder='Fin...'
      value={new Date('1989-11-04')}
    />
    <Code>{`
    import fr from 'date-fns/locale/fr';

    <DatepickerRange
      id='custom-locale'
      locale={{ key: 'fr', dateFnsLocale: fr }}
      placeholder='Choisir une date'
      startPlaceholder='Debut...'
      endPlaceholder='Fin...'
      value={new Date('1989-11-04')}
    />
    `}</Code>

    <Heading level={2}>With margin</Heading>
    <DatepickerRange
      id='default'
      value={new Date('2020-08-04')}
      isClearable
      startPlaceholder='Start date range'
      endPlaceholder='End date range'
      margin='28px 0'
    />
    <Code>{`
    <DatepickerDay id='default' value={new Date('2020-08-04')} isClearable startPlaceholder='Start date range' endPlaceholder='End date range' margin='28px 0'/>
    `}</Code>
  </>
));

stories.add('Playground', () => (
  <DatepickerRange
    id='datepicke-range-playground'
    onChange={action('onChange')}
    onFocus={action('onFocus')}
    invalid={boolean('invalid')}
    valid={boolean('valid')}
    locale={select('locale', ['en', 'fr', 'nl', 'pt'])}
    value={dateKnob('value', '2020-11-04')}
    clearButtonLabel={text('clearButtonLabel', 'Remove')}
    placeholder={text('placeholder', 'Select a date')}
    dateFormat={text('dateFormat', 'dd/MM/yyyy')}
    isClearable={boolean('isClearable', true)}
    startPlaceholder='Start date range'
    endPlaceholder='End date range'
    isPink={false}
  />
));
