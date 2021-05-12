import './PhotoStream.css';
import Data from '../../../db2.json';

// displays the elements of list
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}
function myFunction2() {
  document.getElementById('myDropdown2').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onClick = (event) => {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i + 1) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
const ProNa = () => (
  <div className="contain">
    <div className="contButns">
      <div>
        <div className="dropdownP">
          <button
            type="button"
            onClick={() => {
              myFunction();
            }}
            className="dropbtnP"
          >
            Date Taken
          </button>
          <div id="myDropdown" className="dropdownContentP">
            <a href="/">Date Uploaded</a>
            <a href="/">Date Taken</a>
          </div>
        </div>
        <div className="dropdownP">
          <button
            type="button"
            onClick={() => {
              myFunction2();
            }}
            className="dropbtnP"
          >
            View All
          </button>
          <div id="myDropdown2" className="dropdownContentP">
            <a href="/">Public View</a>
            <a href="/">Friend View</a>
            <a href="/">Family View</a>
            <a href="/">Friend and Family View</a>
            <a href="/">View All</a>
          </div>
        </div>
      </div>
    </div>
    <div className="clr"> </div>
    <div className="imgscont">
      <div className="imgovr">
        <img src={Data.profileUsers.map((data) => (data.PhotoImg))} alt="" className="imageP" />
        <div className="overlayP">
          <div className="picInfoProfile">
            <ul className="infolistProfile">
              {Data.profileUsers.map((data) => (<li>{`${data.description}`}</li>))}
              {Data.profileUsers.map((data) => (<li><a style={{ color: 'white', textDecoration: 'none' }} href="/Photostream">{`By  ${data.imgOwner}`}</a></li>))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ProNa;
