import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { addDays, subDays, subYears } from 'date-fns';

import fr from 'date-fns/locale/fr';
import DatepickerDay from '.';
import Heading from '../Heading';
import { Code } from '../../storybook-utils';

const stories = storiesOf('DatepickerDay', module);

const dateKnob = (name, defaultValue) => {
  const date = text(name, defaultValue);
  return new Date(date);
};

stories.add('All states', () => (
  <>
    <Heading>DatepickerDay</Heading>

    <Heading level={2}>With value</Heading>
    <DatepickerDay id='default' value={new Date('2020-08-04')} isClearable />
    <Code>{`
    <DatepickerDay id='default' value={new Date('2020-08-04')} isClearable />
    `}</Code>

    <Heading level={2}>With custom locale</Heading>
    <DatepickerDay
      id='custom-locale'
      locale={{ key: 'fr', dateFnsLocale: fr }}
      placeholder='Choisir une date'
      value={new Date('1989-11-04')}
    />
    <Code>{`
    import fr from 'date-fns/locale/fr';

    <DatepickerDay
      id='custom-locale'
      locale={{ key: 'fr', dateFnsLocale: fr }}
      placeholder='Choisir une date'
      value={new Date('1989-11-04')}
    />
    `}</Code>
    <Heading level={2}>With colored icon on the left</Heading>
    <DatepickerDay
      iconLeft
      iconColor={'red'}
      id='icon-left'
      locale={{ key: 'fr', dateFnsLocale: fr }}
      placeholder='Choisir une date'
      value={new Date('1989-11-04')}
    />
    <Code>{`
    <DatepickerDay
      iconLeft
      iconColor={'red'}
      id='icon-left'
      locale={{ key: 'fr', dateFnsLocale: fr }}
      placeholder='Choisir une date'
      value={new Date('1989-11-04')}
    />
    `}</Code>
    <Heading level={2}>With disabled days</Heading>
    <DatepickerDay
      id='disabled-days'
      maxDate={addDays(new Date(), 5)}
      minDate={subDays(new Date(), 2)}
    />
    <Code>{`
    <DatepickerDay
      id='disabled-days'
      maxDate={addDays(new Date(), 5)}
      minDate={subDays(new Date(), 2)}
    />
    `}</Code>

    <Heading level={2}>With years dropdown</Heading>
    <DatepickerDay
      id='years-dropdown'
      maxDate={addDays(new Date(), 5)}
      minDate={subYears(new Date(), 2)}
      showYearDropdown
      scrollableYearDropdown
      isClearable
    />
    <Code>{`
    <DatepickerDay
      id='years-dropdown'
      maxDate={addDays(new Date(), 5)}
      minDate={subYears(new Date(), 2)}
      showYearDropdown
      scrollableYearDropdown
      isClearable
    />
    `}</Code>

    <Heading level={2}>Validation</Heading>
    <DatepickerDay id='invalid' invalid />
    <DatepickerDay id='valid' valid />
    <Code>{`
    <DatepickerDay id='invalid' invalid />
    <DatepickerDay id='valid' valid />
    `}</Code>

    <Heading level={2}>With a portal overlay</Heading>
    <DatepickerDay id='portal' withPortal />
    <Code>{`
    <DatepickerDay id='portal' withPortal />
    `}</Code>

    <Heading level={2}>Events</Heading>
    <Code>{`
    <DatepickerDay id='events' onChange={noop} onFocus={noop} onBlur={noop} />
    `}</Code>
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
