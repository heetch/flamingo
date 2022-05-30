import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UiText from '../UiText';
import IconButton from '../IconButton';
import {
  CardContainer,
  StyledSectionHeader,
  Title,
  Subtitle,
  SectionContentWrapper,
} from './styles';

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

export default Section;
