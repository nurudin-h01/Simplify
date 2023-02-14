import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routers from "./routes";
import { BrowserRouter } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routers></Routers>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);


