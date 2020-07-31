/* eslint-disable no-return-assign */

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Heading from '../Heading';
import { Pagination } from './index';

const stories = storiesOf('Pagination', module);

stories.add('All states', () => {
  const [page, setPage] = useState(0);
  return (
    <>
      <Heading>Pagination</Heading>
      <Heading level={2}>Page #{page}</Heading>

      <Pagination
        prevDisabled={page === 0}
        nextDisabled={page === 3}
        goNext={() => setPage(p => p + 1)}
        goPrev={() => setPage(p => p - 1)}
      />
    </>
  );
});
