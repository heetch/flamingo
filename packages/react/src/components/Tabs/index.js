import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  handleTabClick = activeIndex => {
    const { buildReturnObject, onClick, elements } = this.props;
    this.setState({ activeIndex });
    if (onClick) {
      onClick(
        buildReturnObject
          ? buildReturnObject(elements[activeIndex])
          : activeIndex
      );
    }
  };

  render() {
    const { elements, buildTabLabel } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="Tabs">
        {elements.map((element, index) => (
          <span key={element} onClick={() => this.handleTabClick(index)}>
            <div className="Tabs-label">
              {buildTabLabel ? buildTabLabel(element) : element}
            </div>
            <div
              className={cx("Tabs-marker", {
                "is-active": activeIndex === index,
              })}
            />
          </span>
        ))}
      </div>
    );
  }
}

Tabs.propTypes = {
  /** An array of strings or objects that will make tabs content */
  elements: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
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
};

export default Tabs;
