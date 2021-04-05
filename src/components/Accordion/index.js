/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// import Button from '../Button';
// import Icon from '../Icon';
// import UiText from '../UiText';
// import Text from '../Text';
import { StyledAccordion } from './styles';

const Accordion = React.forwardRef((tabs, { ...props }, ref) => {
  const [active, setActive] = useState();

  return (
    <StyledAccordion ref={ref} {...props}>
      <div className='tabs'>
        <div className='tab'>
          <input type='radio' id='rd1' name='rd' checked={active} />
          <label className='tab-label' htmlFor='rd1'>
            Item 1
          </label>
          <div className='tab-content'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
            facilis.
            <label htmlFor='rd2'>Next</label>
          </div>
        </div>
        <div className='tab'>
          <input type='radio' id='rd2' name='rd' />
          <label className='tab-label' htmlFor='rd2'>
            Item 2
          </label>
          <div className='tab-content'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            aut.
          </div>
        </div>
        <div className='tab'>
          <label htmlFor='rd3' className='tab-close'>
            Close others &times;
          </label>
          <input type='radio' id='rd3' name='rd' />
        </div>
        <button onClick={() => setActive(true)} htmlFor='rd1'>
          Prev
        </button>
      </div>
    </StyledAccordion>
  );
});

Accordion.displayName = 'Accordion';

Accordion.propTypes = {};

Accordion.defaultProps = {};

export default Accordion;
