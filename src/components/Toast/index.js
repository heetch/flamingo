import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { StyledToastWrapper } from './styles';

const Toast = React.forwardRef(
  ({ type, title, zIndex, position, timeoutDelay, onClose, children }, ref) => {
    const [isVisible, setIsVisible] = useState(true);
    const [close, setClose] = useState(false);

    useEffect(() => {
      const timeOut = setTimeout(() => {
        setClose(true);
      }, timeoutDelay || 3000);

      return () => clearTimeout(timeOut);
    }, [onClose, timeoutDelay]);

    useEffect(() => {
      if (close) {
        setIsVisible(false);

        const timeOut = setTimeout(() => {
          setIsVisible(null);
          if (onClose) onClose();
        }, 250);

        return () => clearTimeout(timeOut);
      }
      return setClose(false);
    }, [onClose, close]);

    if (isVisible === null) return null;

    return (
      <StyledToastWrapper
        zIndex={zIndex}
        position={position}
        isVisible={isVisible}
        ref={ref}
        onClose={onClose}
      >
        <Alert onClose={() => setClose(true)} type={type} title={title}>
          {children}
        </Alert>
      </StyledToastWrapper>
    );
  },
);

Toast.TYPES = Alert.TYPES;

const typesArray = Object.values(Alert.TYPES).map(type => type);
Toast.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  position: PropTypes.string,
  type: PropTypes.oneOf(typesArray),
  title: PropTypes.string,
  timeoutDelay: PropTypes.number,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Toast;
