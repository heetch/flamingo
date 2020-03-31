import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

import { theme } from '../../theme';

const Link = styled('a').attrs(({ className }) => ({
  className: cx('f-Link', className),
}))`
  color: ${theme.color.text.link};
`;

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
