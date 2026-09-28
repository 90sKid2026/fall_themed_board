import './App.css';
import { useState } from 'react';

const App = () => {

  // State variables
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Functions
  function makeSamosa() {
    setCount(count + multiplier);
  }

  function upgradeMultiplier() {
    setMultiplier(multiplier + 1);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='upgrade'>
          <h3>Double Stuffed</h3>
          <p>2x per Click</p>
          <button>10 Samosas</button>
          <h3>Party Pack</h3>
          <p>5x per Click</p>
          <button>100 Samosas</button>
          <h3>Full Feast</h3>
          <p>10x per Click</p>
          <button>1000 Samosas</button>
        </div>
      </div>
      <div className="header">
        <h1>Samosa Selector</h1>

        <h2>Count: {count}</h2>

        <p>Samosas per click: {multiplier}</p>

        <img
          className="samosa"
          src="https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350"
          alt="Samosa"
        />

        <button onClick={makeSamosa}>
          Make Samosa
        </button>

        <button onClick={upgradeMultiplier}>
          Upgrade Multiplier
        </button>
      </div>
    </div>
  );
}

export default App;
