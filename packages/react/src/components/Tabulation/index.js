import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

class Tabulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: null,
    };
  }

  handleTabClick = activeTabIndex => {
    const { buildReturnObject, onClick, elements } = this.props;
    this.setState({ activeTabIndex });
    if (onClick) {
      onClick(
        buildReturnObject
          ? buildReturnObject(elements[activeTabIndex])
          : activeTabIndex
      );
    }
  };

  render() {
    const { elements, buildTabLabel } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <div className="Tabulation">
        {elements.map((element, index) => (
          <span key={element} onClick={() => this.handleTabClick(index)}>
            <div className="Tabulation-label">
              {buildTabLabel ? buildTabLabel(element) : element}
            </div>
            <div
              className={cx("Tabulation-marker", {
                "is-active": activeTabIndex === index,
              })}
            />
          </span>
        ))}
      </div>
    );
  }
}

Tabulation.propTypes = {
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

Tabulation.defaultProps = {
  buildTabLabel: null,
  buildReturnObject: null,
};

export default Tabulation;
