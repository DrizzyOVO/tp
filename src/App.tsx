import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <div className="App">

        <Appbar />

      </div>
      </RecoilRoot>
  );
}

export default App;
