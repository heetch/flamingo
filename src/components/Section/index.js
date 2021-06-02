import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../theme';
import UiText from '../UiText';
import Card from '../Card';
import IconButton from '../IconButton';

const Section = ({
  title,
  subtitle,
  headerChildren,
  expandable = false,
  expanded = true,
  headerSeparator = true,
  children,
  ...rest
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <CardContainer {...rest}>
      <StyledSectionHeader
        headerSeparator={headerSeparator}
        isExpanded={isExpanded}
        expandable={expandable}
      >
        <div>
          <Title variant={UiText.VARIANTS.h4}>{title}</Title>
          {subtitle && (
            <Subtitle variant={UiText.VARIANTS.subContent} as={'span'}>
              {subtitle}
            </Subtitle>
          )}
        </div>

        {headerChildren}

        {expandable && (
          <IconButton
            margin={false}
            icon={isExpanded ? 'IconChevronUp' : 'IconChevronDown'}
            onClick={() => setIsExpanded(!isExpanded)}
          />
        )}
      </StyledSectionHeader>

      <SectionContentWrapper visible={!expandable || isExpanded}>
        {children}
      </SectionContentWrapper>
    </CardContainer>
  );
};

Section.propTypes = {
  children: PropTypes.node,
  headerChildren: PropTypes.node,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  className: PropTypes.string,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
  headerSeparator: PropTypes.bool,
};

const Title = styled(UiText)`
  display: inline;
  margin-right: ${theme.space.xl};
`;

const Subtitle = styled(UiText)`
  color: ${theme.color.text.secondary};
`;

const StyledSectionHeader = styled('div')`
  border-bottom: ${({ headerSeparator, isExpanded, expandable }) =>
    headerSeparator && (!expandable || isExpanded)
      ? `1px solid ${theme.color.element.inactive}`
      : 'none'};
  padding: 16px 24px ${({ isExpanded }) => (isExpanded ? '8px' : '16px')};
  ${({ expandable }) => expandable && `padding-right: 48px;`}
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  position: relative;

  ${IconButton} {
    position: absolute;
    top: ${({ isExpanded }) => (isExpanded ? '8px' : '12px')};
    right: 8px;
    &:hover {
      background-color: inherit;
    }
  }
`;

const CardContainer = styled(Card)`
  padding: 0;

  & + & {
    margin-top: 3rem;
  }
`;

const SectionContentWrapper = styled('div')`
  ${({ visible }) =>
    visible
      ? ` padding: 24px; `
      : `
  height: 0;
  visibility: hidden;
  overflow: hidden;
  `}
`;

export default Section;
