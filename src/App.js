import React,{useState} from 'react';

import Layout from "./components/Layout";
export const cardContext = React.createContext({
  language: {"language_uid":"fre", "active":"false"},
  theme:'',
  themes:[],
  domain:'',
  topic:'',
  story:'',
});

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
      vocabularies:[],
      vocabulary:{},
      filter: '',
      loading: true,
      error: '',
      component:'',
      }
  ]);

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
