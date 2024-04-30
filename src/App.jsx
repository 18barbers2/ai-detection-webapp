import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import DisclaimerText from './DisclaimerText';
import InputBox from './InputBox';


function App() {

  return (
    <>
      <Navbar></Navbar>
      <DisclaimerText></DisclaimerText>
      <InputBox></InputBox>
    </>
  )
}

export default App
