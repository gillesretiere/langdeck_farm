import React,{useState} from 'react';

import Layout from "./components/Layout";
export const cardContext = React.createContext({
  language: {"language_uid":"fre", "active":"false"},
  theme:{"theme":"Void"}
});

export const foodItemsContext = React.createContext();

function App() {
  const [menuItems, setMenuItems] = useState([
    {
      region: {},
      country: {},
      language: {},
      translator: {},
      theme: {},
      countries: [],
      languages: [],
      filter: '',
      loading: true,
      error: '',
      component:'',
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
        <Layout >
          <div>
            This is the App
          </div>
        </Layout>
      </div>
    );
  </cardContext.Provider>

}
export default App;
