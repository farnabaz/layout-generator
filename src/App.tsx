import React from 'react';

import './App.css';
import Layout from './components/Layout';
import IPhone from './components/IPhone';
import DummyContent from './components/DummyContent';


function App() {
  const [grid, setGrid] = React.useState(["XL", "L", "SM", "SM"]);
  const layouts = [
    "L/XL/2SM",
    "2SM/L/XL",
    "XL/L/2SM",
    "XL/2SM"
  ]
  function onLayoutChange(value: string) {
    const grid = value
      .split('/')
      .reduce((arr: string[], item: string) => {
        const repeat = parseInt(item) || 1;
        const token = item.substr(repeat > 1 ? 1 : 0)
        return [
          ...arr,
          ...Array(repeat).fill(token)
        ];
      }, [])
    setGrid(grid);
  }
  const components = [
    <DummyContent />,
    <DummyContent />,
    <DummyContent />,
    <DummyContent />,
    <DummyContent />
  ]
  return (
    <div className="App">
      <div>
        <select onChange={(e) => onLayoutChange(e.target.value)}>
          {layouts.map(l => (
            <option value={l} key={l}>{l}</option>
          ))}
        </select>
      </div>
      <IPhone>
        <Layout grid={grid} childAt={(index) => components[index]} type='fix'></Layout>
      </IPhone>
      <IPhone>
        <Layout grid={grid} childAt={(index) => components[index]} type='grid'></Layout>
      </IPhone>
      <IPhone>
        <Layout grid={grid} childAt={(index) => components[index]}></Layout>
      </IPhone>
    </div>
  );
}

export default App;
