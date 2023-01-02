import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
 
  const [marginLeft, setMarginLeft] = useState(0)
  const [marginRight, setMarginRight] = useState(0)
  const [marginBottom, setMarginBottom] = useState(0)
  const [marginTop, setmarginTop] = useState(0)

  const handleClick = (event) => {

    if (event == 'left') {
      setMarginLeft(marginLeft + 10)
    }
    else if (event == 'right') {
      setMarginRight(marginRight + 10)
    }
    else if (event == 'up') {
      setmarginTop(marginTop + 10)
    }
    else {
      setMarginBottom(marginBottom + 10)
    }
  }

  return (

    <div className="App">
      <section className='btn'>
        <button onClick={() => handleClick('left')}>  RIGHT</button>
        <button onClick={() => handleClick('right')}>left</button>
        <button onClick={() => handleClick('up')}>DOWN</button>
        <button onClick={() => handleClick('down')}>top</button>
      </section>
      <section className='game'>

        <img
          style={{ marginLeft: `${marginLeft}px`, marginBottom: `${marginBottom}px`, marginRight: `${marginRight}px`, marginTop: `${marginTop}px` }}
          src={`https://www.smartick.com/blog/wp-content/uploads/Captura-75.png`}
        />
      </section>

    </div>
  );
}

export default App;
