/* eslint-disable no-return-assign */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Pagination from './index';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Pagination', module);

stories.add('Playground', () => {
  const [page, setPage] = useState(0);
  const position = select('Position', ['flex-end', 'flex-start', 'center']);

  const nextTr = text('Next translation', 'Suivant');
  const prevTr = text('Previous translation', 'Précédent');
  const disabledTr = text('Disabled translation', 'Désactivé');
  const customTranslations = boolean('Use custom translations', false);

  const translate = customTranslations
    ? ({ id }) => {
        return {
          'flamingo.pagination.next': nextTr,
          'flamingo.pagination.previous': prevTr,
          'flamingo.pagination.disabled': disabledTr,
        }[id];
      }
    : undefined;

  return (
    <>
      <Heading>Pagination</Heading>
      <Heading level={2}>Page #{page}</Heading>

      <Code>{`
      ${
        translate
          ? `
      const translate = ({id}) => {
        return {
          'flamingo.pagination.next': '${nextTr}',
          'flamingo.pagination.previous': '${prevTr}',
          'flamingo.pagination.disabled': '${disabledTr}',
        }[id];
      };
`
          : ''
      }
      <Pagination
        prevDisabled={page === 0}
        nextDisabled={page === 3}
        goNext={() => setPage(p => p + 1)}
        goPrev={() => setPage(p => p - 1)}
        position='${position}' ${
        translate ? '\n        translate={translate}' : ''
      }
      />
      `}</Code>

      <Pagination
        prevDisabled={page === 0}
        nextDisabled={page === 3}
        goNext={() => setPage(p => p + 1)}
        goPrev={() => setPage(p => p - 1)}
        position={position}
        translate={translate}
      />
    </>
  );
});
