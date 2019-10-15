import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import IconButton from '../IconButton';
import Text from '../Text';

import { ICONS, refShapes } from '../../constants';

const UploaderItem = ({ file, forwardedRef, handleDelete, overrides }) => (
  <div className='UploaderItem' ref={forwardedRef}>
    <div className='UploaderItem-iconContainer'>
      {overrides.icon || <Icon icon={ICONS.IconFileText} />}
    </div>

    <Text className='UploaderItem-name u-ellipsis'>{file.name}</Text>
    <IconButton onClick={() => handleDelete(file)} icon={ICONS.IconTrash} />
  </div>
);

UploaderItem.propTypes = {
  file: PropTypes.instanceOf(File).isRequired,
  forwardedRef: PropTypes.oneOfType(refShapes),
  handleDelete: PropTypes.func.isRequired,
  overrides: PropTypes.shape({
    icon: PropTypes.node,
  }),
};

UploaderItem.defaultProps = {
  forwardedRef: undefined,
  overrides: {},
};

export default UploaderItem;
