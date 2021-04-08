import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { StyledToastWrapper } from './styles';

const Toast = props => {
  const { onClose, timeout } = props;
  const [visible, visibleSet] = useState(true);
  const [close, closeSet] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      closeSet(true);
    }, timeout || 3000);

    return () => clearTimeout(timeOut);
  }, [onClose, timeout]);

  useEffect(() => {
    if (close) {
      visibleSet(false);

      const timeOut = setTimeout(() => {
        visibleSet(null);
        onClose();
      }, 250);

      return () => clearTimeout(timeOut);
    }
    return close;
  }, [onClose, close]);

  if (visible === null) return null;

  return (
    <StyledToastWrapper
      data-testid={props.testId}
      zIndex={props.zIndex}
      position={props.position}
      isVisible={visible}
      onClick={() => closeSet(true)}
    >
      <Alert
        onClose={() => closeSet(true)}
        type={props.type}
        title={props.title}
      >
        {props.children}
      </Alert>
    </StyledToastWrapper>
  );
};

Toast.TYPES = Alert.TYPES;
const typesArray = Object.values(Alert.TYPES).map(type => type);

Toast.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.string,
  testId: PropTypes.string,
  timeout: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.oneOf(typesArray),
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Toast;
