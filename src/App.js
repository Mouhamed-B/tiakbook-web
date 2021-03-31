import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/Navbar'
import Home from './components/Home';
import SignForm from './components/forms/SignForm';
import UserForm from './components/forms/UserForm';

function App (){
    return(
      <div>
        
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signin' component={SignForm}/>
            <Route path='/signup' component={UserForm}/>
          </Switch>
        </Router>
      </div>
    ); 

}

export default App;
