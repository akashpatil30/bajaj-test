import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Custom event tracking function
  const trackEvent = (action) => {
    // Check if gtag is available (Google Analytics script is loaded)
    if (window.gtag) {
      window.gtag('event', action, {
        'event_category': 'User Interaction',
        'event_label': 'Counter Button',
        'value': count
      });
    }
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
    trackEvent('increment');
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
    trackEvent('decrement');
  };

  const handleReset = () => {
    setCount(0);
    trackEvent('reset');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App</h1>
        <p>Counter: {count}</p>
        <div>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;