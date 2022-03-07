import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import ServiceSinglePage from './pages/ServiceSinglePage/ServiceSinglePage';
import BlogSinglePage from './pages/BlogSinglePage/BlogSinglePage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about-us' component={AboutUsPage} />
          <Route exact path='/services' component={ServicesPage} />
          <Route exact path='/blog' component={BlogPage} />
          <Route path='/contact' component={ContactPage} />
          <Route
            path='/services/auto-diagnostics'
            component={ServiceSinglePage}
          />
          <Route path='/blog/1' component={BlogSinglePage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
