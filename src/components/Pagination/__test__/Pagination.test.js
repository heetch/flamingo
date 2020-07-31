import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../index';

describe('Pagination', () => {
  it('displays the prev/next buttons', () => {
    const { getByTestId } = render(
      <Pagination goNext={() => {}} goPrev={() => {}} />,
    );

    expect(getByTestId('pagination-prev')).toBeDefined();
    expect(getByTestId('pagination-next')).toBeDefined();
  });

  it("Doesn't render if both are disabled", () => {
    const { queryByTestId } = render(
      <Pagination
        goNext={() => {}}
        goPrev={() => {}}
        nextDisabled
        prevDisabled
      />,
    );

    expect(queryByTestId('pagination-prev')).toBeNull();
    expect(queryByTestId('pagination-next')).toBeNull();
  });

  it('triggers the goNext/goPrev props on click', () => {
    const goNext = jest.fn();
    const goPrev = jest.fn();

    const { getByTestId } = render(
      <Pagination goNext={goNext} goPrev={goPrev} />,
    );

    userEvent.click(getByTestId('pagination-prev'));
    expect(goPrev).toHaveBeenCalled();

    userEvent.click(getByTestId('pagination-next'));
    expect(goNext).toHaveBeenCalled();
  });

  it('The next arrow shows as disabled correctly', () => {
    const { queryByTestId } = render(
      <Pagination goNext={() => {}} goPrev={() => {}} nextDisabled />,
    );

    expect(
      queryByTestId('pagination-next').hasAttribute('disabled'),
    ).toBeTruthy();
  });

  it('The prev arrow shows as disabled correctly', () => {
    const { queryByTestId } = render(
      <Pagination goNext={() => {}} goPrev={() => {}} prevDisabled />,
    );

    expect(
      queryByTestId('pagination-prev').hasAttribute('disabled'),
    ).toBeTruthy();
  });
});
