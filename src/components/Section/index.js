import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../theme';
import UiText from '../UiText';

const Section = props => (
  <SectionContainer className={props.className}>
    <StyledSectionHeader>
      <div>
        <Title variant={UiText.VARIANTS.h4}>{props.title}</Title>
        {props.subtitle && (
          <Subtitle variant={UiText.VARIANTS.subContent} as={'span'}>
            {props.subtitle}
          </Subtitle>
        )}
      </div>

      {props.headerChildren}
    </StyledSectionHeader>

    <SectionContentWrapper>{props.children}</SectionContentWrapper>
  </SectionContainer>
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

const SectionContainer = styled('div')`
  background: white;
  border-radius: 24px;
  border: 1px solid ${theme.color.element.inactive};

  & + & {
    margin-top: 3rem;
  }
`;

const SectionContentWrapper = styled('div')`
  padding: 24px;
`;

export default Section;
