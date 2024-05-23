import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import DisclaimerText from './DisclaimerText';
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import Button from './Button';
import HandleDetection from './HandleDetection';


function App() {

  return (
    <>
      <Navbar></Navbar>
      <DisclaimerText></DisclaimerText>
      <div className="row">
        <div className="col">
          <InputBox></InputBox>
        </div>
        <div className="col-md-1">
          <div className="row">
              <Button onClick={HandleDetection} className="run-button">Run</Button>
          </div>
          <div className="row">
              <Button onClick={HandleDetection} className="stop-button">Stop</Button>
          </div>
        </div>
        <div className="col">
          <OutputBox></OutputBox>
        </div>
      </div>
    </>
  )
}

export default App
