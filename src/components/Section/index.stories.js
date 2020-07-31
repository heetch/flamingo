import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Heading from '../Heading';
import { Section } from './index';

const defaultProps = () => ({
  id: `section-${Math.random()}`,
  title: text('Title', 'Title'),
  subtitle: text('Subtitle', 'Subtitle'),
  children: text('Children', 'How you doin'),
});

const stories = storiesOf('Section', module);

stories.add('All states', () => (
  <>
    <Heading>Section</Heading>

    <Section title={'With a single title and children'}>
      <div>Hello</div>
      <div>There</div>
    </Section>

    <Section title={'With title'} subtitle={'And subtitle'}>
      <div>General</div>
      <div>Kenobi</div>
    </Section>

    <Section
      title={'With title'}
      subtitle={'And subtitle'}
      headerChildren={
        <span>
          And <i>header</i> <b>children</b>
        </span>
      }
    >
      Party parrot!
    </Section>
  </>
));

stories.add('Playground', () => <Section {...defaultProps()} />);
