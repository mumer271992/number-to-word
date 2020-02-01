import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({});
  const submit = e => {
    e.preventDefault();
    setState({ ...state, result: state.digit });
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          placeholder="Enter the number here..."
          onChange={e => setState({ ...state, digit: e.target.value })}
        />
        <button type="submit">Convert</button>
      </form>
      <div>{state.result}</div>
    </div>
  );
}

export default App;
