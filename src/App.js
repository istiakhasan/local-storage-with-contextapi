
import './App.css';
import Cart from './components/Cart';



import HomeTwo from './components/HomeTwo';
import {BrowserRouter as Router,Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">

      <Router>
        
        <Route path="/" exact component={HomeTwo} />
        <Route path="/cart" exact component={Cart} />

       
      </Router>
   
      
    </div>
  );
}

export default App;
