import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Text from '../Text';

const UploaderItemStyled = styled('div').attrs(() => ({
  className: 'f-UploaderItem',
}))`
  // Using css var with a js one for backwards compatibility
  --iconContainerSize: ${({ iconContainerSize }) =>
    iconContainerSize || '2.625rem'}; /* 42px */

  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  padding: var(--f-space--s);
  color: var(--f-color-text--secondary);
  background-color: var(--f-color-element--primary);
  border-radius: var(--f-borderRadius--l);

  & + & {
    margin-top: var(--f-space--s);
  }

  .f-UploaderItem-name {
    flex-grow: 1;
  }

  & .f-Button--icon {
    margin: 0;
  }
`;

const IconContainer = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: var(--iconContainerSize);
  height: var(--iconContainerSize);
  margin-right: var(--f-space--m);
  border: 1px solid var(--f-color-element--secondary);
  border-radius: 0.75rem; /* 12px */
  background-color: var(--color-white);
  overflow: hidden;

  img {
    display: block;
    object-fit: cover;
    width: var(--iconContainerSize);
    height: var(--iconContainerSize);
  }
`;

const UploaderItem = ({ className, file, handleDelete, overrides }) => (
  <UploaderItemStyled className={className}>
    <IconContainer className='f-UploaderItem-iconContainer'>
      {overrides.icon || <Icon icon={Icon.ICONS.IconFileText} />}
    </IconContainer>

    <Text className='f-UploaderItem-name' margin={0}>
      {file.name}
    </Text>

    <IconButton
      intent={Button.INTENTS.SECONDARY}
      variant={Button.VARIANTS.MINIMAL}
      onClick={() => handleDelete(file)}
      icon={Icon.ICONS.IconTrash}
    />
  </UploaderItemStyled>
);

UploaderItem.displayName = 'UploaderItem';

UploaderItem.propTypes = {
  className: PropTypes.string,
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  overrides: PropTypes.shape({
    icon: PropTypes.node,
  }),
};

UploaderItem.defaultProps = {
  overrides: {},
};

export default UploaderItem;
