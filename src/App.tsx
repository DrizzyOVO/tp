import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import Carousel from './components/LandingPage/Carousel';
import Landing from './components/LandingPage/Landing';

function App() {

  return (
    <RecoilRoot>
      <div className="App bg-sky-100">

        <Router>
          <Appbar /> 
          <Routes>
              {/* <Route path={"/signin"} element={<Signin />} />
              <Route path={"/signup"} element={<Signup />} /> */}
              <Route path={"/"} element={<Landing />} />
          </Routes>
        </Router>

      </div>
      </RecoilRoot>
  );
}

export default App;
