import PropTypes from 'prop-types';
import cx from 'classnames';
import styled from 'styled-components';

const Link = styled('a').attrs(({ className }) => ({
  className: cx('f-Link', className),
}))`
  color: var(--f-color-text--link);
`;

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
