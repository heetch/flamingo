import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '.';

const preventDefault = e => e.preventDefault();

storiesOf('Text', module)
  .add('Default', () => (
    <>
      <Text>Default Text</Text>

      <Text as='strong'>Strong Text</Text>

      <em>
        <Text>Emphasized Text</Text>
      </em>

      <small>
        <Text>Small Text</Text>
      </small>

      <a href='http://heetch.com' onClick={preventDefault}>
        Default {'<a/>'} tag
      </a>
    </>
  ))
  .add('Custom html tag', () => <Text as='span'>Span text</Text>)
  .add('Custom color via helper', () => (
    <>
      <Text>Text</Text>
      <Text className='u-colorError'>Error text</Text>
      <Text className='u-colorSuccess'>Success Text</Text>
      <Text className='u-colorWarning'>Warning Text</Text>
    </>
  ));
