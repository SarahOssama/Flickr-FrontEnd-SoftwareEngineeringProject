// import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BsGrid3X3GapFill, BsSquareFill } from 'react-icons/bs';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { AiFillCaretDown } from 'react-icons/ai';
import { IconContext } from 'react-icons';

// eslint-disable-next-line react/prop-types
const HomeToolBar = ({ showCom, showCom2, showCom3 }) => {
  const handleClick = (e) => {
    // eslint-disable-next-line no-console
    console.log('Click', e);
  };
  return (
    <div className="layoutBar">
      <div className="HomeFilterContainer">
        <button type="button" onClick={handleClick}>All Activity</button>
        <AiFillCaretDown
          style={{
            color: 'rgb(137, 137, 137)', marginLeft: '7px', marginTop: '4px', height: '15px', width: '13px',
          }}
          onClick={handleClick}
        />
      </div>
      <div className="TabLayoutContainer">
        <IconContext.Provider value={{ className: 'layoutIcons' }}>
          <BsGrid3X3GapFill onClick={showCom} />
          <RiLayoutMasonryFill onClick={showCom2} />
          <BsSquareFill onClick={showCom3} />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default HomeToolBar;
