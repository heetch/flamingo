import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { refShapes } from '../../constants';

const Tabs = ({
  elements,
  buildTabLabel,
  buildReturnObject,
  forwardedRef,
  onClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <div className='container' ref={forwardedRef}>
      <div className='Tabs'>
        {elements.map((element, index) => (
          <span
            key={element}
            onClick={() => handleTabClick(index)}
            role='button'
            onKeyPress={({ which }) =>
              which === 13 ? handleTabClick(index) : undefined
            }
            tabIndex={0}
          >
            <div className='Tabs-label'>
              {buildTabLabel ? buildTabLabel(element) : element}
            </div>
            <div
              className={cx('Tabs-marker', {
                'is-active': activeIndex === index,
              })}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  forwardedRef: PropTypes.oneOfType(refShapes),
  /** An array of strings or objects that will make tabs content */
  elements: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
  /** If objects passed to elements, this should be a method that extracts a label string from the obejct */
  buildTabLabel: PropTypes.func,
  /** If objects passed to elements, this should be a method that extracts a value to be returned to onClick */
  buildReturnObject: PropTypes.func,
  onClick: PropTypes.func,
};

Tabs.defaultProps = {
  buildTabLabel: null,
  buildReturnObject: null,
  forwardedRef: undefined,
  onClick: () => {},
};

export default Tabs;
