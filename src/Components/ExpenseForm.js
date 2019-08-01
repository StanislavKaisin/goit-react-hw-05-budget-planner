/* eslint-disable consistent-return */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

import 'react-toastify/dist/ReactToastify.css';

const labelStyles = `
  margin-bottom: 16px;  
`;

export default class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFocus = e => {
    e.preventDefault();
    if (e.target.name === 'name') return;

    this.setState({
      [e.target.name]: '',
    });
  };

  handleBlur = e => {
    e.preventDefault();
    if (e.target.name === 'name') return;
    this.setState(prevState => {
      if (prevState.amount) return;
      return {
        amount: 0,
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { amount, name } = this.state;

    if (!name) {
      toast('Enter expense name', { autoClose: false });
      return;
    }
    if (!amount) {
      toast('Enter expense sum', { autoClose: false });
      return;
    }

    this.props.onSave({
      ...this.state,
    });

    this.setState({
      name: '',
      amount: 0,
    });
  };

  render() {
    const { amount, name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name{' '}
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter expense name"
          />{' '}
        </Label>{' '}
        <Label customStyles={labelStyles}>
          Enter expense amount{' '}
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder="Enter expense sum"
            min="0"
            step="0.01"
          />{' '}
        </Label>{' '}
        <Button label="Add" type="submit" />
        <ToastContainer />
      </Form>
    );
  }
}
ExpenseForm.propTypes = {
  onSave: PropTypes.func,
};

ExpenseForm.defaultProps = {
  onSave: () => {},
};
