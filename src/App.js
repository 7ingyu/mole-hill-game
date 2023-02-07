import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MoleHill from './MoleHill';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const initialState = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {

  const [ moles, setMoles ] = useState(initialState)

  useEffect(() => {
    // get random number from 0 to 8
    if (moles.toString() === initialState.toString()) {
      let num = getRandomInt(0, 9)
      let time = getRandomInt(0, 5000);
      setTimeout(() => {
        let newHills = [...moles]
        newHills[num] = 1
        setMoles(newHills)
      }, time)
    }
  }, [moles])

  const hideMole = (idx) => {
    let newHills = [...moles]
    newHills[idx] = 0
    setMoles(newHills)
  }

  return (
    <div className="App container">
      <h1 className="mb-4 text-center">React-A-Mole</h1>
      <div className="row">
        {moles.map((bool, idx) => (
          <MoleHill hasMole={Boolean(bool)} hideMole={() => hideMole(idx)} />
        ))}
      </div>
    </div>
  );
}

export default App;
