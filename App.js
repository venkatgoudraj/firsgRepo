
import { createContext, useState } from 'react';
import './App.css';
import Home from './Home';
export const context=createContext()
function App() { 
  let [counter,updateCounter]=useState(0)
  let data='chinnu';
  return (
    
    <div className="App">
        <context.Provider value={data}>
          <Home></Home>
        <button className='minus' onClick={()=>{
          updateCounter(counter>0?counter-1:counter-1)
        }}>-</button>
        <p>{counter}</p>
        <button className='plus' onClick={()=>{
          updateCounter(counter=counter+1)
        }}>+</button>
        </context.Provider>
    </div>
  );
}

export default App;
