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
      <InputBox></InputBox>
      <OutputBox></OutputBox>
    </>
  )
}

export default App
