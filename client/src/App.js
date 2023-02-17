import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './Components/Landing/LandingPage';
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
import axios from 'axios';
axios.defaults.baseURL = 'https://pi-pokemon-production.up.railway.app/'


function App() {
  return (
    <div className="App">

      <Route path='/' exact component={LandingPage} />
      
      <Route path='/pokemons' exact component={Home} />

      <Route path='/pokemons/:id' exact component={Detail} />
        
      <Route path='/form' exact component={Form} />

    </div>
  );
};

export default App;
