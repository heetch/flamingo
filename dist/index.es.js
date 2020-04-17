import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if ( module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else {
    window.classNames = classNames;
  }
})();
});

/* This file has been generated via the 'icons' script */

var IconAlertOctagon = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M7.153 1.293A1 1 0 017.86 1h8.28a1 1 0 01.707.293l5.86 5.86A1 1 0 0123 7.86v8.28a1 1 0 01-.293.707l-5.86 5.86a1 1 0 01-.707.293H7.86a1 1 0 01-.707-.293l-5.86-5.86A1 1 0 011 16.14V7.86a1 1 0 01.293-.707l5.86-5.86zM8.274 3L3 8.274v7.452L8.274 21h7.452L21 15.726V8.274L15.726 3H8.274zM11 16a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1zm2-8a1 1 0 10-2 0v4a1 1 0 102 0V8z",
  clipRule: "evenodd"
}));
var IconArrowDownCircle = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9 11C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M7.293 11.293a1 1 0 011.414 0L12 14.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 17a1 1 0 01-1-1V8a1 1 0 112 0v8a1 1 0 01-1 1z",
  clipRule: "evenodd"
}));
var IconArrowDown = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M13 3a1 1 0 10-2 0v15.586l-7.293-7.293a1 1 0 00-1.414 1.414l9 9a1 1 0 001.414 0l9-9a1 1 0 00-1.414-1.414L13 18.586V3z",
  clipRule: "evenodd"
}));
var IconArrowLeftCircle = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M12.707 7.293a1 1 0 010 1.414L9.414 12l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z",
  clipRule: "evenodd"
}));
var IconArrowLeft = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12.707 3.707a1 1 0 00-1.414-1.414l-9 9a1 1 0 000 1.414l9 9a1 1 0 001.414-1.414L5.414 13H21a1 1 0 100-2H5.414l7.293-7.293z",
  clipRule: "evenodd"
}));
var IconArrowRightCircle = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 21a9 9 0 100-18 9 9 0 000 18zm11-9c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M11.293 16.707a1 1 0 010-1.414L14.586 12l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M17 12a1 1 0 01-1 1H8a1 1 0 110-2h8a1 1 0 011 1z",
  clipRule: "evenodd"
}));
var IconArrowRight = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12.707 2.293a1 1 0 10-1.414 1.414L18.586 11H3a1 1 0 100 2h15.586l-7.293 7.293a1 1 0 001.414 1.414l9-9a1 1 0 000-1.414l-9-9z",
  clipRule: "evenodd"
}));
var IconArrowUpCircle = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M21 12a9 9 0 10-18 0 9 9 0 0018 0zM12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M16.707 12.707a1 1 0 01-1.414 0L12 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 7a1 1 0 011 1v8a1 1 0 11-2 0V8a1 1 0 011-1z",
  clipRule: "evenodd"
}));
var IconArrowUpRightCircle = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a9 9 0 00-7.032 14.618L12.586 10H9a1 1 0 110-2h6a1 1 0 011 1v6a1 1 0 11-2 0v-3.586l-7.618 7.618A9 9 0 1012 3zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z",
  clipRule: "evenodd"
}));
var IconArrowUpRight = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M7 4a1 1 0 000 2h9.586L4.293 18.293a1 1 0 101.414 1.414L18 7.414V17a1 1 0 102 0V5a1 1 0 00-1-1H7z",
  clipRule: "evenodd"
}));
var IconArrowUp = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12.707 2.293a1 1 0 00-1.414 0l-9 9a1 1 0 101.414 1.414L11 5.414V21a1 1 0 102 0V5.414l7.293 7.293a1 1 0 001.414-1.414l-9-9z",
  clipRule: "evenodd"
}));
var IconBackInTime = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M10.605 2.107a10 10 0 11-4.147 18.227 1 1 0 111.108-1.665A8 8 0 106.318 6.375L3.474 9H7a1 1 0 010 2H1a1 1 0 01-1-1V4a1 1 0 012 0v3.64l2.948-2.722a10 10 0 015.657-2.811zM13 7a1 1 0 10-2 0v6a1 1 0 00.553.894l4 2a1 1 0 10.894-1.788L13 12.382V7z",
  clipRule: "evenodd"
}));
var IconBellOff = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("g", {
  clipPath: "url(#clip0)"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M1.707.293A1 1 0 00.293 1.707L5 6.414 4 9v5a2 2 0 01-2 2 1 1 0 100 2h14.586l5.707 5.707a1 1 0 001.414-1.414l-6-6-11.22-11.22-4.78-4.78zM14.586 16L6.168 7.582A6 6 0 006 8.999V14a4 4 0 01-.536 2h9.122zM9.05 3.77A6 6 0 0118 9v4a1 1 0 102 0V9A8 8 0 008.069 2.03a1 1 0 10.982 1.74zm2.084 16.728a1 1 0 00-1.73 1.004 3 3 0 005.19 0 1 1 0 00-1.73-1.004 1 1 0 01-1.73 0z",
  clipRule: "evenodd"
})), React.createElement("defs", null, React.createElement("clipPath", {
  id: "clip0"
}, React.createElement("path", {
  d: "M0 0h24v24H0z"
}))));
var IconBell = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a6 6 0 00-6 6v5a4 4 0 01-.536 2h13.072A4 4 0 0118 14V9a6 6 0 00-6-6zm10 13a2 2 0 01-2-2V9A8 8 0 004 9v5a2 2 0 01-2 2 1 1 0 100 2h20a1 1 0 100-2zM9.768 20.135a1 1 0 011.367.363 1 1 0 001.73 0 1 1 0 011.73 1.004 3 3 0 01-5.19 0 1 1 0 01.363-1.367z",
  clipRule: "evenodd"
}));
var IconCalendar = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M17 2a1 1 0 10-2 0v1H9V2a1 1 0 00-2 0v1H5a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V6a3 3 0 00-3-3h-2V2zM7 6V5H5a1 1 0 00-1 1v3h16V6a1 1 0 00-1-1h-2v1a1 1 0 11-2 0V5H9v1a1 1 0 01-2 0zm13 5H4v9a1 1 0 001 1h14a1 1 0 001-1v-9z",
  clipRule: "evenodd"
}));
var IconCamera = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("g", {
  clipPath: "url(#clip0)"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M9 2a1 1 0 00-.832.445L6.465 5H3a3 3 0 00-3 3v11a3 3 0 003 3h18a3 3 0 003-3V8a3 3 0 00-3-3h-3.465l-1.703-2.555A1 1 0 0015 2H9zM7.832 6.555L9.535 4h4.93l1.703 2.555A1 1 0 0017 7h4a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h4a1 1 0 00.832-.445zM9 13a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10 5 5 0 000-10z",
  clipRule: "evenodd"
})), React.createElement("defs", null, React.createElement("clipPath", {
  id: "clip0"
}, React.createElement("path", {
  d: "M0 0h24v24H0z"
}))));
var IconCancel = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M6.382 4.968a9 9 0 0112.65 12.65L6.382 4.968zM4.968 6.382a9 9 0 0012.65 12.65L4.968 6.382zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1z",
  clipRule: "evenodd"
}));
var IconCandy = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("g", {
  clipPath: "url(#clip0)"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 7a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1114 0 7 7 0 01-14 0z",
  clipRule: "evenodd"
}), React.createElement("path", {
  d: "M8.128.008a1 1 0 01.8.62l2 5a1 1 0 01-1.856.743l-1.396-3.49a5.341 5.341 0 01-.908.724c-.675.41-1.384.427-1.801.437l-.118.003c-.445.017-.54.06-.642.162-.101.102-.145.197-.162.642l-.003.118c-.01.417-.028 1.126-.437 1.801a5.38 5.38 0 01-.723.908l3.49 1.396a1 1 0 01-.743 1.857l-5-2a1 1 0 01-.224-1.733l.009-.006.033-.026a10.545 10.545 0 00.575-.476c.363-.323.704-.678.873-.956.125-.206.132-.4.151-.936v-.02c.019-.494.061-1.297.747-1.983.686-.686 1.489-.728 1.984-.746l.02-.001c.534-.02.729-.026.935-.151.278-.169.633-.51.956-.873a10.545 10.545 0 00.476-.575L7.19.414l.005-.008c.216-.291.573-.444.933-.398zm7.744 23.984a1 1 0 01-.8-.62l-2-5a1 1 0 011.857-.743l1.395 3.49c.273-.264.586-.53.908-.724.675-.41 1.384-.427 1.801-.437l.118-.003c.445-.016.54-.06.642-.162.101-.101.146-.197.162-.642l.003-.118c.01-.417.028-1.126.437-1.801a5.34 5.34 0 01.723-.908l-3.49-1.396a1 1 0 01.743-1.857l5 2a1 1 0 01.224 1.733l-.009.006-.033.026a9.174 9.174 0 00-.575.476c-.363.323-.704.678-.873.956-.125.206-.132.4-.151.935v.02c-.019.495-.061 1.298-.747 1.984-.686.686-1.489.728-1.984.746l-.02.001c-.534.02-.729.026-.935.151-.278.169-.633.51-.957.873a10.566 10.566 0 00-.475.575l-.026.033-.005.008a1.001 1.001 0 01-.933.398z"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M16.707 7.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414-1.414l8-8a1 1 0 011.414 0z",
  clipRule: "evenodd"
})), React.createElement("defs", null, React.createElement("clipPath", {
  id: "clip0"
}, React.createElement("path", {
  d: "M0 0h24v24H0z"
}))));
var IconCarFront = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M5.051 5.684A1 1 0 016 5h12a1 1 0 01.949.684L20.72 11H22a1 1 0 110 2h-1v7a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1.5H6V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-7H2a1 1 0 110-2h1.28l1.77-5.316zM5 13v3.5h14V13H5zm13.613-2H5.387l1.334-4h10.558l1.334 4zM6 15a1 1 0 011-1h1a1 1 0 110 2H7a1 1 0 01-1-1zm9 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z",
  clipRule: "evenodd"
}));
var IconCarSide = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M5 5a1 1 0 00-.673.26l-.001.001-.002.002-.007.006-.022.021a15.146 15.146 0 00-.358.347 18.06 18.06 0 00-.893.958c-.672.776-1.51 1.877-1.972 3.034a16.985 16.985 0 00-.853 2.925 17.733 17.733 0 00-.21 1.314l-.003.022v.007l-.001.003A1 1 0 000 14v1a1 1 0 001 1h1.17a3.001 3.001 0 005.66 0h7.34a3.001 3.001 0 005.66 0H23a1 1 0 001-1v-3c0-.905-.482-1.481-.945-1.79a2.456 2.456 0 00-.848-.355l-.024-.005-.01-.002h-.005l-.004-.001-4.604-.768L15.55 6.4l-.002-.002-.002-.003-.004-.006-.013-.017a2.91 2.91 0 00-.175-.204 4.305 4.305 0 00-.48-.449C14.485 5.407 13.829 5 13 5H5zm15.83 9H22v-2a.288.288 0 00-.008-.074c-.002-.01-.006-.016-.006-.016a.134.134 0 00-.04-.036.458.458 0 00-.13-.058l-4.98-.83a1 1 0 01-.636-.386l-2.246-2.995-.01-.013a2.3 2.3 0 00-.318-.31C13.391 7.093 13.172 7 13 7H5.402l-.051.05c-.206.207-.49.502-.795.855-.628.724-1.29 1.623-1.628 2.466-.37.926-.605 1.862-.747 2.575A15.709 15.709 0 002.007 14h.164a3.001 3.001 0 015.658 0h7.342a3.001 3.001 0 015.658 0zM5 14a1 1 0 100 2 1 1 0 000-2zm13 0a1 1 0 100 2 1 1 0 000-2z",
  clipRule: "evenodd"
}));
var IconCash = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M2 6.75C2 6.457 2.318 6 3 6a1 1 0 01-1 1v-.25zM2 9v6a3 3 0 013 3h14a3 3 0 013-3V9a3 3 0 01-3-3H5a3 3 0 01-3 3zm20-2.25V7a1 1 0 01-1-1c.682 0 1 .457 1 .75zM21 18a1 1 0 011-1v.25c0 .293-.318.75-1 .75zM2 17v.25c0 .293.318.75 1 .75a1 1 0 00-1-1zM3 4C1.473 4 0 5.11 0 6.75v10.5C0 18.89 1.473 20 3 20h18c1.527 0 3-1.11 3-2.75V6.75C24 5.11 22.527 4 21 4H3zm8 8a1 1 0 112 0 1 1 0 01-2 0zm1-3a3 3 0 100 6 3 3 0 000-6z",
  clipRule: "evenodd"
}));
var IconChartBar = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M22 3a1 1 0 10-2 0v18a1 1 0 102 0V3zm-6 8a1 1 0 10-2 0v10a1 1 0 102 0V11zM9 6a1 1 0 011 1v14a1 1 0 11-2 0V7a1 1 0 011-1zm-5 9a1 1 0 10-2 0v6a1 1 0 102 0v-6z",
  clipRule: "evenodd"
}));
var IconChartPie = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 1a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1A11 11 0 0012 1zm1 10V3.056A9 9 0 0120.944 11H13zM8.4 3.747a1 1 0 00-.8-1.834A11 11 0 1022.131 16.28a1 1 0 10-1.842-.778A9 9 0 118.4 3.747z",
  clipRule: "evenodd"
}));
var IconCheck = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M22.707 4.293a1 1 0 010 1.414l-13 13a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 16.586 21.293 4.293a1 1 0 011.414 0z",
  clipRule: "evenodd"
}));
var IconChevronDown = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z",
  clipRule: "evenodd"
}));
var IconChevronLeft = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M15.707 5.293a1 1 0 010 1.414L10.414 12l5.293 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z",
  clipRule: "evenodd"
}));
var IconChevronRight = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M7.293 3.293a1 1 0 011.414 0l8 8a1 1 0 010 1.414l-8 8a1 1 0 01-1.414-1.414L14.586 12 7.293 4.707a1 1 0 010-1.414z",
  clipRule: "evenodd"
}));
var IconChevronUpDown = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M11.495 5.21a.714.714 0 011.01 0l4.286 4.285a.714.714 0 01-1.01 1.01L12 6.725l-3.78 3.78a.714.714 0 01-1.01-1.01l4.285-4.286zm1.01 13.295a.714.714 0 01-1.01 0L7.209 14.22a.714.714 0 011.01-1.01L12 16.99l3.78-3.78a.714.714 0 011.01 1.01l-4.285 4.286z",
  clipRule: "evenodd"
}));
var IconChevronUp = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M11.293 8.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 01-1.414-1.414l6-6z",
  clipRule: "evenodd"
}));
var IconClock = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 5a1 1 0 011 1v5.382l3.447 1.724a1 1 0 11-.894 1.788l-4-2A1 1 0 0111 12V6a1 1 0 011-1z",
  clipRule: "evenodd"
}));
var IconCoffee = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M7 1a1 1 0 00-2 0v3a1 1 0 002 0V1zM1 8a1 1 0 011-1h17a5 5 0 110 10 5 5 0 01-5 5H6a5 5 0 01-5-5V8zm18 7V9a3 3 0 010 6zm-2-6v8a3 3 0 01-3 3H6a3 3 0 01-3-3V9h14zm-7-9a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1zm5 1a1 1 0 10-2 0v3a1 1 0 102 0V1z",
  clipRule: "evenodd"
}));
var IconCreditCard = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M2 6a1 1 0 011-1h18a1 1 0 011 1v3H2V6zm0 5v7a1 1 0 001 1h18a1 1 0 001-1v-7H2zm1-8a3 3 0 00-3 3v12a3 3 0 003 3h18a3 3 0 003-3V6a3 3 0 00-3-3H3zm1 11a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zm14-1a1 1 0 100 2h2a1 1 0 100-2h-2z",
  clipRule: "evenodd"
}));
var IconCross = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M20.707 4.707a1 1 0 00-1.414-1.414L12 10.586 4.707 3.293a1 1 0 00-1.414 1.414L10.586 12l-7.293 7.293a1 1 0 101.414 1.414L12 13.414l7.293 7.293a1 1 0 001.414-1.414L13.414 12l7.293-7.293z",
  clipRule: "evenodd"
}));
var IconDownload = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M3 14a1 1 0 011 1v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 112 0v4a3 3 0 01-3 3H5a3 3 0 01-3-3v-4a1 1 0 011-1z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M6.293 9.293a1 1 0 011.414 0L12 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 2a1 1 0 011 1v12a1 1 0 11-2 0V3a1 1 0 011-1z",
  clipRule: "evenodd"
}));
var IconEmojiAngry = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm7.476 2.195c.798-.578 2-1.185 3.524-1.185s2.726.607 3.524 1.185a6.94 6.94 0 011.171 1.075l.07.085.021.027.008.01.002.003.002.002v.001a1 1 0 01-1.593 1.208L15.2 16.6a3.616 3.616 0 00-.194-.218 4.934 4.934 0 00-.655-.567c-.577-.417-1.375-.805-2.35-.805-.977 0-1.775.388-2.352.805a4.935 4.935 0 00-.815.744L8.8 16.6l-.005.006a1 1 0 01-1.593-1.208v-.001l.002-.002.002-.003.008-.01.021-.027.07-.085c.059-.07.142-.164.248-.275.212-.22.522-.51.923-.8zm-.029-4.028A1 1 0 009 12h.01a1 1 0 001-1 .998.998 0 00.545-1.832l-3-2a1 1 0 00-1.11 1.664l2.002 1.335zm7.11-.004l1.998-1.33a1 1 0 00-1.11-1.665l-3 2A1 1 0 0014 11a1 1 0 001 1h.01a1 1 0 00.548-1.837z",
  clipRule: "evenodd"
}));
var IconEmojiMistake = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("g", {
  clipPath: "url(#clip0)"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M4.997 0a1 1 0 01.744.33l2.483 2.758A10.927 10.927 0 0113 2c6.075 0 11 4.925 11 11s-4.925 11-11 11S2 19.075 2 13c0-.65.057-1.289.165-1.91a5 5 0 01-.72-7.635L4.255.331A1 1 0 014.997 0zm4.907 5.995a5 5 0 00-.44-1.274A8.925 8.925 0 0113 4a9 9 0 11-8.932 7.884 4.997 4.997 0 005.552-3 5 5 0 00.284-2.889zm-4.906-3.5L2.916 4.811a3 3 0 104.168 0L4.998 2.496zm6.45 13.61a1 1 0 00-.895 0l-2 1a1 1 0 10.894 1.79L11 18.117l1.553.776a1 1 0 00.894 0L15 18.118l1.553.776a1 1 0 10.894-1.788l-2-1a1 1 0 00-.894 0L13 16.882l-1.553-.776zM9 12a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm7-1a1 1 0 100 2h.01a1 1 0 100-2H16z",
  clipRule: "evenodd"
})), React.createElement("defs", null, React.createElement("clipPath", {
  id: "clip0"
}, React.createElement("path", {
  d: "M0 0h24v24H0z"
}))));
var IconEmojiSmile = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM7.4 13.2a1 1 0 011.397.196l.005.006.033.041a4.952 4.952 0 00.815.748c.578.42 1.376.809 2.35.809.975 0 1.772-.39 2.35-.809a4.951 4.951 0 00.815-.748l.034-.041.004-.006A1 1 0 0116.8 14.6l-.001.001-.001.002-.003.004-.007.009-.021.027-.07.086a6.944 6.944 0 01-1.171 1.08c-.798.58-2 1.191-3.526 1.191-1.525 0-2.728-.61-3.526-1.191a6.942 6.942 0 01-1.17-1.08 4.174 4.174 0 01-.07-.086l-.022-.027-.007-.01-.003-.003V14.6H7.2a1 1 0 01.2-1.4zM8 9a1 1 0 011-1h.01a1 1 0 110 2H9a1 1 0 01-1-1zm7-1a1 1 0 100 2h.01a1 1 0 100-2H15z",
  clipRule: "evenodd"
}));
var IconEuro = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M6.41 9c1.016-3.58 3.797-6 6.84-6 1.957 0 3.774.972 5.114 2.629a1 1 0 001.555-1.258C18.265 2.326 15.909 1 13.249 1 8.896 1 5.433 4.478 4.352 9H3a1 1 0 100 2h1.038a13.043 13.043 0 000 2H3a1 1 0 100 2h1.351c1.08 4.522 4.544 8 8.899 8 2.658 0 5.015-1.326 6.669-3.371a1 1 0 10-1.555-1.258C17.024 20.028 15.207 21 13.25 21c-3.043 0-5.824-2.42-6.84-6H13a1 1 0 100-2H6.043a11.442 11.442 0 010-2H13a1 1 0 100-2H6.41z",
  clipRule: "evenodd"
}));
var IconEyeClose = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("g", {
  clipPath: "url(#clip0)"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M1.707.293A1 1 0 00.293 1.707L4.545 5.96a19.527 19.527 0 00-4.426 5.534 1 1 0 00-.014.92L1 11.966l-.894.447v.001l.001.002.004.007.011.023a7.736 7.736 0 00.192.355 20.753 20.753 0 002.84 3.866C5.122 18.764 8.128 21 12.04 21h.016a11.1 11.1 0 005.79-1.741l4.448 4.448a1 1 0 001.414-1.414l-4.816-4.817a.998.998 0 00-.184-.252l-3.83-3.832-.006-.007-4.25-4.252-.006-.007-3.83-3.833a.998.998 0 00-.27-.193L1.706.293zm12.345 15.174l2.336 2.335A9.099 9.099 0 0112.031 19c-3.109-.003-5.62-1.784-7.416-3.7a18.754 18.754 0 01-2.473-3.331 17.527 17.527 0 013.821-4.592L8.54 9.953a4.018 4.018 0 00-.294 3.59 4.013 4.013 0 003.79 2.51 4.008 4.008 0 002.017-.586zm-4.012-4.012l2.512 2.51a2.007 2.007 0 01-2.452-1.17 2.014 2.014 0 01-.06-1.34zm10.33 4.234a1 1 0 01-.146-1.407 17.446 17.446 0 001.573-2.285 18.674 18.674 0 00-2.462-3.313c-1.789-1.909-4.29-3.68-7.387-3.684a9.07 9.07 0 00-1.864.226 1 1 0 11-.445-1.95c.746-.17 1.511-.263 2.285-.276h.016c3.9 0 6.896 2.226 8.854 4.316a20.672 20.672 0 012.832 3.85 12.618 12.618 0 01.192.354l.011.022.003.007.002.002v.001L22.94 12l.894-.447a1 1 0 01-.013.92 19.449 19.449 0 01-2.045 3.07 1 1 0 01-1.407.146z",
  clipRule: "evenodd"
})), React.createElement("defs", null, React.createElement("clipPath", {
  id: "clip0"
}, React.createElement("path", {
  d: "M0 0h24v24H0V0z"
}))));
var IconEyeOpen = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M2.14 12a18.68 18.68 0 002.464 3.316C6.397 17.226 8.9 19 12 19c3.1 0 5.605-1.774 7.395-3.684A18.684 18.684 0 0021.86 12a18.681 18.681 0 00-2.464-3.316C17.605 6.774 15.101 5 12 5 8.9 5 6.396 6.774 4.605 8.684A18.678 18.678 0 002.14 12zM23 12l.894-.448-.002-.003-.003-.007-.011-.022a10.615 10.615 0 00-.192-.354 20.675 20.675 0 00-2.831-3.85C18.895 5.226 15.899 3 12 3 8.1 3 5.104 5.226 3.145 7.316a20.674 20.674 0 00-2.831 3.85 12.375 12.375 0 00-.192.354l-.011.022-.003.007-.002.002s0 .002.894.449l-.894-.447a1 1 0 000 .894L1 12l-.894.447.002.004.003.007.011.022a8.267 8.267 0 00.192.354 20.67 20.67 0 002.831 3.85C5.105 18.774 8.1 21 12 21c3.9 0 6.895-2.226 8.855-4.316a20.672 20.672 0 002.831-3.85 11.81 11.81 0 00.192-.354l.011-.022.003-.007.002-.002s0-.002-.894-.449zm0 0l.894.447c.141-.281.14-.613 0-.895L23 12z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z",
  clipRule: "evenodd"
}));
var IconFacebook = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  d: "M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0z"
}));
var IconFileMinus = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M3.879 1.879A3 3 0 016 1h8a1 1 0 01.707.293l6 6A1 1 0 0121 8v12a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.879-2.121zM6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8.414L13.586 3H6z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M14 1a1 1 0 011 1v5h5a1 1 0 110 2h-6a1 1 0 01-1-1V2a1 1 0 011-1zM8 15a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z",
  clipRule: "evenodd"
}));
var IconFilePlus = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M3.879 1.879A3 3 0 016 1h8a1 1 0 01.707.293l6 6A1 1 0 0121 8v12a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.879-2.121zM6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8.414L13.586 3H6z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M14 1a1 1 0 011 1v5h5a1 1 0 110 2h-6a1 1 0 01-1-1V2a1 1 0 011-1zm-2 10a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M8 15a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z",
  clipRule: "evenodd"
}));
var IconFileText = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M3.879 1.879A3 3 0 016 1h8a1 1 0 01.707.293l6 6A1 1 0 0121 8v12a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.879-2.121zM6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8.414L13.586 3H6z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M14 1a1 1 0 011 1v5h5a1 1 0 110 2h-6a1 1 0 01-1-1V2a1 1 0 011-1zM7 13a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm0-8a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1z",
  clipRule: "evenodd"
}));
var IconFile = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M3.879 1.879A3 3 0 016 1h7a1 1 0 01.707.293l7 7A1 1 0 0121 9v11a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 01.879-2.121zM6 3a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V9.414L12.586 3H6z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M13 1a1 1 0 011 1v6h6a1 1 0 110 2h-7a1 1 0 01-1-1V2a1 1 0 011-1z",
  clipRule: "evenodd"
}));
var IconFire = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M14.687 2.37a1 1 0 01.12 1.071c-.738 1.502-.47 3.441.66 4.572.26.26.553.487.901.749l.091.068c.313.235.672.504 1.01.815l.028.028.084.084c.223.22.5.497.744.81.408.477.67.986.881 1.47l.118.236.03.062c1.118 2.687.348 5.79-1.746 7.72l-.001.001a7.04 7.04 0 01-2.247 1.384 1 1 0 01-1.36-.957.996.996 0 01.168-.538 3.46 3.46 0 00.582-1.883c0-.625-.194-1.091-.457-1.355a4.293 4.293 0 00-.528-.421l-.021-.015a6.08 6.08 0 01-.734-.597 5.362 5.362 0 00.17.779c.094.361.217.833.252 1.344.082 1.208-.328 2.466-1.77 3.846a1 1 0 01-.818.269c-2.29-.29-4.382-1.719-5.57-3.696a7.12 7.12 0 01-.827-1.971c-.198-.605-.263-1.189-.304-1.695v-.016c-.16-2.453.836-5.077 2.749-6.664a1 1 0 011.128-.102c.503-1.635 1.463-3.122 2.806-4.222l.003-.001c.76-.62 1.732-1.235 2.836-1.515a1 1 0 011.022.34zm-8.37 10.11a6.305 6.305 0 00-.18 1.918c.039.477.092.873.22 1.25.01.031.02.063.027.095a5.1 5.1 0 00.602 1.44l.001.002c.805 1.34 2.164 2.327 3.636 2.66.766-.85.844-1.452.813-1.912-.022-.32-.102-.63-.207-1.036l-.005-.018c-.097-.372-.224-.862-.224-1.379 0-.914.261-1.696.549-2.253a3.88 3.88 0 01.458-.703 2.05 2.05 0 01.27-.271 1.32 1.32 0 01.218-.145c.075-.04.258-.128.505-.128a1 1 0 011 1c0 .753.207 1.043.407 1.243.134.134.293.252.528.421l.021.015c.213.154.494.357.751.614.734.734 1.041 1.764 1.043 2.76 1.11-1.374 1.44-3.276.77-4.918l-.114-.228a.93.93 0 01-.023-.048c-.183-.421-.355-.735-.588-1.003a6.545 6.545 0 00-.626-.683l-.071-.071a11.23 11.23 0 00-.85-.68l-.081-.061a10.239 10.239 0 01-1.114-.934c-1.21-1.21-1.754-2.918-1.645-4.577a8.1 8.1 0 00-.316.245c-2.203 1.805-3.083 5.014-2.04 7.76 0 .004.002.006.003.01.042.104.145.358.145.685 0 .66-.425 1.197-.956 1.42-.64.28-1.278.074-1.686-.282a1.796 1.796 0 01-.301-.332 5.693 5.693 0 01-.94-1.877z",
  clipRule: "evenodd"
}));
var IconGear = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M11.293 2.293A1 1 0 0113 3v.094a2.65 2.65 0 001.601 2.423 2.65 2.65 0 002.918-.532l.069-.068a1 1 0 011.415 0 .999.999 0 010 1.416l-.06.06-.008.008a2.65 2.65 0 00-.607 2.729c.012.09.037.18.073.264A2.65 2.65 0 0020.826 11H21a1 1 0 010 2h-.094a2.65 2.65 0 00-2.423 1.601 2.65 2.65 0 00.532 2.918l.068.069a1 1 0 010 1.415 1 1 0 01-1.416 0l-.06-.06-.008-.008a2.651 2.651 0 00-2.918-.532 2.65 2.65 0 00-1.601 2.423V21a1 1 0 01-2 0v-.113a2.65 2.65 0 00-1.705-2.415 2.651 2.651 0 00-2.894.543l-.069.068a.999.999 0 01-1.415 0 1 1 0 010-1.416l.06-.06.008-.008a2.65 2.65 0 00.532-2.918 2.65 2.65 0 00-2.423-1.601H3a1 1 0 010-2h.113a2.65 2.65 0 002.414-1.705 2.65 2.65 0 00-.542-2.894l-.068-.069a1 1 0 010-1.415 1 1 0 011.416 0l.06.06.008.008a2.65 2.65 0 002.729.607 1 1 0 00.264-.073A2.65 2.65 0 0011 3.174V3a1 1 0 01.293-.707zm9.022 13.11L19.4 15l.92.394a.65.65 0 01.593-.394H21a3 3 0 000-6h-.168a.65.65 0 01-.533-.285 1.006 1.006 0 00-.064-.199.65.65 0 01.127-.714l.055-.055a2.999 2.999 0 00-.973-4.895 3 3 0 00-3.271.651l-.055.055a.65.65 0 01-.714.127l-.01-.004A.65.65 0 0115 3.087V3a3 3 0 00-6 0v.167a.65.65 0 01-.285.534 1 1 0 00-.199.064.65.65 0 01-.714-.127l-.054-.055a3 3 0 10-4.245 4.244l.055.055a.65.65 0 01.127.714l-.024.059a.65.65 0 01-.585.425H3a3 3 0 100 6h.167a.65.65 0 01.594.394l.004.01a.65.65 0 01-.127.714l-.055.055a3 3 0 003.27 4.895c.365-.151.696-.372.974-.651l.055-.055a.65.65 0 01.714-.127l.059.023a.651.651 0 01.425.586V21a3 3 0 106 0v-.168a.65.65 0 01.394-.593l.01-.004a.65.65 0 01.714.127l.055.055a2.999 2.999 0 004.244 0l-.707-.707.707.707a2.999 2.999 0 000-4.245l-.055-.054a.65.65 0 01-.127-.714zM10 12a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8z",
  clipRule: "evenodd"
}));
var IconGlassWine = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M9 0a1 1 0 00-.934.642 45.856 45.856 0 00-.319.861 68.54 68.54 0 00-.697 2.02 37.895 37.895 0 00-.707 2.388C6.155 6.655 6 7.42 6 8c0 2.863 2.154 5.422 5.004 5.915A1.003 1.003 0 0011 14v8H9a1 1 0 100 2h6a1 1 0 100-2h-2v-8a.794.794 0 00-.004-.085C15.846 13.422 18 10.863 18 8c0-.58-.155-1.345-.343-2.09a37.912 37.912 0 00-.707-2.387 69.63 69.63 0 00-.992-2.818L15.94.659l-.006-.015V.642A1 1 0 0015 0H9zm.695 2l-.067.185a67.39 67.39 0 00-.678 1.96 35.94 35.94 0 00-.668 2.257c-.055.216-.102.415-.14.598h7.716a16.255 16.255 0 00-.14-.598 35.923 35.923 0 00-.668-2.257 67.151 67.151 0 00-.678-1.96L14.305 2h-4.61zm6.17 7h-7.73c.459 1.674 2.025 3 3.865 3 1.84 0 3.406-1.326 3.864-3z",
  clipRule: "evenodd"
}));
var IconGlobe = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M9.726 3.29A9.008 9.008 0 003.055 11H7.05a16.3 16.3 0 012.676-7.71zm4.548 0A16.3 16.3 0 0116.95 11h3.995a9.008 9.008 0 00-6.67-7.71zm.668 7.71A14.3 14.3 0 0012 3.55 14.3 14.3 0 009.058 11h5.884zm-5.884 2h5.884A14.3 14.3 0 0112 20.45 14.3 14.3 0 019.058 13zM7.05 13H3.055a9.008 9.008 0 006.67 7.71A16.3 16.3 0 017.05 13zm7.224 7.71A16.3 16.3 0 0016.95 13h3.995a9.008 9.008 0 01-6.67 7.71zM12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z",
  clipRule: "evenodd"
}));
var IconHeart = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M14.462 2.493a6.5 6.5 0 018.99 6.007 6.499 6.499 0 01-1.905 4.597l-8.84 8.84a1 1 0 01-1.414 0l-8.84-8.84a6.501 6.501 0 019.192-9.196l.002.002.353.35.353-.35.002-.002a6.5 6.5 0 012.107-1.408zm2.488 1.505a4.5 4.5 0 00-3.183 1.319l-.003.003-1.06 1.05a1 1 0 01-1.408 0l-1.063-1.053a4.501 4.501 0 00-6.366 6.366L12 19.816l8.133-8.133a4.501 4.501 0 00-3.183-7.685z",
  clipRule: "evenodd"
}));
var IconHelpCircle = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11.258-3.976a2 2 0 00-2.225 1.308 1 1 0 11-1.886-.664 4 4 0 017.773 1.333c0 1.53-1.135 2.54-1.945 3.081a8.036 8.036 0 01-1.686.848l-.035.013-.011.003-.004.002h-.002L11.92 13l.316.949a1 1 0 01-.633-1.897H11.6h.003l.015-.006.074-.027a6.046 6.046 0 001.172-.6c.69-.46 1.055-.95 1.055-1.419v-.001a2 2 0 00-1.662-1.975zM12 16a1 1 0 100 2h.01a1 1 0 100-2H12z",
  clipRule: "evenodd"
}));
var IconInfo = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11-1a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm0-4a1 1 0 100 2h.01a1 1 0 100-2H12z",
  clipRule: "evenodd"
}));
var IconLoader = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z",
  clipRule: "evenodd",
  opacity: ".25"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a9 9 0 109 9 1 1 0 112 0c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1a1 1 0 110 2z",
  clipRule: "evenodd"
}));
var IconLock = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M9.172 4.172A4 4 0 0116 7v3H8V7a4 4 0 011.172-2.828zM6 10V7a6 6 0 1112 0v3h1a3 3 0 013 3v7a3 3 0 01-3 3H5a3 3 0 01-3-3v-7a3 3 0 013-3h1zm11 2h2a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7a1 1 0 011-1h12zm-6 4a1 1 0 011-1h.01a1 1 0 110 2H12a1 1 0 01-1-1z",
  clipRule: "evenodd"
}));
var IconLolipop = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M17 2a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1114 0 7 7 0 01-14 0z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M13.207 10.793a1 1 0 010 1.414l-10.5 10.5a1 1 0 01-1.414-1.414l10.5-10.5a1 1 0 011.414 0zm-1.914-9.5a1 1 0 011.414 0l10 10a1 1 0 01-1.414 1.414l-10-10a1 1 0 010-1.414z",
  clipRule: "evenodd"
}));
var IconMail = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M3.107 5.554C3.272 5.227 3.612 5 4 5h16c.388 0 .728.227.893.554L12 11.779 3.107 5.554zM3 7.921V18c0 .548.452 1 1 1h16c.548 0 1-.452 1-1V7.92l-8.427 5.9a1 1 0 01-1.146 0L3 7.92zM4 3C2.348 3 1 4.348 1 6v12c0 1.652 1.348 3 3 3h16c1.652 0 3-1.348 3-3V6c0-1.652-1.348-3-3-3H4z",
  clipRule: "evenodd"
}));
var IconMapPinOff = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("g", {
  clipPath: "url(#clip0)"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M1.707.293A1 1 0 00.293 1.707L3.43 4.845A10 10 0 002 10c0 3.902 2.484 7.396 4.774 9.813a31.428 31.428 0 004.254 3.726 18.887 18.887 0 00.384.27l.023.016.007.005.003.002c.336.224.774.223 1.11 0l.004-.003.009-.006.031-.02.113-.079c.097-.067.236-.166.41-.293a30.6 30.6 0 001.404-1.1 30.35 30.35 0 003.261-3.13l4.506 4.506a1 1 0 001.414-1.414l-22-22zm14.664 17.492l-3.902-3.902A.996.996 0 0112 14a4 4 0 01-4-4c0-.17.042-.33.117-.47L4.9 6.315A8 8 0 004 10c0 3.098 2.016 6.104 4.226 8.437A29.419 29.419 0 0012 21.773c.316-.234.748-.565 1.25-.98a28.242 28.242 0 003.12-3.008zM12 2a8 8 0 00-4 1.072A1 1 0 017 1.34 10 10 0 0122 10c0 1.762-.508 3.434-1.258 4.945a1 1 0 01-1.791-.89C19.603 12.742 20 11.375 20 10a8 8 0 00-8-8zm-1 5a1 1 0 011-1 4 4 0 014 4 1 1 0 11-2 0 2 2 0 00-2-2 1 1 0 01-1-1z",
  clipRule: "evenodd"
})), React.createElement("defs", null, React.createElement("clipPath", {
  id: "clip0"
}, React.createElement("path", {
  d: "M0 0h24v24H0z"
}))));
var IconMapPin = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M6.343 4.343A8 8 0 0120 10c0 3.098-2.016 6.104-4.226 8.437A29.412 29.412 0 0112 21.773a29.419 29.419 0 01-3.774-3.335C6.016 16.103 4 13.097 4 10a8 8 0 012.343-5.657zm5.102 19.489L12 23l.555.832a1 1 0 01-1.11 0zm0 0L12 23c.555.832.556.831.556.831l.002-.001.007-.005.023-.015.082-.057c.072-.05.174-.12.302-.214a31.433 31.433 0 004.254-3.727C19.516 17.397 22 13.903 22 10a10 10 0 00-20 0c0 3.902 2.484 7.396 4.774 9.813a31.428 31.428 0 004.254 3.726 18.887 18.887 0 00.384.27l.023.016.007.005.003.002zM10 10a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8z",
  clipRule: "evenodd"
}));
var IconMenu = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M2 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h18a1 1 0 100-2H3z",
  clipRule: "evenodd"
}));
var IconMinus = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z",
  clipRule: "evenodd"
}));
var IconMoon = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12.081 2.509a1 1 0 01-.067 1.085 6 6 0 008.392 8.392 1 1 0 011.59.896A10 10 0 1111.118 2.004a1 1 0 01.963.505zm-2.765 1.93a8 8 0 1010.245 10.245A7.999 7.999 0 019.316 4.439z",
  clipRule: "evenodd"
}));
var IconNavigation = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M22.707 1.293a1 1 0 01.197 1.135l-9 19a1 1 0 01-1.874-.186l-1.855-7.417-7.418-1.855a1 1 0 01-.185-1.874l19-9a1 1 0 011.135.197zM5.953 10.708l5.29 1.322a1 1 0 01.727.728l1.322 5.289 6.606-13.945-13.945 6.606z",
  clipRule: "evenodd"
}));
var IconNumber = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M5 6a1 1 0 00-1.707-.707l-2 2a1 1 0 001.414 1.414L3 8.414V18a1 1 0 102 0V6zm4 3a2 2 0 114 0c0 .58-.247 1.187-.746 1.873-.503.69-1.189 1.367-1.946 2.093l-.182.174c-.679.649-1.408 1.346-1.973 2.06C7.541 15.974 7 16.914 7 18a1 1 0 001 1h6a1 1 0 100-2H9.33a5.18 5.18 0 01.392-.56c.474-.598 1.103-1.2 1.81-1.877l.16-.154c.743-.711 1.557-1.504 2.18-2.36C14.496 11.19 15 10.171 15 9a4 4 0 00-8 0 1 1 0 002 0zm9 0a2 2 0 112 2 1 1 0 100 2 2 2 0 11-2 2 1 1 0 10-2 0 4 4 0 106.646-3A4 4 0 1016 9a1 1 0 102 0z",
  clipRule: "evenodd"
}));
var IconOption = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M10 5a2 2 0 114 0 2 2 0 01-4 0zm0 7a2 2 0 114 0 2 2 0 01-4 0zm2 5a2 2 0 100 4 2 2 0 000-4z",
  clipRule: "evenodd"
}));
var IconPen = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M16.703 3.71l-.289.29L20 7.586l.288-.289h.001l.008-.009.05-.055a3.347 3.347 0 00.642-1.111 2.12 2.12 0 00.085-1.09c-.074-.371-.28-.824-.781-1.325s-.954-.707-1.325-.781a2.105 2.105 0 00-1.09.085 3.348 3.348 0 00-1.166.692l-.009.008zM18.586 9L15 5.414l-11 11V20h3.586l11-11zM19.36.965c.8.16 1.598.58 2.347 1.328.749.749 1.168 1.546 1.328 2.347.159.793.05 1.52-.149 2.114a5.344 5.344 0 01-1.16 1.934l-.011.012-.005.004-.001.002h-.001L21 8l.707.707-13 13A1 1 0 018 22H3a1 1 0 01-1-1v-5a1 1 0 01.293-.707l13-13L16 3a94.175 94.175 0 01-.706-.708l.002-.002.004-.005.012-.01a2.663 2.663 0 01.145-.133 5.343 5.343 0 011.789-1.028 4.102 4.102 0 012.114-.15z",
  clipRule: "evenodd"
}));
var IconPhoneMissed = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M22.026 22.139a3 3 0 00.972-2.223v-2.985a3 3 0 00-2.58-3.031 11.863 11.863 0 01-2.6-.647 2.999 2.999 0 00-3.163.676l-.721.721a15.002 15.002 0 01-4.586-4.586l.717-.717a3.002 3.002 0 00.68-3.169A11.834 11.834 0 0110.1 3.59 3.002 3.002 0 007.098 1h-2.99a3 3 0 00-2.986 3.27 20.804 20.804 0 003.227 9.124 20.49 20.49 0 006.303 6.3 20.778 20.778 0 009.058 3.22 3.009 3.009 0 002.316-.775zm-1.028-5.244v3.025a1.002 1.002 0 01-1.09 1.004 18.775 18.775 0 01-8.176-2.913 18.512 18.512 0 01-5.7-5.697 18.8 18.8 0 01-2.92-8.24A1 1 0 014.11 3h3c.51-.005.939.363 1.009.86.135 1.026.388 2.042.753 3.02a1 1 0 01-.224 1.057L7.381 9.203a1 1 0 00-.162 1.201 17 17 0 006.375 6.375 1 1 0 001.201-.162l1.27-1.27a.998.998 0 011.051-.22c.98.365 1.997.618 3.031.755.494.07.864.506.851 1.013zm.82-14.602a1 1 0 010 1.414L19.523 6l2.293 2.293a1 1 0 01-1.414 1.414L18.11 7.414l-2.293 2.293a1 1 0 01-1.414-1.414L16.696 6l-2.293-2.293a1 1 0 011.414-1.414l2.293 2.293 2.293-2.293a1 1 0 011.414 0z",
  clipRule: "evenodd"
}));
var IconPhoneOff = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("g", {
  clipPath: "url(#clip0)"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M10.063 12.523L22.293.293a1 1 0 111.414 1.414L12.123 13.291c.569.498 1.175.952 1.813 1.359l.72-.721a3 3 0 013.164-.676c.836.312 1.705.529 2.6.647A2.998 2.998 0 0123 16.89v2.996a3 3 0 01-3.288 2.998 20.78 20.78 0 01-9.058-3.22 20.418 20.418 0 01-2.782-2.122l-6.165 6.165a1 1 0 01-1.414-1.414l9.6-9.6a1.003 1.003 0 01.17-.17zm.643 2.185l-1.418 1.418c.76.683 1.577 1.303 2.446 1.855a18.775 18.775 0 008.176 2.913A1 1 0 0021 19.89v-3.01a.998.998 0 00-.85-.999 13.849 13.849 0 01-3.032-.755.998.998 0 00-1.05.221l-1.27 1.27a1 1 0 01-1.202.162 16.995 16.995 0 01-2.89-2.07zM5.734 13.65a1 1 0 00.295-1.383 18.79 18.79 0 01-2.915-8.194A1 1 0 014.111 3H7.11c.512-.005.94.363 1.01.86.135 1.026.388 2.042.753 3.02a1 1 0 01-.224 1.057L7.383 9.203a1 1 0 101.414 1.414l1.27-1.27a3.002 3.002 0 00.679-3.169 11.834 11.834 0 01-.645-2.589 3.002 3.002 0 00-3-2.589H4.11a3 3 0 00-2.986 3.27 20.806 20.806 0 003.227 9.084 1 1 0 001.383.295z",
  clipRule: "evenodd"
})), React.createElement("defs", null, React.createElement("clipPath", {
  id: "clip0"
}, React.createElement("path", {
  d: "M0 0h24v24H0z"
}))));
var IconPhone = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  d: "M22.998 19.916a3 3 0 01-3.288 2.998 20.778 20.778 0 01-9.058-3.22 20.49 20.49 0 01-6.303-6.3A20.804 20.804 0 011.122 4.27 3 3 0 014.108 1h2.99A3.002 3.002 0 0110.1 3.59c.116.885.333 1.754.644 2.588a3.002 3.002 0 01-.679 3.17l-.717.716a15.002 15.002 0 004.586 4.586l.721-.721a2.999 2.999 0 013.163-.676c.836.312 1.706.529 2.6.647a3 3 0 012.58 3.031v2.985zm-2-2.996v-.025a.998.998 0 00-.85-1.013 13.847 13.847 0 01-3.032-.756.998.998 0 00-1.05.221l-1.27 1.27a1 1 0 01-1.202.162 17 17 0 01-6.375-6.375 1 1 0 01.162-1.201l1.266-1.266a1 1 0 00.224-1.057 13.817 13.817 0 01-.753-3.02A1.003 1.003 0 007.108 3H4.11a1 1 0 00-.996 1.074 18.8 18.8 0 002.92 8.24 18.512 18.512 0 005.7 5.697 18.775 18.775 0 008.175 2.913 1 1 0 001.09-1.004v-3z"
}));
var IconPlaneArrival = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 25"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M11.568 1.088C9.614.529 7.759 2.233 8.15 4.228l.6 3.056-3.13-.82-.081-.265a3.75 3.75 0 00-2.193-2.385A1.71 1.71 0 001 5.402v4.625c0 1.066.72 1.998 1.751 2.269l16.506 4.323a3.18 3.18 0 002.563-.425c2.282-1.51 1.722-5.005-.919-5.725l-.183-.05-.01-.003-4.57-1.197-3.401-7.142a1.86 1.86 0 00-1.17-.99zm-1.455 2.755a.721.721 0 01.846-.846l3.573 7.502.2.42.45.117 5.014 1.314.18.048c.98.268 1.189 1.567.34 2.128a1.18 1.18 0 01-.952.158L3.258 10.361A.345.345 0 013 10.027V5.894c.295.22.516.53.626.89l.245.8.163.532.54.142 5.21 1.364 1.54.404-.306-1.563-.905-4.62zM23 19H1a1 1 0 100 2h22a1 1 0 100-2zm0 3.625H1a1 1 0 100 2h22a1 1 0 100-2z",
  clipRule: "evenodd"
}));
var IconPlus = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M13 3a1 1 0 10-2 0v8H3a1 1 0 100 2h8v8a1 1 0 102 0v-8h8a1 1 0 100-2h-8V3z",
  clipRule: "evenodd"
}));
var IconPower = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M13 2a1 1 0 10-2 0v10a1 1 0 102 0V2zM6.337 7.347a1 1 0 10-1.414-1.414 10 10 0 1014.144 0 1 1 0 10-1.414 1.414 8 8 0 11-11.316 0z",
  clipRule: "evenodd"
}));
var IconRefresh = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M8.141 4.996a8 8 0 019.543 1.372L20.528 9H17a1 1 0 100 2h6a1 1 0 001-1V4a1 1 0 10-2 0v3.637l-2.934-2.715a10 10 0 102.367 10.411 1 1 0 10-1.886-.666 8 8 0 11-11.406-9.67z",
  clipRule: "evenodd"
}));
var IconRoadSign = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M5 3h18a1 1 0 011 1v8a1 1 0 01-1 1h-3v7a1 1 0 11-2 0v-7H6v7a1 1 0 11-2 0v-7H1a1 1 0 01-1-1V4a1 1 0 011-1h4zM2.586 5H2v.586L2.586 5zM2 8.414V11h2.134a.977.977 0 01.159-.207L10.086 5H5.414L2 8.414zM12.914 5l-6 6h4.672l6-6h-4.672zm7.5 0l-6 6h4.172L22 7.586V5h-1.586zM22 10.414l-.586.586H22v-.586z",
  clipRule: "evenodd"
}));
var IconSadFace = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z",
  clipRule: "evenodd"
}), React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 15c-2.005 0-2.934 1.104-3.106 1.447a1 1 0 11-1.788-.894C7.6 14.563 9.205 13 12 13s4.4 1.563 4.894 2.553a1 1 0 11-1.788.894C14.934 16.104 14.005 15 12 15zM8 9a1 1 0 011-1h.01a1 1 0 010 2H9a1 1 0 01-1-1zm6 0a1 1 0 011-1h.01a1 1 0 110 2H15a1 1 0 01-1-1z",
  clipRule: "evenodd"
}));
var IconSearch = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M4 11a7 7 0 1112.041 4.856.998.998 0 00-.185.185A7 7 0 014 11zm12.618 7.032a9 9 0 111.414-1.414l3.675 3.675a1 1 0 01-1.414 1.414l-3.675-3.675z",
  clipRule: "evenodd"
}));
var IconSeatbelt = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("g", {
  clipPath: "url(#clip0)"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M21.707 1.707A1 1 0 0020.293.293L16.98 3.606l-1.262-1.302a1 1 0 00-1.425-.011l-2 2A1 1 0 0012 5v2.586L9.793 9.793a1 1 0 000 1.414l3 3a1 1 0 001.414 0L16.414 12H19a1 1 0 00.707-.293l2-2a1 1 0 000-1.414L20.414 7l3.293-3.293a1 1 0 00-1.414-1.414l-3.304 3.304-.595-.577 3.313-3.313zM16.273 5.75l2.025 1.964L19.586 9l-1 1H16a1 1 0 00-.707.293L13.5 12.086 11.914 10.5l1.793-1.793A1 1 0 0014 8V5.414l.989-.989 1.262 1.302a.869.869 0 00.022.022zm-8.566 5.544a1 1 0 00-1.496.093l-3.5 4.5a1 1 0 00.082 1.321l.293.293-2.793 2.793a1 1 0 101.414 1.414L4.5 18.914l.586.586-2.793 2.793a1 1 0 101.414 1.414L6.5 20.914l.293.293a1 1 0 001.32.082l4.5-3.5a1 1 0 00.094-1.496l-5-5zm-2.876 5.124l2.263-2.909 3.398 3.398-2.91 2.263-2.75-2.752zm16.876-.71a1 1 0 00-1.414-1.414L16 18.586V17a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 100-2h-1.586l4.293-4.293z",
  clipRule: "evenodd"
})), React.createElement("defs", null, React.createElement("clipPath", {
  id: "clip0"
}, React.createElement("path", {
  d: "M0 0h24v24H0z"
}))));
var IconShield = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M11.649 1.064a1 1 0 01.702 0l8 3A1 1 0 0121 5v7c0 3.446-2.282 6.2-4.341 8.003a22.684 22.684 0 01-4.104 2.836 8.28 8.28 0 01-.076.04l-.022.01-.006.004h-.002s-.002.001-.449-.893l-.448.894-.003-.001-.006-.004-.022-.01a8.28 8.28 0 01-.35-.188 22.686 22.686 0 01-3.83-2.689C5.281 18.2 3 15.447 3 12V5a1 1 0 01.649-.936l8-3zM12 22l-.448.894c.282.14.614.141.895 0L12 22zm0-1.137a20.69 20.69 0 003.341-2.365C17.282 16.8 19 14.553 19 12V5.693l-7-2.625-7 2.625V12c0 2.554 1.718 4.8 3.659 6.497A20.692 20.692 0 0012 20.863z",
  clipRule: "evenodd"
}));
var IconShoppingBag = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M5.2 1.4A1 1 0 016 1h12a1 1 0 01.8.4l3 4a1 1 0 01.2.6v14a3 3 0 01-3 3H5a3 3 0 01-3-3V6a1 1 0 01.2-.6l3-4zM6.5 3L5 5h14l-1.5-2h-11zM4 20V7h16v13a1 1 0 01-1 1H5a1 1 0 01-1-1zm5-10a1 1 0 10-2 0 5 5 0 1010 0 1 1 0 10-2 0 3 3 0 01-6 0z",
  clipRule: "evenodd"
}));
var IconSmartphone = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M6 4a1 1 0 011-1h10a1 1 0 011 1v16a1 1 0 01-1 1H7a1 1 0 01-1-1V4zm1-3a3 3 0 00-3 3v16a3 3 0 003 3h10a3 3 0 003-3V4a3 3 0 00-3-3H7zm5 16a1 1 0 100 2h.01a1 1 0 100-2H12z",
  clipRule: "evenodd"
}));
var IconStarSolid = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12.897 1.557a1 1 0 00-1.794 0l-2.857 5.79-6.39.934a1 1 0 00-.554 1.705l4.623 4.503-1.09 6.362a1 1 0 001.45 1.054L12 18.9l5.715 3.005a1 1 0 001.45-1.054l-1.09-6.362 4.623-4.503a1 1 0 00-.553-1.705l-6.39-.935-2.858-5.789z",
  clipRule: "evenodd"
}));
var IconStar = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 1a1 1 0 01.897.557l2.857 5.79 6.39.934a1 1 0 01.554 1.705l-4.623 4.503 1.09 6.362a1 1 0 01-1.45 1.054L12 18.9l-5.715 3.005a1 1 0 01-1.45-1.054l1.09-6.362-4.623-4.503a1 1 0 01.553-1.705l6.39-.935 2.858-5.789A1 1 0 0112 1zm0 3.26L9.807 8.702a1 1 0 01-.752.546l-4.907.718 3.55 3.457a1 1 0 01.288.885l-.838 4.883 4.386-2.307a1 1 0 01.931 0l4.387 2.307-.838-4.883a1 1 0 01.288-.885l3.55-3.457-4.907-.718a1 1 0 01-.752-.546L12 4.259z",
  clipRule: "evenodd"
}));
var IconSteeringWheel = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 3a9 9 0 00-8.972 9.712l6.082-1.52a3.001 3.001 0 015.78 0l6.082 1.52A9 9 0 0012 3zm-1 17.945a9.009 9.009 0 01-7.594-6.266l5.85-1.463A3.01 3.01 0 0011 14.83v6.116zm2 0a9.009 9.009 0 007.594-6.266l-5.85-1.463A3.01 3.01 0 0113 14.83v6.116zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm11-1a1 1 0 100 2 1 1 0 000-2z",
  clipRule: "evenodd"
}));
var IconSun = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M12 0a1 1 0 011 1v2a1 1 0 11-2 0V1a1 1 0 011-1zm0 8a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0zm7 9a1 1 0 10-2 0v2a1 1 0 102 0v-2zM3.513 3.513a1 1 0 011.414 0l1.42 1.42a1 1 0 01-1.414 1.414l-1.42-1.42a1 1 0 010-1.414zm15.554 14.14a1 1 0 00-1.414 1.414l1.42 1.42a1 1 0 001.414-1.414l-1.42-1.42zM0 12a1 1 0 011-1h2a1 1 0 110 2H1a1 1 0 01-1-1zm21-1a1 1 0 100 2h2a1 1 0 100-2h-2zM6.347 17.653a1 1 0 010 1.414l-1.42 1.42a1 1 0 01-1.414-1.414l1.42-1.42a1 1 0 011.414 0zm14.14-12.726a1 1 0 00-1.414-1.414l-1.42 1.42a1 1 0 001.414 1.414l1.42-1.42z",
  clipRule: "evenodd"
}));
var IconTag = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M23 2a1 1 0 00-1-1H12a1 1 0 00-.706.293L2.702 9.887a3 3 0 000 4.23l.002.002 7.17 7.17a3 3 0 004.244.001l8.589-8.58a1 1 0 00.293-.708V2zm-2 1v8.587l-8.297 8.29a1 1 0 01-1.414 0l-7.168-7.17H4.12a1 1 0 010-1.41L12.416 3H21zm-3 4a1 1 0 00-1-1h-.01a1 1 0 100 2H17a1 1 0 001-1z",
  clipRule: "evenodd"
}));
var IconTrash = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M9.293 3.293A1 1 0 0110 3h4a1 1 0 011 1v1H9V4a1 1 0 01.293-.707zM7 5V4a3 3 0 013-3h4a3 3 0 013 3v1h4a1 1 0 110 2h-1v13a3 3 0 01-3 3H7a3 3 0 01-3-3V7H3a1 1 0 010-2h4zM6 7v13a1 1 0 001 1h10a1 1 0 001-1V7H6zm4 3a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm5 7v-6a1 1 0 10-2 0v6a1 1 0 102 0z",
  clipRule: "evenodd"
}));
var IconTwitter = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("g", {
  clipPath: "url(#clip0)"
}, React.createElement("path", {
  d: "M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
})), React.createElement("defs", null, React.createElement("clipPath", {
  id: "clip0"
}, React.createElement("path", {
  d: "M0 0h24v24H0z"
}))));
var IconUserGroup = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M6 7a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10A5 5 0 009 2zM5 14a5 5 0 00-5 5v2a1 1 0 001 1h16a1 1 0 001-1v-2a5 5 0 00-5-5H5zm-2.121 2.879A3 3 0 015 16h8a3 3 0 013 3v1H2v-1a3 3 0 01.879-2.121zm16.153-1.999a1 1 0 011.218-.718A5 5 0 0124 18.999V21a1 1 0 11-2 0v-2a3 3 0 00-2.25-2.902 1 1 0 01-.718-1.218zM16.248 2.161a1 1 0 10-.496 1.938 3 3 0 010 5.812 1 1 0 10.496 1.938 5 5 0 000-9.688z",
  clipRule: "evenodd"
}));
var IconUserOff = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("g", {
  clipPath: "url(#clip0)"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M1.707.293A1 1 0 00.293 1.707l7.025 7.025c.012.048.027.096.046.143a5.015 5.015 0 002.478 2.636.998.998 0 00.35.095L12.586 14H8a5 5 0 00-5 5v2a1 1 0 001 1h16c.17 0 .33-.042.47-.117l1.823 1.824a1 1 0 001.414-1.414l-22-22zM18.586 20l-4.004-4.003A1.019 1.019 0 0114.5 16H8a3 3 0 00-3 3v1h13.586zM12 4c-.896 0-1.7.391-2.25 1.016a1 1 0 11-1.5-1.324 5 5 0 116.875 7.21 1 1 0 11-1.25-1.56A3 3 0 0012 4z",
  clipRule: "evenodd"
})), React.createElement("defs", null, React.createElement("clipPath", {
  id: "clip0"
}, React.createElement("path", {
  d: "M0 0h24v24H0z"
}))));
var IconUser = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M9 7a3 3 0 116 0 3 3 0 01-6 0zm3-5a5 5 0 100 10 5 5 0 000-10zM8 14a5 5 0 00-5 5v2a1 1 0 001 1h16a1 1 0 001-1v-2a5 5 0 00-5-5H8zm-2.121 2.879A3 3 0 018 16h8a3 3 0 013 3v1H5v-1a3 3 0 01.879-2.121z",
  clipRule: "evenodd"
}));
var IconVisa = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  d: "M17.445 8.623a4.991 4.991 0 00-1.74-.301c-1.92 0-3.275.968-3.285 2.355-.012 1.02.964 1.594 1.701 1.936.757.35 1.01.57 1.008.885-.005.477-.605.693-1.162.693-.766 0-1.186-.107-1.831-.375l-.239-.111-.271 1.598c.466.195 1.306.362 2.175.375 2.041 0 3.375-.961 3.391-2.439.016-.813-.51-1.43-1.621-1.938-.674-.33-1.094-.551-1.094-.886 0-.296.359-.612 1.109-.612a3.56 3.56 0 011.455.273l.18.081.271-1.544-.047.01zm4.983-.17h-1.5c-.467 0-.816.127-1.021.591l-2.885 6.534h2.041l.408-1.07 2.49.002c.061.25.24 1.068.24 1.068H24l-1.572-7.125zM9.66 8.393h1.943l-1.215 7.129H8.444L9.66 8.391v.002zm-4.939 3.929l.202.99 1.901-4.859h2.059l-3.061 7.115H3.768l-1.68-6.026a.398.398 0 00-.18-.237A8.211 8.211 0 000 8.598l.025-.15h3.131c.424.016.766.15.883.604l.682 3.273v-.003zm15.308.727l.775-1.994c-.01.02.16-.412.258-.68l.133.615.449 2.057h-1.615v.002z"
}), React.createElement("defs", null, React.createElement("linearGradient", {
  id: "paint0_linear",
  x1: "24",
  x2: "1",
  y1: "8",
  y2: "8",
  gradientUnits: "userSpaceOnUse"
}, React.createElement("stop", {
  stopColor: "#002898"
}), React.createElement("stop", {
  offset: "1",
  stopColor: "#11185C"
}))));
var IconVolume2 = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M19.777 4.223a1 1 0 10-1.414 1.414 9 9 0 010 12.726 1 1 0 101.414 1.414 11 11 0 000-15.554zm-3.53 3.53a1 1 0 10-1.414 1.414 4 4 0 010 5.656 1 1 0 101.414 1.414 6 6 0 000-8.484zM12 5a1 1 0 00-1.625-.78L5.65 8H2a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.725 3.78A1 1 0 0012 19V5zM6.625 9.78L10 7.08v9.84l-3.375-2.7A1 1 0 006 14H3v-4h3a1 1 0 00.625-.22z",
  clipRule: "evenodd"
}));
var IconWallet = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  fillRule: "evenodd",
  d: "M15.45 1.403A2 2 0 0118 3.326V5h2a2 2 0 012 2v12a2 2 0 01-2 2H3a1 1 0 01-1-1V6.754a2 2 0 011.45-1.923l12-3.428zM18 7v1h2V7h-2zm2 3h-2v5.246a2 2 0 01-1.45 1.923L10.14 19H20v-9zM4 18.674V6.754l12-3.428v11.92L4 18.674zM13 8a1 1 0 011 1v.05a1 1 0 11-2 0V9a1 1 0 011-1z",
  clipRule: "evenodd"
}));
var IconWaze = React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, React.createElement("path", {
  d: "M13.609 1.265c-.475 0-.953.032-1.422.095a11.357 11.357 0 00-5.441 2.302C5.007 5.035 3.885 6.802 3.5 8.768c-.114.585-.163 1.232-.21 1.858-.074.979-.15 1.992-.462 2.653-.213.453-.53.754-1.389.754a1.246 1.246 0 00-.995 1.995c2.905 3.854 7.799 4.3 11.227 4.3l.253-.001h.816c1.598 0 3.289-.079 4.83-.653a10.422 10.422 0 003.536-2.242c1.113-1.068 1.93-2.328 2.362-3.643.487-1.48.61-2.969.363-4.423a8.97 8.97 0 00-1.605-3.788c-.943-1.303-2.234-2.39-3.731-3.146a10.906 10.906 0 00-4.887-1.167zm0 1.246c5.613 0 10.61 5.011 8.677 10.889-.78 2.367-2.948 4.285-5.15 5.107-1.437.535-3.114.575-4.395.575l-.632-.001a29.748 29.748 0 00-.437 0c-3.218 0-7.66-.392-10.232-3.803 3.523 0 2.828-3.937 3.284-6.271.694-3.558 4.214-5.95 7.63-6.412.42-.057.84-.084 1.255-.084z"
}), React.createElement("path", {
  d: "M10.038 19.971a2.5 2.5 0 11-4.982.428 2.5 2.5 0 014.982-.428zm8.574 0a2.5 2.5 0 11-4.982.429 2.5 2.5 0 014.982-.428zM11.508 8.716a1.196 1.196 0 11-2.392 0 1.196 1.196 0 012.392 0zm5.714-.186a1.196 1.196 0 11-2.393 0 1.196 1.196 0 012.393 0zm-4.036 6.601a4.591 4.591 0 01-2.798-.94c-.803-.618-1.32-1.472-1.42-2.342a.623.623 0 011.237-.142c.152 1.327 1.738 2.213 3.072 2.177 1.7-.045 2.824-1.061 3.055-2.042a.624.624 0 011.212.285c-.188.8-.704 1.543-1.453 2.09-.779.57-1.74.885-2.78.913a5.68 5.68 0 01-.125.001z"
}));

var SVGS = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IconAlertOctagon: IconAlertOctagon,
  IconArrowDownCircle: IconArrowDownCircle,
  IconArrowDown: IconArrowDown,
  IconArrowLeftCircle: IconArrowLeftCircle,
  IconArrowLeft: IconArrowLeft,
  IconArrowRightCircle: IconArrowRightCircle,
  IconArrowRight: IconArrowRight,
  IconArrowUpCircle: IconArrowUpCircle,
  IconArrowUpRightCircle: IconArrowUpRightCircle,
  IconArrowUpRight: IconArrowUpRight,
  IconArrowUp: IconArrowUp,
  IconBackInTime: IconBackInTime,
  IconBellOff: IconBellOff,
  IconBell: IconBell,
  IconCalendar: IconCalendar,
  IconCamera: IconCamera,
  IconCancel: IconCancel,
  IconCandy: IconCandy,
  IconCarFront: IconCarFront,
  IconCarSide: IconCarSide,
  IconCash: IconCash,
  IconChartBar: IconChartBar,
  IconChartPie: IconChartPie,
  IconCheck: IconCheck,
  IconChevronDown: IconChevronDown,
  IconChevronLeft: IconChevronLeft,
  IconChevronRight: IconChevronRight,
  IconChevronUpDown: IconChevronUpDown,
  IconChevronUp: IconChevronUp,
  IconClock: IconClock,
  IconCoffee: IconCoffee,
  IconCreditCard: IconCreditCard,
  IconCross: IconCross,
  IconDownload: IconDownload,
  IconEmojiAngry: IconEmojiAngry,
  IconEmojiMistake: IconEmojiMistake,
  IconEmojiSmile: IconEmojiSmile,
  IconEuro: IconEuro,
  IconEyeClose: IconEyeClose,
  IconEyeOpen: IconEyeOpen,
  IconFacebook: IconFacebook,
  IconFileMinus: IconFileMinus,
  IconFilePlus: IconFilePlus,
  IconFileText: IconFileText,
  IconFile: IconFile,
  IconFire: IconFire,
  IconGear: IconGear,
  IconGlassWine: IconGlassWine,
  IconGlobe: IconGlobe,
  IconHeart: IconHeart,
  IconHelpCircle: IconHelpCircle,
  IconInfo: IconInfo,
  IconLoader: IconLoader,
  IconLock: IconLock,
  IconLolipop: IconLolipop,
  IconMail: IconMail,
  IconMapPinOff: IconMapPinOff,
  IconMapPin: IconMapPin,
  IconMenu: IconMenu,
  IconMinus: IconMinus,
  IconMoon: IconMoon,
  IconNavigation: IconNavigation,
  IconNumber: IconNumber,
  IconOption: IconOption,
  IconPen: IconPen,
  IconPhoneMissed: IconPhoneMissed,
  IconPhoneOff: IconPhoneOff,
  IconPhone: IconPhone,
  IconPlaneArrival: IconPlaneArrival,
  IconPlus: IconPlus,
  IconPower: IconPower,
  IconRefresh: IconRefresh,
  IconRoadSign: IconRoadSign,
  IconSadFace: IconSadFace,
  IconSearch: IconSearch,
  IconSeatbelt: IconSeatbelt,
  IconShield: IconShield,
  IconShoppingBag: IconShoppingBag,
  IconSmartphone: IconSmartphone,
  IconStarSolid: IconStarSolid,
  IconStar: IconStar,
  IconSteeringWheel: IconSteeringWheel,
  IconSun: IconSun,
  IconTag: IconTag,
  IconTrash: IconTrash,
  IconTwitter: IconTwitter,
  IconUserGroup: IconUserGroup,
  IconUserOff: IconUserOff,
  IconUser: IconUser,
  IconVisa: IconVisa,
  IconVolume2: IconVolume2,
  IconWallet: IconWallet,
  IconWaze: IconWaze
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  vertical-align: middle;\n\n  svg {\n    display: block;\n    fill: ", ";\n    width: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var NAMES = Object.keys(SVGS);
var ICONS = NAMES.reduce(function (icons, icon) {
  return _objectSpread2({}, icons, _defineProperty({}, icon, icon));
}, {});
var SIZES = {
  S: 's',
  M: 'm',
  L: 'l'
};
var sizes = Object.values(SIZES);
var styles = {
  iconSize: function iconSize(_ref) {
    var size = _ref.size;
    return "var(--f-iconSize--".concat(size, ")");
  }
};
var Icon = styled('i').attrs(function (_ref2) {
  var icon = _ref2.icon;
  return {
    className: 'f-Icon',
    children: SVGS[icon]
  };
})(_templateObject(), styles.iconSize, styles.iconSize, function (_ref3) {
  var iconColor = _ref3.iconColor;
  return iconColor || 'currentColor';
}, styles.iconSize);
Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(NAMES).isRequired,
  size: PropTypes.oneOf(sizes),
  iconColor: PropTypes.string
};
Icon.defaultProps = {
  size: SIZES.M
};
Icon.ICONS = ICONS;
Icon.NAMES = NAMES;
Icon.SIZES = SIZES;

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 600ms linear infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var sizes$1 = Object.values(Icon.SIZES);
var rotate = keyframes(_templateObject$1());
var Spinner = styled(function (_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return React.createElement(Icon, _extends({
    className: classnames('f-Spinner', className),
    icon: Icon.ICONS.IconLoader
  }, props));
})(_templateObject2(), rotate);
Spinner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(sizes$1)
};

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  margin: ", ";\n  padding: var(--f-space--m) var(--f-space--xl);\n  font-size: var(--f-fontSize--s);\n  font-weight: var(--f-fontWeight--bold);\n  line-height: var(--f-lineHeight--m);\n  border: 0;\n  border-radius: var(--f-space--xxl);\n  outline: none;\n  transition: background-color 0.2s ease-out;\n  cursor: ", ";\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:hover {\n    background-color: ", ";\n    color: var(--f-color-text--white);\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n\n  @media (max-width: 460px) {\n    /* --f-breakpoint--s */\n    width: 100%;\n    padding: var(--f-space--l) var(--f-space--xl);\n    text-align: center;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  opacity: ", ";\n  pointer-events: ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var INTENTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var VARIANTS = {
  OUTLINE: 'outline',
  MINIMAL: 'minimal'
};
var intents = Object.values(INTENTS);
var variants = Object.values(VARIANTS);
var styles$1 = {
  color: function color(_ref) {
    var disabled = _ref.disabled,
        variant = _ref.variant,
        intent = _ref.intent;

    if (disabled) {
      return 'var(--f-color-text--tertiary) !important';
    }

    if (variants.includes(variant) && intent === INTENTS.PRIMARY) {
      return 'var(--f-color-brandPrimary)';
    }

    if (variants.includes(variant) && intent === INTENTS.SECONDARY) {
      return 'var(--f-color-brandSecondary)';
    }

    return 'var(--f-color-text--white)';
  },
  backgroundColor: function backgroundColor(_ref2) {
    var intent = _ref2.intent,
        disabled = _ref2.disabled,
        variant = _ref2.variant;

    if (disabled) {
      return 'var(--f-color-element--primary) !important';
    }

    if (variants.includes(variant)) {
      return 'var(--f-color-text--white)';
    }

    if (intent === INTENTS.PRIMARY) {
      return 'var(--f-color-brandPrimary)';
    }

    if (intent === INTENTS.SECONDARY) {
      return 'var(--f-color-brandSecondary)';
    }

    return undefined;
  },
  boxShadow: function boxShadow(_ref3) {
    var intent = _ref3.intent,
        variant = _ref3.variant,
        disabled = _ref3.disabled;

    if (disabled) {
      return undefined;
    }

    if (variant === VARIANTS.OUTLINE && intent === INTENTS.PRIMARY) {
      return '0 0 0 1px var(--f-color-brandPrimary)';
    }

    if (variant === VARIANTS.OUTLINE && intent === INTENTS.SECONDARY) {
      return '0 0 0 1px var(--f-color-brandSecondary)';
    }

    return undefined;
  },
  cursor: function cursor(_ref4) {
    var disabled = _ref4.disabled,
        isLoading = _ref4.isLoading;

    if (disabled) {
      return 'not-allowed !important';
    }

    if (isLoading) {
      // Don't add cursor value, use default.
      return undefined;
    }

    return 'pointer';
  },
  hover: {
    backgroundColor: function backgroundColor(_ref5) {
      var intent = _ref5.intent;

      if (intent === INTENTS.PRIMARY) {
        return 'var(--f-color-brandPrimary--light)';
      }

      if (intent === INTENTS.SECONDARY) {
        return 'var(--f-color-brandSecondary--light)';
      }

      return undefined;
    }
  },
  active: {
    backgroundColor: function backgroundColor(_ref6) {
      var intent = _ref6.intent;

      if (intent === INTENTS.PRIMARY) {
        return 'var(--f-color-brandPrimary)';
      }

      if (intent === INTENTS.SECONDARY) {
        return 'var(--f-color-brandSecondary)';
      }

      return undefined;
    }
  }
};
var Content = styled.span(_templateObject$2(), function (_ref7) {
  var isLoading = _ref7.isLoading;
  return isLoading && 0;
}, function (_ref8) {
  var isLoading = _ref8.isLoading;
  return isLoading && 'none';
});
var SpinnerContainer = styled('div')(_templateObject2$1());
var Button = styled(function (_ref9) {
  var isLoading = _ref9.isLoading,
      children = _ref9.children,
      margin = _ref9.margin,
      intent = _ref9.intent,
      variant = _ref9.variant,
      props = _objectWithoutProperties(_ref9, ["isLoading", "children", "margin", "intent", "variant"]);

  return React.createElement("button", props, isLoading && React.createElement(SpinnerContainer, null, React.createElement(Spinner, {
    size: 'l'
  })), React.createElement(Content, {
    isLoading: isLoading
  }, children));
}).attrs(function () {
  return {
    className: 'f-Button'
  };
})(_templateObject3(), function (_ref10) {
  var margin = _ref10.margin;
  return margin !== null && margin !== void 0 ? margin : 'var(--f-space--m) 0';
}, styles$1.cursor, styles$1.color, styles$1.backgroundColor, styles$1.boxShadow, styles$1.hover.backgroundColor, styles$1.active.backgroundColor);
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  intent: PropTypes.oneOf(intents),
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(variants),
  margin: PropTypes.string
};
Button.defaultProps = {
  disabled: false,
  intent: INTENTS.PRIMARY,
  isLoading: false,
  type: 'button'
};
Button.INTENTS = INTENTS;
Button.VARIANTS = VARIANTS;

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var VARIANTS$1 = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  content: 'content',
  contentBold: 'contentBold',
  subContent: 'subContent',
  subContentBold: 'subContentBold'
};
var styles$2 = {
  fontSize: function fontSize(_ref) {
    var _variants;

    var variant = _ref.variant;
    var variants = (_variants = {}, _defineProperty(_variants, VARIANTS$1.h1, 'var(--f-fontSize--xxl)'), _defineProperty(_variants, VARIANTS$1.h2, 'var(--f-fontSize--xl)'), _defineProperty(_variants, VARIANTS$1.h3, 'var(--f-fontSize--l)'), _defineProperty(_variants, VARIANTS$1.h4, 'var(--f-fontSize--m)'), _defineProperty(_variants, VARIANTS$1.h5, 'var(--f-fontSize--s)'), _defineProperty(_variants, VARIANTS$1.h6, 'var(--f-fontSize--xs)'), _defineProperty(_variants, VARIANTS$1.content, 'var(--f-fontSize--m)'), _defineProperty(_variants, VARIANTS$1.contentBold, 'var(--f-fontSize--m)'), _defineProperty(_variants, VARIANTS$1.subContent, 'var(--f-fontSize--s)'), _defineProperty(_variants, VARIANTS$1.subContentBold, 'var(--f-fontSize--s)'), _variants);
    return variants[variant] || undefined;
  },
  lineHeight: function lineHeight(_ref2) {
    var _variants2;

    var variant = _ref2.variant;
    var variants = (_variants2 = {}, _defineProperty(_variants2, VARIANTS$1.h1, 'var(--f-lineHeight--xl)'), _defineProperty(_variants2, VARIANTS$1.h2, 'var(--f-lineHeight--l)'), _defineProperty(_variants2, VARIANTS$1.h3, 'var(--f-lineHeight--m)'), _defineProperty(_variants2, VARIANTS$1.h4, 'var(--f-lineHeight--s)'), _defineProperty(_variants2, VARIANTS$1.h5, 'var(--f-lineHeight--s)'), _defineProperty(_variants2, VARIANTS$1.h6, 'var(--f-lineHeight--s)'), _defineProperty(_variants2, VARIANTS$1.content, 'var(--f-lineHeight--m)'), _defineProperty(_variants2, VARIANTS$1.contentBold, 'var(--f-lineHeight--m)'), _defineProperty(_variants2, VARIANTS$1.subContent, 'var(--f-lineHeight--m)'), _defineProperty(_variants2, VARIANTS$1.subContentBold, 'var(--f-lineHeight--m)'), _variants2);
    return variants[variant] || undefined;
  },
  fontWeight: function fontWeight(_ref3) {
    var _variants3;

    var variant = _ref3.variant;
    var variants = (_variants3 = {}, _defineProperty(_variants3, VARIANTS$1.h1, 'var(--f-fontWeight--black)'), _defineProperty(_variants3, VARIANTS$1.h2, 'var(--f-fontWeight--black)'), _defineProperty(_variants3, VARIANTS$1.h3, 'var(--f-fontWeight--black)'), _defineProperty(_variants3, VARIANTS$1.h4, 'var(--f-fontWeight--black)'), _defineProperty(_variants3, VARIANTS$1.h5, 'var(--f-fontWeight--black)'), _defineProperty(_variants3, VARIANTS$1.h6, 'var(--f-fontWeight--black)'), _defineProperty(_variants3, VARIANTS$1.content, 'var(--f-fontWeight--normal)'), _defineProperty(_variants3, VARIANTS$1.subContent, 'var(--f-fontWeight--normal)'), _defineProperty(_variants3, VARIANTS$1.contentBold, 'var(--f-fontWeight--bold)'), _defineProperty(_variants3, VARIANTS$1.subContentBold, 'var(--f-fontWeight--bold)'), _variants3);
    return variants[variant] || undefined;
  }
};
var UiText = styled('p').attrs(function (_ref4) {
  var variant = _ref4.variant;
  return {
    className: "f-UiText f-UiText--".concat(VARIANTS$1[variant])
  };
})(_templateObject$3(), styles$2.fontWeight, styles$2.fontSize, styles$2.lineHeight);
UiText.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(VARIANTS$1))
};
UiText.defaultProps = {
  className: undefined,
  variant: VARIANTS$1.content
};
UiText.VARIANTS = VARIANTS$1;

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  color: var(--f-color-text--secondary);\n\n  .is-invalid + & {\n    color: var(--f-color-element--error);\n  }\n\n  .is-valid + & {\n    color: var(--f-color-element--success);\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Helper = styled(UiText).attrs(function () {
  return {
    as: 'small',
    variant: UiText.VARIANTS.subContent,
    className: 'f-Helper'
  };
})(_templateObject$4());
Helper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Helper.defaultProps = {
  className: undefined
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-top: var(--f-space--m);\n  margin-bottom: var(--f-space--m);\n  color: var(--f-color-text--primary);\n\n  & + .f-FormEl-wrapper {\n    margin-top: 0;\n  }\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled('label').attrs(function () {
  return {
    className: 'f-Label',
    variant: UiText.VARIANTS.subContentBold,
    as: 'label'
  };
})(_templateObject$5());
Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired
};
Label.defaultProps = {
  className: undefined
};

var FormField = React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      helper = _ref.helper,
      id = _ref.id,
      label = _ref.label;
  return React.createElement("div", {
    className: classnames('f-FormField', className),
    ref: ref
  }, label && React.createElement(Label, {
    htmlFor: id
  }, label), children, helper && React.createElement(Helper, null, helper));
});
FormField.displayName = 'FormField';
FormField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  helper: PropTypes.node,
  label: PropTypes.node,
  id: PropTypes.string.isRequired
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  color: var(--f-color-text--primary);\n  margin-top: ", ";\n  margin-bottom: var(--f-space--m);\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var HEADING_LEVELS = [1, 2, 3, 4, 5, 6];
var styles$3 = {
  marginTop: function marginTop(_ref) {
    var level = _ref.level;

    if (level === 1) {
      return "var(--f-space--xl)";
    }

    if (level === 2) {
      return "var(--f-space--l)";
    }

    return 'var(--f-space--m)';
  }
};
var Heading = styled(UiText).attrs(function (_ref2) {
  var as = _ref2.as,
      level = _ref2.level;
  return {
    as: as || "h".concat(level),
    variant: "h".concat(level),
    className: 'f-Heading'
  };
})(_templateObject$6(), styles$3.marginTop);
Heading.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.oneOf(HEADING_LEVELS)
};
Heading.defaultProps = {
  level: 1
};
Heading.LEVELS = HEADING_LEVELS;

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  padding: var(--f-space--m);\n  line-height: 1;\n  border-radius: 50%;\n  color: var(--f-color-icon--dark);\n\n  &:hover {\n    background-color: var(--f-color-element--inactive);\n    color: var(--f-color-icon--dark);\n  }\n\n  & + & {\n    margin-left: var(--f-space--m);\n  }\n\n  ", " {\n    display: block;\n  }\n\n  @media (max-width: 460px) {\n    /* --f-breakpoint--s */\n    width: auto;\n    flex-grow: inherit;\n    padding: var(--f-space--l);\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var sizes$2 = Object.values(Icon.SIZES);

var IconButtonComponent = function IconButtonComponent(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      size = _ref.size,
      iconColor = _ref.iconColor,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, ["className", "icon", "size", "iconColor", "disabled"]);

  return React.createElement(Button, _extends({
    className: classnames('f-Button--icon', className),
    intent: Button.INTENTS.SECONDARY,
    variant: Button.VARIANTS.MINIMAL,
    disabled: disabled
  }, props), React.createElement(Icon, {
    icon: icon,
    size: size,
    iconColor: !disabled && iconColor
  }));
};

IconButtonComponent.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Icon.NAMES).isRequired,
  size: PropTypes.oneOf(sizes$2),
  iconColor: PropTypes.string,
  disabled: PropTypes.bool
};
var IconButton = styled(IconButtonComponent)(_templateObject$7(), Icon);
IconButton.displayName = 'IconButton';
IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Icon.NAMES).isRequired,
  size: PropTypes.oneOf(sizes$2),
  iconColor: PropTypes.string
};
IconButton.defaultProps = {
  size: Icon.SIZES.L
};
IconButton.ICONS = Icon.ICONS;

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  min-width: 12.5rem;\n  margin-top: var(--f-space--m);\n  margin-bottom: var(--f-space--m);\n  color: var(--f-color-text--primary);\n\n  & + ", " {\n    color: ", ";\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var styles$4 = {
  helperColor: function helperColor(props) {
    if (props.invalid) {
      return 'var(--f-color-element--error)';
    }

    if (props.valid) {
      return 'var(--f-color-element--success)';
    }

    return undefined;
  }
};
var FormElementWrapper = styled('div').attrs(function () {
  return {
    className: 'f-FormEl-wrapper'
  };
})(_templateObject$8(), Helper, styles$4.helperColor);

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n  padding: var(--f-space--m) var(--f-space--xl);\n  border: 0;\n  border-radius: 1.25rem;\n  font-weight: var(--f-fontWeight--normal);\n  font-size: var(--f-fontSize--m);\n  line-height: var(--f-lineHeight--m);\n  color: var(--f-color-text--secondary);\n  outline: none;\n  appearance: none;\n  transition: box-shadow 0.1s ease-out;\n\n  background-color: ", ";\n  box-shadow: inset 0 0 0 1px ", ";\n  padding-right: ", ";\n  cursor: ", ";\n\n  &:hover {\n    box-shadow: inset 0 0 0 1px ", ";\n  }\n\n  &:focus {\n    box-shadow: inset 0 0 0 2px ", ";\n  }\n\n  @media (max-width: 460px) {\n    padding-top: var(--f-space--l);\n    padding-bottom: var(--f-space--l);\n  }\n\n  & + ", " {\n    position: absolute;\n    top: 50%;\n    right: var(--f-space--l);\n    transform: translateY(-50%);\n    color: ", ";\n    pointer-events: none;\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var styles$5 = {
  stateColor: function stateColor(props) {
    if (props.disabled) {
      return 'var(--f-color-element--tertiary)';
    }

    if (props.invalid) {
      return 'var(--f-color-element--error)';
    }

    if (props.valid) {
      return 'var(--f-color-element--success)';
    }

    return 'var(--f-color-element--tertiary)';
  },
  backgroundColor: function backgroundColor(_ref) {
    var disabled = _ref.disabled;

    if (disabled) {
      return 'var(--f-color-element--inactive)';
    }

    return 'var(--f-color-element--primary)';
  },
  hover: {
    stateColor: function stateColor(props) {
      if (props.disabled) {
        return 'var(--f-color-element--tertiary)';
      }

      if (props.invalid) {
        return 'var(--f-color-element--error)';
      }

      if (props.valid) {
        return 'var(--f-color-element--success)';
      }

      return 'var(--f-color-element--secondary)';
    }
  }
};
var FormElement = styled('div').attrs(function () {
  return {
    className: 'f-FormEl'
  };
})(_templateObject$9(), styles$5.backgroundColor, styles$5.stateColor, function (_ref2) {
  var withIcon = _ref2.withIcon;
  return withIcon && 'calc(var(--f-iconSize--m) + var(--f-space--m) * 2)';
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled && 'not-allowed;';
}, styles$5.hover.stateColor, styles$5.hover.stateColor, Icon, styles$5.stateColor);
FormElement.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
  withIcon: PropTypes.bool
};

var _Icon$ICONS = Icon.ICONS,
    IconCheck$1 = _Icon$ICONS.IconCheck,
    IconAlertOctagon$1 = _Icon$ICONS.IconAlertOctagon;
var icons = Object.values(Icon.ICONS);
var Input = React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      defaultIcon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["id", "icon"]);

  var icon = props.invalid ? IconAlertOctagon$1 : props.valid ? IconCheck$1 : defaultIcon;
  return React.createElement(FormElementWrapper, {
    invalid: props.invalid,
    valid: props.valid
  }, React.createElement(FormElement, _extends({
    as: "input",
    name: id,
    ref: ref,
    withIcon: !!icon
  }, props)), icon && React.createElement(Icon, {
    icon: icon
  }));
});
Input.propTypes = {
  icon: PropTypes.oneOf(icons),
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  valid: PropTypes.bool
};
Input.defaultProps = {
  invalid: false,
  valid: false
};

var InputField = React.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      helper = _ref.helper,
      inputRef = _ref.inputRef,
      props = _objectWithoutProperties(_ref, ["label", "helper", "inputRef"]);

  return React.createElement(FormField, _extends({
    label: label,
    helper: helper
  }, props, {
    ref: ref
  }), React.createElement(Input, _extends({
    ref: inputRef
  }, props)));
});
InputField.propTypes = {
  helper: PropTypes.node,
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  })
};
InputField.displayName = 'InputField';

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: var(--f-color-element--overlay);\n  z-index: var(--f-zIndex--Overlay);\n  transition: opacity 0.2s ease-out;\n  opacity: ", ";\n  pointer-events: ", ";\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var Overlay = styled('div').attrs(function () {
  return {
    className: 'f-Overlay'
  };
})(_templateObject$a(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 0.8 : 0;
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 'inherit' : 'none';
});
Overlay.propTypes = {
  isOpen: PropTypes["boolean"]
};

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: sticky;\n    bottom: 0;\n    display: flex;\n    justify-content: flex-end;\n    border-top: 1px solid var(--f-color-element--inactive);\n    padding: 0 var(--content-hSpacing);\n\n   ", " + ", " {\n    margin-left: var(--f-space--m);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--f-space--m) var(--content-hSpacing);\n  border-bottom: 1px solid var(--f-color-element--inactive);\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  padding: var(--f-space--xxl) var(--content-hSpacing);\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  --content-hSpacing: var(--f-space--xxl);\n\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  max-width: 33.75rem; /* 540px */\n  overflow: auto;\n  z-index: calc(var(--f-zIndex--Overlay) + 1);\n  transition: transform 0.1s ease-out;\n  background-color: var(--f-color-element--primary);\n  pointer-events: ", ";\n  transform: ", ";\n\n  @media (max-width: 460px) {\n    --content-hSpacing: var(--f-space--xl);\n  }\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}

var SidePanel = function SidePanel(props) {
  var footer = props.footer,
      header = props.header; // animateOnMount makes the panel closed by default so that on the first render
  // It is set to props.isOpen (through the useEffect)
  // if props.isOpen is true, then it will animate <3

  var _React$useState = React.useState(props.animateOnMount ? false : props.isOpen),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var handleClose = function handleClose() {
    setIsOpen(false);
    props.onClose();
  };

  var onOverlayClick = function onOverlayClick() {
    if (props.closesOnOverlayClick) {
      handleClose();
    }
  };

  React.useEffect(function () {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);
  return React.createElement(React.Fragment, null, React.createElement(Overlay, {
    onClick: onOverlayClick,
    isOpen: isOpen
  }), React.createElement(StyledSidePanel, _extends({
    className: classnames('f-SidePanel', props.className)
  }, props, {
    isOpen: isOpen
  }), React.createElement(Header, {
    className: "f-SidePanel-header"
  }, header ? React.createElement("div", {
    className: "f-SidePanel-headerContent"
  }, header) : React.createElement(Heading, {
    level: 4,
    as: "h1"
  }, props.title), React.createElement(IconButton, {
    icon: IconButton.ICONS.IconCross,
    onClick: handleClose
  })), React.createElement("div", null, React.createElement(Content$1, null, props.children), footer && React.createElement(Footer, {
    className: "f-SidePanel-footer"
  }, footer))));
};

SidePanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closesOnOverlayClick: PropTypes.bool,
  footer: PropTypes.node,
  isOpen: PropTypes.bool,
  animateOnMount: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.node,
  header: PropTypes.node
};
SidePanel.defaultProps = {
  isOpen: false,
  onClose: function onClose() {},
  animateOnMount: false
};
var StyledSidePanel = styled('div')(_templateObject$b(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'inherit' : 'none';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 'translateX(0)' : 'translateX(100%)';
});
var Content$1 = styled('div')(_templateObject2$2());
var Header = styled('div')(_templateObject3$1());
var Footer = styled('div')(_templateObject4(), Button, Button);

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  color: var(--f-color-text--secondary);\n  text-align: ", ";\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var variants$1 = Object.values(UiText.VARIANTS);
var Text = styled(UiText).attrs(function () {
  return {
    className: 'f-Text'
  };
})(_templateObject$c(), function (_ref) {
  var isNumber = _ref.isNumber;
  return isNumber && 'right';
});
Text.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  isNumber: PropTypes.bool,
  variant: PropTypes.oneOf(variants$1)
};
Text.defaultProps = {
  as: 'p',
  isNumber: false,
  variant: UiText.VARIANTS.content
};

var refShapes = [PropTypes.func, PropTypes.shape({
  current: PropTypes.instanceOf(Element)
})];

export { Button, FormField, Heading, Helper, Icon, IconButton, Input, InputField, Label, Overlay, SidePanel, Spinner, Text, UiText, refShapes };
//# sourceMappingURL=index.es.js.map
