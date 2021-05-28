import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './Components/StartPage/StartPage';
import FormSignup from './Components/StartPage/SingUP/FormSignup';
import CompleteSignup from './Components/StartPage/SingUP/CompleteSignup';
import FormLogin from './Components/StartPage/Login/FormLogin';
import Forgotpassword from './Components/StartPage/Login/ForgotPassword/FormForgotpassword';
import Checkinbox from './Components/StartPage/Login/Checkinbox/Checkinbox';
import ChangeComplete from './Components/StartPage/Login/Setnewpassword/ChangeComplete';
import SetnewPassword from './Components/StartPage/Login/Setnewpassword/SetnewPassword';
// import './App.css';
// import Addv from './Components/Addv';
import Home from './Components/HomePage/Home';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/NavBar/About';
// import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import GroupOverview from './Components/Groups/Groupoverview/GroupOverview';
import GroupMembers from './Components/Groups/Groupmembers/GroupMembers';
import UploadPhoto from './Components/UploadPhoto/UploadPhoto';
import ViewPhoto from './Components/ViewPhoto/ViewPhoto';
import Searchphotosmain from './Components/Search/Searchphotos/Searchphotosmain';
import Searchpeoplemain from './Components/Search/Searchpeople/Searchpeoplemain';
import Searchgroupsmain from './Components/Search/Searchgroup/Searchgroupmain';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/" exact component={StartPage} title="Find your inspiration. | Flickr" />
          <Route path="/Home" exact component={Home} title="Home | Flickr" />
          <Route path="/profile" exact component={Profile} title="Home | Flickr" />
          <Route path="/groupoverview" exact component={GroupOverview} title="GroupOverview | Flickr" />
          <Route path="/groupmembers" exact component={GroupMembers} title="GroupMembers | Flickr" />
          <Route path="/photos/upload" exact component={UploadPhoto} />
          <Route path="/photos" exact component={ViewPhoto} />
          <Route path="/searchphotos" exact component={Searchphotosmain} title="SearchPhotos | Flickr" />
          <Route path="/searchpeople" exact component={Searchpeoplemain} title="SearchPeople | Flickr" />
          <Route path="/searchgroups" exact component={Searchgroupsmain} title="SearchGroups | Flickr" />

          <Route path="/SignUp" exact component={FormSignup} title="Flickr Login" />
          <Route path="/check-email/sign-up" exact component={CompleteSignup} title="Flickr Login" />

          <Route path="/login" exact component={FormLogin} title="Flickr Login" />
          <Route path="/forgot-password" exact component={Forgotpassword} title="Flickr Login" />
          <Route path="/check-email/forgot-password" exact component={Checkinbox} title="Flickr Login" />
          <Route path="/check-email-confirm" exact component={SetnewPassword} title="Flickr Login" />
          <Route path="/change-complete/forgot-password" exact component={ChangeComplete} title="Flickr Login" />

          <Route path="/about" component={About} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>

  );
}

export default App;
