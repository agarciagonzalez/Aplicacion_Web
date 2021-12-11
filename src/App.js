import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Usuario from './pages/Usuario';
import Ventas from './pages/Ventas';
import Productos from './pages/Productos';
import Roles from './pages/Roles';
import background from "./components/logoLambda.png";

function App() {
  return (
    <Router>    
      <Sidebar />      
      <Switch>
        <Route path='/usuario' exact component={Usuario} />
        <Route path='/ventas' exact component={Ventas} />
        <Route path='/productos' exact component={Productos} />
        <Route path='/roles' exact component={Roles} />        
      </Switch>
    </Router>
  );
}
 


export default App;  