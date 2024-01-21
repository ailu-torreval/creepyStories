import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import data from './assets/data.json';
import parse from 'html-react-parser';

function App() {
  const [count, setCount] = useState(0);
  const [selectedStory, setSelectedStory] = useState(undefined);

  function getRandomStory() {
    const randomNumber = Math.floor(Math.random() * data.length);
    setSelectedStory(data[randomNumber]);
    console.log(selectedStory)
  }

  return (
    <>
    <button onClick={getRandomStory}>Random Story</button>


  {selectedStory !== undefined &&  
  <div>
    <h2>{selectedStory.id}</h2>
    <h3>Statement</h3>
    {parse(selectedStory.prompt)}
    <h3>Solution</h3>
    {parse(selectedStory.answer)}
  </div>
  }


    </>
  )
}

export default App
