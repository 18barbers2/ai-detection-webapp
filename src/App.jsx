import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import DisclaimerText from './DisclaimerText';
import InputBox from './InputBox';
import OutputBox from './OutputBox';
import Button from './Button';


function App() {

  return (
    <>
      <Navbar></Navbar>
      <DisclaimerText></DisclaimerText>
      <div className="row">
        <div className="col">
          <InputBox></InputBox>
        </div>
        <div className="col">
          <div className="row">
              <Button className="detect-button">Run</Button>
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
