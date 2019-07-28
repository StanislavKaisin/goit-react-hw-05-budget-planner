import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  ${props => props.customStyles}
`;

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}> {children} </StyledLabel>
);

Label.propTypes = {
  children: PropTypes.arrayOf(Object),
  customStyles: PropTypes.string,
};

Label.defaultProps = {
  children: null,
  customStyles: '',
};
export default Label;
