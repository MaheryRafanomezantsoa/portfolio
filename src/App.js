import Navbar from './components/Navbar/Navbar'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Work from './components/pages/Work'
import Contact from './components/pages/Contact'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home}/>
          <Route path='/about' component={About} />
          <Route path ='/project' component={Work}/>
          <Route path ='/contact' component={Contact}/> 
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
