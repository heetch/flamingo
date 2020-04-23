import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import {
  StyledButton,
  IconContainer,
  Content,
  VARIANTS,
  INTENTS,
  intents,
  variants,
} from './styles';
import Icon from '../Icon';

const Button = React.forwardRef((props, ref) => {
  const isSuccess = props.intent === INTENTS.SUCCESS;
  const isError = props.intent === INTENTS.ERROR;
  const withIcon = props.isLoading || isSuccess || isError;

  return (
    <StyledButton {...props} ref={ref}>
      {withIcon && (
        <IconContainer>
          {isSuccess && <Icon icon={Icon.ICONS.IconCheck} />}
          {isError && <Icon icon={Icon.ICONS.IconSadFace} />}
          {props.isLoading && !isSuccess && !isError && <Spinner size={'l'} />}
        </IconContainer>
      )}

      <Content withIcon={withIcon}>{props.children}</Content>
    </StyledButton>
  );
});

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  intent: PropTypes.oneOf(intents),
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(variants),
  margin: PropTypes.string,
};

Button.defaultProps = {
  intent: INTENTS.PRIMARY,
  type: 'button',
};

Button.INTENTS = INTENTS;
Button.VARIANTS = VARIANTS;

export default Button;
