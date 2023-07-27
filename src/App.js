import './App.css';

import MyNavbar from './components/Navbar';
import Aleart from './components/Aleart';
import Textform from './components/Textform';
// import About from './components/About';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [aleart, setaleart] = useState(null);
  let showaleart = (message, type) => {
    setaleart({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setaleart(null)
    }, 1500);
  }
  let togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showaleart('Dark mood has been enable ', 'light')
      setbtn('light')
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showaleart('Light mood has been enable', "primary ")
      setbtn('dark')
    }
  }
  let red = () => {
    if (mode === 'light') {
      setmode('danger')
      document.body.style.backgroundColor = 'red'
      showaleart('Red mood has been enable ', 'danger')
      document.body.style.color = 'white'
      setbtn('danger')
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showaleart('Light mood has been enable', "danger ")
      document.body.style.color = 'black'
      setbtn('dark')
    }
  }
  let green = () => {
    if (mode === 'light') {
      setmode('success')
      document.body.style.backgroundColor = 'green'
      showaleart('Green mood has been enable ', 'success')
      document.body.style.color = 'white'
      setbtn('success')
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showaleart('Light mood has been enable', "success ")
      document.body.style.color = 'black'
      setbtn('dark')
    }
  }
  let yellow = () => {
    if (mode === 'light') {
      setmode('warning')
      document.body.style.backgroundColor = 'yellow'
      showaleart('Yellow mood has been enable ', 'warning')
      document.body.style.color = 'black'
      setbtn('warning')
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showaleart('Light mood has been enable', "warning ")
      document.body.style.color = 'black'
      setbtn('dark')
    }
  }
  const [btn, setbtn] = useState('dark');
  return (
    // <BrowserRouter>
      <div className="">
        <MyNavbar tittle="Textutills" mode={mode} togglemode={togglemode} red={red} green={green} yellow={yellow} />  {/* switchtxt={switchtxt} */}
        <div className="container mt-2">
          <Aleart aleart={aleart} successfully='Successfully' />
        </div>
        {/* <Routes> */}
        <Textform showaleart={showaleart} btn={btn} heading='Enter The Text To Analyze'
            summary='Your Test Summary' />
          {/* <Route exact path="/" element={<Textform showaleart={showaleart} btn={btn} heading='Enter The Text To Analyze'
            summary='Your Test Summary' />}>
          </Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/blog" element={<Blog/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route> */}
        {/* </Routes> */}
      </div>
    //  {/* </BrowserRouter> */}
  );
}

export default App;