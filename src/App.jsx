import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import DisclaimerText from './DisclaimerText';
import InputBox from './InputBox';
import OutputBox from './OutputBox';


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
            <div className="col">
              
            </div>
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
