import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Loans from './component/Loans';
import Aboutus from './component/Aboutus';
import ButtonAppBar from './component/Buttonappbar';

function App() {
  // const [count, setCount] = useState(0);

  // Custom event tracking function
  // const trackEvent = (action) => {
  //   // Check if gtag is available (Google Analytics script is loaded)
  //   if (window.gtag) {
  //     window.gtag('event', action, {
  //       'event_category': 'User Interaction',
  //       'event_label': 'Counter Button',
  //       'value': count
  //     });
  //   }
  // };

  // const handleIncrement = () => {
  //   setCount(prevCount => prevCount + 1);
  //   trackEvent('increment');
  // };

  // const handleDecrement = () => {
  //   setCount(prevCount => prevCount - 1);
  //   trackEvent('decrement');
  // };

  // const handleReset = () => {
  //   setCount(0);
  //   trackEvent('reset');
  // };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Welcome to My First React App</h1>
    //     <p>Counter: {count}</p>
    //     <div>
    //       <button onClick={handleDecrement}>-</button>
    //       <button onClick={handleIncrement}>+</button>
    //       <button onClick={handleReset}>Reset</button>
    //     </div>
    //   </header>
    // </div>
    <Router>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/aboutus" element={<Aboutus />} /> 
      </Routes>
    </Router>
  );
}

export default App;