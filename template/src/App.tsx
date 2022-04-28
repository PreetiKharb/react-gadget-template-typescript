import { Button } from '@PreetiKharb/react-component-library';
import React from 'react';
import { Rnd } from "react-rnd";
import './App.css';

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
} as const;

function App() {
  return (<>
    <Rnd
    style={style}
    default={{
      x: 0,
      y: 0,
      width: 200,
      height: 200
    }}
  >
    <Button class= "btn btn-secondary" label="Click me!"></Button>
  </Rnd>
  </>
  );
}

export default App;
