import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledTabs,
  TabsContainer,
  TabsLabel,
  TabsMarker,
  Tab,
} from './styles';

const Tabs = React.forwardRef(
  (
    {
      elements,
      defaultIndex,
      buildTabLabel,
      buildReturnObject,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const handleTabClick = (newActiveIndex) => {
      setActiveIndex(newActiveIndex);

      if (onClick) {
        onClick(
          buildReturnObject
            ? buildReturnObject(elements[newActiveIndex])
            : newActiveIndex,
        );
      }
    };

    return (
      <TabsContainer ref={ref} {...props}>
        <StyledTabs className='f-Tabs'>
          {elements.map((element, index) => (
            <Tab
              key={element}
              onClick={() => handleTabClick(index)}
              onKeyPress={({ which }) =>
                which === 13 ? handleTabClick(index) : undefined
              }
            >
              <TabsLabel className='f-Tabs-label'>
                {buildTabLabel ? buildTabLabel(element) : element}
              </TabsLabel>
              <TabsMarker
                className={'f-Tabs-marker'}
                isActive={activeIndex === index}
              />
            </Tab>
          ))}
        </StyledTabs>
      </TabsContainer>
    );
  },
);

Tabs.displayName = 'Tabs';

Tabs.propTypes = {
  /** An array of strings or objects that will make tabs content */
  elements: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
  /** This allows changing the tab that should be open on initial render. */
  defaultIndex: PropTypes.number,
  /** If objects passed to elements, this should be a method that extracts a label string from the obejct */
  buildTabLabel: PropTypes.func,
  /** If objects passed to elements, this should be a method that extracts a value to be returned to onClick */
  buildReturnObject: PropTypes.func,
  onClick: PropTypes.func,
};

export default Tabs;
