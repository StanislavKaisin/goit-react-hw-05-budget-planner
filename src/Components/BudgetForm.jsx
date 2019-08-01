/* eslint-disable consistent-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

export default class BudgetForm extends Component {
  state = {
    budget: 0,
  };

  handleChange = e => {
    const { value } = e.target;

    if (value === '' || Number.isNaN(value)) {
      this.setState({
        budget: '',
      });
      return;
    }
    const roundedValue = Math.round(value * 100) / 100;
    const transformedValue = Math.abs(roundedValue);
    this.setState({
      budget: Number(transformedValue) === 0 ? 0 : Number(transformedValue),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.budget);

    this.setState({
      budget: 0,
    });
  };

  handleFocus = e => {
    e.preventDefault();
    this.setState({
      budget: '',
    });
  };

  handleBlur = e => {
    e.preventDefault();
    this.setState(prevState => {
      if (prevState.budget) return;
      return { budget: 0 };
    });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            name="budget"
            value={budget}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder="Enter your total budget"
            min="0"
            step="0.01"
          />
        </Label>
        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

BudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
