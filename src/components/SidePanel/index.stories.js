import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Code } from '../../storybook-utils';

import SidePanel from '.';
import Button from '../Button';
import Heading from '../Heading';
import Input from '../Input';
import Label from '../Label';

const stories = storiesOf('SidePanel', module);

stories.add('Playground', () => {
  const isOpen = boolean('Is Open?', true);
  const closesOnOverlayClick = boolean('closesOnOverlayClick?', true);
  const withLargeContent = boolean('With large content?', false);
  const withFooter = boolean('With footer?', true);
  const withHeader = boolean('With header?', false);
  const withTitle = !withHeader && text('Title', 'Side Panel Title');
  const withSubtitle = !withHeader && text('SubTitle', 'Subtitle');

  const content = (
    <>
      <Label htmlFor='input'>Name</Label>
      <Input id='input' placeholder="I'm an input..." onChange={() => {}} />
    </>
  );

  return (
    <>
      <Heading>SidePanel</Heading>

      <SidePanel
        closesOnOverlayClick={closesOnOverlayClick}
        title={withTitle}
        subtitle={withSubtitle}
        animateOnMount
        header={
          withHeader && (
            <>
              <Button
                intent={Button.INTENTS.SECONDARY}
                variant={Button.VARIANTS.MINIMAL}
              >
                Select all
              </Button>
              <Button>Never gonna let you down</Button>
            </>
          )
        }
        footer={
          withFooter && (
            <>
              <Button
                intent={Button.INTENTS.SECONDARY}
                variant={Button.VARIANTS.MINIMAL}
              >
                Abort
              </Button>
              <Button>Ok, go!</Button>
            </>
          )
        }
        isOpen={isOpen}
      >
        {[...new Array(withLargeContent ? 30 : 1)].map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>{content}</div>
        ))}
      </SidePanel>

      <Code>{`
      <SidePanel
        isOpen={${isOpen}}
        closesOnOverlayClick={${closesOnOverlayClick}}
        animateOnMount${withTitle ? `\n        title='${withTitle}'` : ''}${
        withSubtitle ? `\n        subtitle='${withSubtitle}'` : ''
      }${withHeader ? `\n        header={HeaderComponent}` : ''}${
        withFooter ? `\n        footer={FooterComponent}` : ''
      }
      >
        ...
      </SidePanel>
      `}</Code>
    </>
  );
});
