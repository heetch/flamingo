import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';
import Heading from './Heading';
import Helper from './Helper';
import Input from './Input';
import Label from './Label';
import Radio from './Radio';
import Select from './Select';
import Textarea from './Textarea';
import Toggle from './Toggle';
import Selector from './Selector';

const formProps = {
  onSubmit: e => e.preventDefault(),
};

const Wrapper = props => (
  <div style={{ paddingBottom: 'var(--f-space--m)' }} {...props} />
);

const stories = storiesOf('Form', module);

stories.add('Playground', () => {
  const disabled = boolean('Disable all the things', false);
  const withLabel = boolean('Display labels', true);
  const withHelper = boolean('Display helpers', false);

  return (
    <>
      <Heading>Form</Heading>
      <form {...formProps}>
        <Wrapper>
          {withLabel && <Label htmlFor='first-name-id'>First name</Label>}
          <Input
            id='first-name-id'
            disabled={disabled}
            placeholder='First name'
            onChange={action('onChange')}
          />
          {withHelper ? <Helper>First name helper</Helper> : null}
        </Wrapper>

        <Wrapper>
          {withLabel && <Label htmlFor='last-name-id'>Last name</Label>}
          <Input
            id='last-name-id'
            disabled={disabled}
            placeholder='Last name'
            onChange={action('onChange')}
          />
          {withHelper ? <Helper>Last name helper</Helper> : null}
        </Wrapper>

        <Wrapper>
          {withLabel && <Label htmlFor='city-id'>City</Label>}
          <Select
            id='city-id'
            disabled={disabled}
            options={[
              { label: '-', value: '' },
              { label: 'Paris', value: 'paris' },
              { label: 'Brussels', value: 'bxl' },
              { label: 'Budapest', value: 'bdp' },
            ]}
            onChange={action('onChange')}
          />
          {withHelper ? <Helper>City helper</Helper> : null}
        </Wrapper>

        <Wrapper>
          <Checkbox
            id='checkbox-id'
            disabled={disabled}
            onChange={action('onChange')}
            helper={withHelper ? 'Checkbox helper' : null}
          >
            {withLabel && 'Are you human?'}
          </Checkbox>
        </Wrapper>

        <Wrapper>
          {withLabel && (
            <Label htmlFor='textarea-id'>What was your last dream about?</Label>
          )}
          <Textarea
            id='textarea-id'
            disabled={disabled}
            placeholder='Last name'
            onChange={action('onChange')}
          />
          {withHelper ? <Helper>Textarea helper</Helper> : null}
        </Wrapper>

        <Wrapper>
          <Toggle
            id='toggle-id'
            disabled={disabled}
            onChange={action('onChange')}
            helper={withHelper ? 'Toggle helper' : null}
          >
            {withLabel && "I'm just a toggle dude "}
          </Toggle>
        </Wrapper>

        <Wrapper>
          {[
            'Radio ga ga',
            'Radio goo goo',
            'Radio blah blah',
            'Radio, someone still loves you',
          ].map((label, i) => (
            <Radio
              key={label}
              id={`radio-${i}`}
              disabled={disabled}
              name='radio-name'
              onChange={action('onChange')}
              helper={withHelper ? 'Checkbox helper' : null}
            >
              {withLabel && label}
            </Radio>
          ))}
        </Wrapper>

        <Wrapper>
          {withLabel && <Label htmlFor='first-name-id'>A Selector</Label>}
          <Selector
            id='selector'
            disabled={disabled}
            onChange={action('onChange')}
            options={[
              { label: 'Luke', value: 1 },
              { label: 'Han', value: 2 },
              { label: 'Chewy', value: 3 },
              { label: 'Leia', value: 4 },
            ]}
          />
        </Wrapper>
      </form>
    </>
  );
});
