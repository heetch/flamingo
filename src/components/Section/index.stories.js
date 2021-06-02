import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Section from './index';
import { Code } from '../../storybook-utils';

const defaultProps = () => ({
  id: `section-${Math.random()}`,
  title: text('Title', 'Title'),
  subtitle: text('Subtitle', 'Subtitle'),
  children: text('Children', 'How you doin'),
  expandable: boolean('Expandable', false),
  headerSeparator: boolean('Header Separator', true),
});

const stories = storiesOf('Section', module);

stories.add('All states', () => (
  <>
    <Heading>Section</Heading>

    <Section title={'With a single title and children'}>
      <Code>{`
      <Section title='With a single title and children'>...</Section>
      `}</Code>
    </Section>

    <Section title={'With title'} subtitle={'And subtitle'}>
      <Code>{`
      <Section title='With title' subtitle='And subtitle'>...</Section>
      `}</Code>
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
      <Code>{`
      <Section
        title='With title'
        subtitle='And subtitle'
        headerChildren={
          <span>
            And <i>header</i> <b>children</b>
          </span>
        }
      >
        ...
      </Section>
      `}</Code>
    </Section>

    <Section title={'Expandable'} subtitle={'Expanded by default'} expandable>
      <Code>{`
      <Section
        title='Expandable'
        subtitle={'Expanded by default'}
        expandable
      >
        ...
      </Section>
      `}</Code>
    </Section>

    <Section
      title={'Expandable'}
      subtitle={'Collapsed by default'}
      expandable
      expanded={false}
    >
      <Code>{`
      <Section
        title='Expandable'
        subtitle={'Collapsed by default'}
        expandable
        expanded={false}
      >
        ...
      </Section>
      `}</Code>
    </Section>

    <Heading level={2}>Section extends Card</Heading>

    <Section
      title={"So you can use Card's props"}
      subtitle={'except `size` which does nothing'}
      elevation={2}
    >
      <Code>{`
      <Section
        title={"So you can use Card's props"}
        subtitle='except \`size\` which does nothing'
        elevation={2}
      >
        ...
      </Section>
      `}</Code>
    </Section>
  </>
));

stories.add('Playground', () => <Section {...defaultProps()} />);
