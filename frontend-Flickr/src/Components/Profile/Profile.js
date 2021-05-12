import './Profile.css';
// import {
//   BrowserRouter, Switch, Route,
// } from 'react-router-dom';
import ProNa from './Ptools/PhotoStream';
import Background from './ProBackground';
import ProNav from './Ptools/ProNav';

const Home = () => (
  <div>
    <div>
      <Background />
    </div>
    <div>
      <ProNav />
    </div>
    <div>
      <ProNa />

      {/* <BrowserRouter>
        <Switch>
          <Route
            path="/Photostream"
            component={() => (
              <ProNa />
            )}
          />
        </Switch>
      </BrowserRouter> */}
    </div>
  </div>
);

export default Home;
