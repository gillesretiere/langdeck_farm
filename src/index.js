import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Region from './pages/Region';
import Regions from './pages/Regions';
import NewRegion from './pages/NewRegion';
import Country from './pages/Country';
import Countries from './pages/Countries';
import NewCountry from './pages/NewCountry';
import Language from './pages/Language';
import Languages from './pages/Languages';
import NewLanguage from './pages/NewLanguage';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="regions" element={<Regions />} />    
        <Route path="regions/:id" element={<Region />} />            
        <Route path="countries" element={<Countries />} />      
        <Route path="languages" element={<Languages />} />
        <Route path="newLanguage" element={<NewLanguage />} />
        <Route path="languages/:id" element={<Language />} />
        <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

