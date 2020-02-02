import React, { useState } from 'react';
import './App.scss';
import { validate } from './FormValidation';

function App() {
  const [state, setState] = useState({
    digit: '',
    result: 'words will display here...'
  });

  const validate = value => {
    const regex = /^\d+$/;
    if (!value) {
      setState({ ...state, error: 'Please enter a number!' });
      return false;
    } else if (!regex.test(value)) {
      setState({ ...state, error: 'Only numbers are allowed!' });
      return false;
    }
    return true;
  };

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    if (!validate(value)) {
      return;
    }
    setState({ ...state, [name]: value, error: '' });
  };

  const submit = e => {
    e.preventDefault();
    if (!validate(state.digit)) {
      return;
    }
    setState({ ...state, result: state.digit });
  };

  return (
    <div className="App">
      <div className="header">Number to word converter</div>
      <form onSubmit={submit}>
        <div>
          <input
            name="digit"
            placeholder="Number (digits) goes here..."
            onChange={changeHandler}
          />
          {state.error && state.error !== '' && (
            <span className="error">{state.error}</span>
          )}
        </div>
        <button type="submit">Convert</button>
      </form>
      <div className="result-box">{state.result}</div>
    </div>
  );
}

export default App;
