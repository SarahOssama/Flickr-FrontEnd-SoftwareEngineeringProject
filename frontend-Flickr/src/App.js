import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './Components/StartPage/StartPage';
import FormSignup from './Components/StartPage/SingUP/FormSignup';
// import './App.css';
// import Addv from './Components/Addv';
import Home from './Components/HomePage/Home';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/NavBar/About';
// import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import Groups from './Components/Groups/Groups';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>

          <Route path="/" exact component={StartPage} title="Find your inspiration. | Flickr" />
          <Route path="/Home" exact component={Home} title="Home | Flickr" />
          <Route path="/profile" exact component={Profile} title="Home | Flickr" />
          <Route path="/group" exact component={Groups} title="Groups | Flickr" />

          <Route path="/SignUp" exact component={FormSignup} title="Flickr Login" />

          <Route path="/SignUp" exact>
            <FormSignup />
          </Route>
          <Route path="/about" component={About} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>

  );
}

export default App;
