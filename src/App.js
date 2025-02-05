import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Partytown } from '@builder.io/partytown/react';
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
    <div>
    {/* <Partytown forward={['dataLayer.push']} />
    <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id=G-VF94F4403W' + i + dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','G-VF94F4403W');
          `,
        }}
      ></script> */}
    <Router>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/aboutus" element={<Aboutus />} /> 
      </Routes>
    </Router>
    </div>
  );
}

export default App;