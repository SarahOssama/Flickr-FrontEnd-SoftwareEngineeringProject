import './StartPage.css';
import { useHistory } from 'react-router-dom';
/**
 * StartPage
 * @param {*} props
 * @returns Start Page
 */
// eslint-disable-next-line no-unused-vars
function StartPage(props) {
  const history = useHistory();
  return (

    <div className="startContainer">
      <h1 className="h1Container"> Find your inspiration. </h1>

      <p className="pContainer">
        Join the Flickr community, home to tens of billions of
        {' '}
        <br />
        {' '}
        photos and 2 million groups.
      </p>

      <button type="button" className="startForFreeButton" onClick={() => history.push('/SignUp')}> Start for free </button>

    </div>

  );
}

export default StartPage;
