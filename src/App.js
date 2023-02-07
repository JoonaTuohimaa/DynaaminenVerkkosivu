import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Vakiot ja tilamuuttujat 
function App() {
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(1);
  const [bottles, setBottles] = useState(1);
  const [result, setResult] = useState(0);
  const [gender, setGender] = useState("male");

// Funktio jolla lasketaan veren alkoholipitoisuus, funktio tarkistaa lopussa onko tulos negatiivinen ja jos on niin se palauttaa arvon 0.
  function calculate(e){
    e.preventDefault();
    let end = 0;
    let grams = ((bottles * 0.33) * 8 * 4.5) - ((weight/10) * time) 
    if(gender === "male"){
      end = grams / (weight * 0.7)
    } else {
      end = grams / (weight * 0.6)
    }
    if(end < 0) {
      setResult(0);
    } else {
      setResult(end);
    }

  }

  return (
    <form onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>  
      <div>
        <label>Bottles</label>
        <select name="time" value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select name="time" value={time} onChange={e => setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="10">10</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" id="male" name="gender" defaultChecked onChange={e =>setGender(e.target.value)}/>
        <label for="male">Male</label>  
        <input type="radio" id="female" name="gender" onChange={e =>setGender(e.target.value)}/>
        <label for="female">Female</label>
      </div>
      <div id="result">
        <p>{result.toFixed(2)}</p>
      </div>
      <div>
        <button id="calculate">Calcucate</button>
      </div>
    </form>
  );
}

export default App;
