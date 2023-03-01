import React,{useState} from 'react';

import Layout from "./components/Layout";
export const cardContext = React.createContext();

function App() {
  const [menuItems, setMenuItems] = useState([
    {
      region: {},
      country: {},
      language: {},
      countries: [],
      languages: [],
      filter: '',
      loading: true,
      error: '',
      }
  ]);
  const initialState = {
    region: {},
    country: {},
    language: {},
    countries: [],
    languages: [],
    filter: '',
    loading: true,
    error: '',
    };

  <cardContext.Provider value={menuItems}>
    return (
      <div class="amchart" id="chartdiv">
        <Layout>
          <div>
            This is the App
          </div>
        </Layout>
      </div>
    );
  </cardContext.Provider>

}
export default App;
