
import './bootstrap';
import './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/header/Login'
import Register from './components/header/Register'
import Classic from './components/container/Classic'
import Clean from './components/container/Clean'
import Vegan from './components/container/Vegan'
import Container from './components/container/Container'

function App() {
    return (
      <Router>  
         <Switch>
           <Route path="/checkout">
            <Container/>
           </Route>
           <Route path="/login">
             <Header/>
              <Login/>
           </Route>
           <Route path="/register">
             <Header/>
             <Register/>
           </Route>
           <Route path="/classic">
             <Header/>
           <Classic/>
           </Route>
           <Route path="/clean">
             <Header/>
           <Clean/>
           </Route>
           <Route path="/vegan">
             <Header/>
           <Vegan/>
           </Route>
           <Route path="/">
            <Header/>
            <Container/>
           </Route>
          
         </Switch>
         </Router>
  
    
     
      
    );
  }
  
  export default App;
  