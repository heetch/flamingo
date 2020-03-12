import styled from 'styled-components';

import { VARIANTS } from './UiText.constants';
import {
  COLOR,
  LINE_HEIGHT,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACE,
} from '../../constants';

const headingStyles = `
  padding-top: ${SPACE.M};
  padding-bottom: ${SPACE.M};
  font-weight: ${FONT_WEIGHT.BLACK};
`;

const styles = {
  [VARIANTS.H1]: `
    ${headingStyles}
    padding-top: ${SPACE.XL};
    font-size: ${FONT_SIZE.XXL};
    line-height: ${LINE_HEIGHT.XL};
  `,
  [VARIANTS.H2]: `
    ${headingStyles}
    padding-top: ${SPACE.L};
    font-size: ${FONT_SIZE.XL};
    line-height: ${LINE_HEIGHT.L};
  `,
  [VARIANTS.H3]: `
    ${headingStyles}
    font-size: ${FONT_SIZE.L};
  `,
  [VARIANTS.H4]: `
    ${headingStyles}
    line-height: ${LINE_HEIGHT.S};
  `,
  [VARIANTS.H5]: `
    ${headingStyles}
    font-size: ${FONT_SIZE.S};
    line-height: ${LINE_HEIGHT.S};
  `,
  [VARIANTS.H6]: `
    ${headingStyles}
    font-size: ${FONT_SIZE.XS};
    line-height: ${LINE_HEIGHT.S};
  `,

  [VARIANTS.CONTENT_BOLD]: `
    font-weight: ${FONT_WEIGHT.BOLD};
  `,
  [VARIANTS.SUBCONTENT]: `
    font-size: ${FONT_SIZE.S};
  `,
  [VARIANTS.SUBCONTENT_BOLD]: `
    font-size: ${FONT_SIZE.S};
    font-weight: ${FONT_WEIGHT.BOLD};
  `,
};

export default styled.p`
  margin: 0;
  font-weight: ${FONT_WEIGHT.NORMAL};
  font-size: ${FONT_SIZE.M};
  line-height: ${LINE_HEIGHT.M};
  color: ${COLOR.TEXT.PRIMARY};
  ${props => styles[props.variant]}
`;
