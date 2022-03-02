import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' />
          <Route path='/about-us' />
          <Route path='/services' />
          <Route path='/blog' />
          <Route path='/contact' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
