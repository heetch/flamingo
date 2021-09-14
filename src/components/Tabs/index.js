import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TabsContainer, TabsLabel, TabsMarker, Tab } from './styles';

const Tabs = React.forwardRef(
  (
    {
      elements,
      defaultIndex,
      buildTabLabel,
      buildReturnObject,
      buildKey,
      onClick,
      width,
      ...props
    },
    ref,
  ) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    const handleTabClick = newActiveIndex => {
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
      <TabsContainer ref={ref} {...props} width={width} className='f-Tabs'>
        {elements.map((element, index) => (
          <Tab
            key={buildKey ? buildKey(element) : element}
            type='button'
            onClick={() => handleTabClick(index)}
            onKeyPress={({ key }) =>
              key === 13 ? handleTabClick(index) : undefined
            }
            isActive={activeIndex === index}
          >
            <TabsLabel
              className='f-Tabs-label'
              isActive={activeIndex === index}
            >
              {buildTabLabel ? buildTabLabel(element) : element}
            </TabsLabel>
            <TabsMarker
              className='f-Tabs-marker'
              isActive={activeIndex === index}
            />
          </Tab>
        ))}
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
  /** If objects passed to elements, this should be a method that extracts a label string from the object */
  buildTabLabel: PropTypes.func,
  /** If objects passed to elements, this should be a method that extracts a value to be returned to onClick */
  buildReturnObject: PropTypes.func,
  /** If objects passed to elements, this should be a method that extracts a key to identify the object */
  buildKey: PropTypes.func,
  onClick: PropTypes.func,
  width: PropTypes.string,
};

export default Tabs;
