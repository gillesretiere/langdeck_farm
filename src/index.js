import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Localizer from './pages/Localizer';
import Region from './pages/Region';
import Regions from './pages/Regions';
import NewRegion from './pages/NewRegion';
import Country from './pages/Country';
import Countries from './pages/Countries';
import NewCountry from './pages/NewCountry';
import Language from './pages/Language';
import Languages from './pages/Languages';
import NewLanguage from './pages/NewLanguage';
import RegionCountries from './pages/RegionCountries';
import RegionCountry from './pages/RegionCountry';
import CountryLanguages from './pages/CountryLanguages';
import LanguageCountries from './pages/LanguageCountries';
import Translators from './pages/Translators';
import Translator from './pages/Translator';
import VocabulariesLanguageThemes from './pages/VocabulariesLanguageThemes';
import ThemeVocabularies from './pages/ThemeVocabularies';
import Vocabularies from './pages/Vocabularies';
import DeckDomains from './pages/DeckDomains';
import DeckThemes from './pages/DeckThemes';
import DeckTopics from './pages/DeckTopics';
import DeckStories from './pages/DeckStories';
import DeckPhrases from './pages/DeckPhrases';
/*
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
*/
import './index.css';
import { AuthProvider } from './context/AuthProvider';
import App from './App';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Localizer />} />
        <Route path="regions" element={<Regions />} />    
        <Route path="regions/:id" element={<Region />} />            
        <Route path="countries" element={<Countries />} />      
        <Route path="countries/:id" element={<Country />} />             
        <Route path="countries/region/:id" element={<RegionCountry />} />            
        <Route path="languages" element={<Languages />} />
        <Route path="languages/country/:id" element={<CountryLanguages />} />
        <Route path="newLanguage" element={<NewLanguage />} />
        <Route path="languages/:id" element={<Language />} />
        <Route path="regionCountries" element={<RegionCountries />} />
        <Route path="regionCountries/:id" element={<RegionCountry />} />
        <Route path="countries/language/:id" element={<LanguageCountries />} />
        <Route path="translators" element={<Translators />} />
        <Route path="translators/:id" element={<Translator />} />              
        <Route path="vocalangthemes/:id" element={<VocabulariesLanguageThemes />} />           
        <Route path="themevocabularies/:id" element={<ThemeVocabularies />} />       
        <Route path="vocabularies" element={<Vocabularies />} />      
        <Route path="deckDomains/:id" element={<DeckDomains />} />       
        <Route path="deckThemes/:id" element={<DeckThemes />} />             
        <Route path="deckTopics/:id" element={<DeckTopics />} />   
        <Route path="deckStories/:id" element={<DeckStories />} />             
        <Route path="deckPhrases/:id" element={<DeckPhrases />} />             
                  
        <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

