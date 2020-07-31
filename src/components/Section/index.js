import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../theme';
import UiText from '../UiText';
import Card from '../Card';

const Section = ({ title, subtitle, headerChildren, children, ...rest }) => (
  <CardContainer {...rest}>
    <StyledSectionHeader>
      <div>
        <Title variant={UiText.VARIANTS.h4}>{title}</Title>
        {subtitle && (
          <Subtitle variant={UiText.VARIANTS.subContent} as={'span'}>
            {subtitle}
          </Subtitle>
        )}
      </div>

      {headerChildren}
    </StyledSectionHeader>

    <SectionContentWrapper>{children}</SectionContentWrapper>
  </CardContainer>
);

Section.propTypes = {
  children: PropTypes.node,
  headerChildren: PropTypes.node,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  className: PropTypes.string,
};

const Title = styled(UiText)`
  display: inline;
  margin-right: ${theme.space.xl};
`;

const Subtitle = styled(UiText)`
  color: ${theme.color.text.secondary};
`;

const StyledSectionHeader = styled('div')`
  border-bottom: 1px solid ${theme.color.element.inactive};
  padding: 16px 24px 8px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;

const CardContainer = styled(Card)`
  padding: 0;

  & + & {
    margin-top: 3rem;
  }
`;

const SectionContentWrapper = styled('div')`
  padding: 24px;
`;

export default Section;
