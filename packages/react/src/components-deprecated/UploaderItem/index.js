import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Text from '../Text';

const UploaderItem = React.forwardRef(
  ({ className, file, handleDelete, overrides }, ref) => (
    <div className={cx('f-UploaderItem', className)} ref={ref}>
      <div className='f-UploaderItem-iconContainer'>
        {overrides.icon || <Icon icon={Icon.ICONS.IconFileText} />}
      </div>

      <Text className='f-UploaderItem-name u-ellipsis'>{file.name}</Text>

      <IconButton
        intent={Button.INTENTS.SECONDARY}
        variant={Button.VARIANTS.MINIMAL}
        onClick={() => handleDelete(file)}
        icon={Icon.ICONS.IconTrash}
      />
    </div>
  ),
);

UploaderItem.displayName = 'UploaderItem';

UploaderItem.propTypes = {
  className: PropTypes.string,
  file: PropTypes.instanceOf(File).isRequired,
  handleDelete: PropTypes.func.isRequired,
  overrides: PropTypes.shape({
    icon: PropTypes.node,
  }),
};

UploaderItem.defaultProps = {
  className: undefined,
  overrides: {},
};

export default UploaderItem;
