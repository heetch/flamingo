import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { StyledToastWrapper } from './styles';

const Toast = React.forwardRef(
  ({ zIndex, position, onClose, timeoutDelay }, ref) => {
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
          onClose();
        }, 250);

        return () => clearTimeout(timeOut);
      }
      return close;
    }, [onClose, close]);

    if (isVisible === null) return null;

    return (
      <StyledToastWrapper
        zIndex={zIndex}
        position={position}
        isVisible={isVisible}
        ref={ref}
        onClick={() => setClose(true)}
      >
        <Alert onClose={() => setClose(true)} />
      </StyledToastWrapper>
    );
  },
);

Toast.TYPES = Alert.TYPES;

Toast.propTypes = {
  onClose: PropTypes.func.isRequired,
  position: PropTypes.string,
  timeoutDelay: PropTypes.number,
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Toast;
