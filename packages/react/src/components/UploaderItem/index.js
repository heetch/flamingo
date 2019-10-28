import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Text from '../Text';

const UploaderItem = ({ file, handleDelete, overrides }, ref) => (
  <div className='UploaderItem' ref={ref}>
    <div className='UploaderItem-iconContainer'>
      {overrides.icon || <Icon icon={Icon.ICONS.IconFileText} />}
    </div>

    <Text className='UploaderItem-name u-ellipsis'>{file.name}</Text>

    <IconButton
      intent={Button.INTENTS.SECONDARY}
      variant={Button.VARIANTS.MINIMAL}
      onClick={() => handleDelete(file)}
      icon={Icon.ICONS.IconTrash}
    />
  </div>
);

UploaderItem.propTypes = {
  file: PropTypes.instanceOf(File).isRequired,
  handleDelete: PropTypes.func.isRequired,
  overrides: PropTypes.shape({
    icon: PropTypes.node,
  }),
};

UploaderItem.defaultProps = {
  overrides: {},
};

export default UploaderItem;
