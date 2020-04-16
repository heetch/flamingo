import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import UiText from '../UiText';

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

const Heading = styled(UiText).attrs(({ as, level, className }) => ({
  as: as || `h${level}`,
  variant: `h${level}`,
  className: cx('f-Heading', className),
}))`
  color: var(--f-color-text--primary);
  margin-top: ${styles.marginTop};
  margin-bottom: var(--f-space--m);
`;

Heading.displayName = 'Heading';

Heading.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.oneOf(HEADING_LEVELS),
};

Heading.defaultProps = {
  level: 1,
};

Heading.LEVELS = HEADING_LEVELS;

export default Heading;
