import React, { useState } from 'react';
import './App.scss';
import { convert } from './utility';

function App() {
  const [state, setState] = useState({
    digit: '',
    result: 'words will display here...'
  });

  const validate = value => {
    const regex = /^\d+$/;
    if (!value) {
      setState(state => ({ ...state, error: 'Please enter a number!' }));
      return false;
    } else if (!regex.test(value)) {
      setState(state => ({ ...state, error: 'Only numbers are allowed!' }));
      return false;
    }
    return true;
  };

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setState(state => ({ ...state, [name]: value, error: '' }));
    validate(value);
  };

  const submit = e => {
    e.preventDefault();
    if (!validate(state.digit)) {
      return;
    }
    const result = convert(parseInt(state.digit));
    setState(state => ({ ...state, result: result }));
  };

  return (
    <div className="App">
      <div className="header">Number to word converter</div>
      <form onSubmit={submit} data-test="form">
        <div>
          <input
            name="digit"
            placeholder="Number (digits) goes here..."
            value={state.digit}
            onChange={changeHandler}
          />
          {state.error && state.error !== '' && (
            <span data-test="validation-error" className="error">
              {state.error}
            </span>
          )}
        </div>
        <button type="submit">Convert</button>
      </form>
      <div data-test="result-box" className="result-box">
        {state.result}
      </div>
    </div>
  );
}

export default App;
