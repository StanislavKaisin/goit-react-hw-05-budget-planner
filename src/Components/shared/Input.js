import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const StyledInput = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 100%;
  outline: 0;

  &:focus {
    border: 1px solid #2b32b2;
  }
`;

const Input = ({
  type,
  value,
  onChange,
  name,
  onFocus,
  onBlur,
  placeholder,
  min,
  step,
}) => (
  <StyledInput
    type={type}
    value={value}
    onChange={onChange}
    name={name}
    onFocus={onFocus}
    onBlur={onBlur}
    placeholder={placeholder}
    min={min}
    step={step}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,

  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  min: PropTypes.string,
  step: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  value: 0,
  name: '',

  onChange: () => null,
  onFocus: () => null,
  onBlur: () => null,
  placeholder: '',
  min: '0',
  step: '0.01',
};

export default Input;
