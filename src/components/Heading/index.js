import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

const HEADING_LEVELS = [1, 2, 3, 4, 5, 6];

const styles = {
  marginTop({ level }) {
    if (level === 1) {
      return `var(--f-space--xl)`;
    }
    if (level === 2) {
      return `var(--f-space--l)`;
    }

    return 'var(--f-space--m)';
  },
};
const StyledHeading = styled(({ level, as, className, ...props }) => (
  <div className={cx('f-Heading', className)} {...props} />
))`
  color: var(--f-color-text--primary);
  margin-top: ${styles.marginTop};
  margin-bottom: var(--f-space--m);
`;

const Heading = ({ as, level, ...props }) => (
  <StyledHeading as={as || `h${level}`} {...props} />
);

Heading.displayName = 'Heading';

Heading.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.oneOf(HEADING_LEVELS),
};

Heading.defaultProps = {
  as: undefined,
  className: undefined,
  level: 1,
};

Heading.LEVELS = HEADING_LEVELS;

export default Heading;
