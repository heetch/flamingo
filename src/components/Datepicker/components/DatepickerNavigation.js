import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../_DeprecatedIcon';
import IconButton from '../../IconButton';
import { StyledDatepickerNavigation } from '../styles';

const DatepickerNavigation = React.forwardRef(
  ({ month, onPreviousClick, onNextClick, locale }, ref) => {
    return (
      <StyledDatepickerNavigation ref={ref} className='f-Datepicker--navbar'>
        {month.toLocaleString(locale, { month: 'long' })} {month.getFullYear()}
        <div>
          <IconButton
            onClick={() => onPreviousClick()}
            icon={Icon.ICONS.IconChevronLeft}
          />
          <IconButton
            onClick={() => onNextClick()}
            icon={Icon.ICONS.IconChevronRight}
          />
        </div>
      </StyledDatepickerNavigation>
    );
  },
);

DatepickerNavigation.displayName = 'DatepickerNavigation';

DatepickerNavigation.propTypes = {
  month: PropTypes.instanceOf(Date),
  onPreviousClick: PropTypes.func,
  onNextClick: PropTypes.func,
  locale: PropTypes.string,
};

DatepickerNavigation.defaultProps = {
  month: new Date(),
  locale: 'en-DB',
  onPreviousClick: () => {},
  onNextClick: () => {},
};

export default DatepickerNavigation;
