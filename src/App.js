import React, { useState } from 'react';
import './App.scss';

function App() {
  const [state, setState] = useState({});

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const submit = e => {
    e.preventDefault();
    setState({ ...state, result: state.digit });
  };

  return (
    <div className="App">
      <div className="header">Number to word converter</div>
      <form onSubmit={submit}>
        <div>
          <input
            name="digit"
            placeholder="Enter the number here..."
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Convert</button>
      </form>
      <div className="result-box">{state.result}</div>
    </div>
  );
}

export default App;
