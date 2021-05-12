import './StartPage.css';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
function StartPage(props) {
  const history = useHistory();
  return (

    <div className="StartContainer">
      <h1 className="h1container"> Find your inspiration. </h1>

      <p className="Pcontainer">
        Join the Flickr community, home to tens of billions of
        {' '}
        <br />
        {' '}
        photos and 2 million groups.
      </p>

      <button type="button" className="Startforfreebutton" onClick={() => history.push('/SignUp')}> Start for free </button>

    </div>

  );
}

export default StartPage;
