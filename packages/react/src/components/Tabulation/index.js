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
    const { returnObjectFn, onClick, elements } = this.props;
    this.setState({ activeTabIndex });
    if (onClick) {
      onClick(
        returnObjectFn
          ? returnObjectFn(elements[activeTabIndex])
          : activeTabIndex
      );
    }
  };

  render() {
    const { elements } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <div className="Tabulation">
        {elements.map((element, index) => (
          <span key={element} onClick={() => this.handleTabClick(index)}>
            <div className="label">{element}</div>
            <div
              className={cx("marker", {
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
  elements: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  returnObjectFn: PropTypes.func,
};

Tabulation.defaultProps = {
  returnObjectFn: undefined,
};

export default Tabulation;
