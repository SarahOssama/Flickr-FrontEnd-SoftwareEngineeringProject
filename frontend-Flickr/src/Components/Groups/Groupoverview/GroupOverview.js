import React, { Component } from 'react';
import { RiShareForwardLine } from 'react-icons/ri';
import Data from '../../../db2.json';
import './GroupOverview.css';
import Nav from '../Nav';
import CoverPicture from '../Cover';
import Photos from '../Photos';

/**
 * Group Overview component
 */
class GroupOverview extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <CoverPicture />
        <Nav />
        <div className="Share">
          <a href="/">
            <RiShareForwardLine style={{ height: '30', width: '40', color: 'grey' }} />
            Share
          </a>
        </div>
        <div className="ADMIN">
          {Data.Groups.map((data) => (
            <a href="/">{data.Admin}</a>
          ))}
          <span> ADMIN</span>
        </div>
        <div className="intro">
          {Data.Groups.map((data) => (
            <span>{data.intro}</span>
          ))}
        </div>
        <div className="titles">
          <p>Photo pool</p>
          <Photos />
          <p>Top Contributors</p>
          <div className="grid-container" />
          <p>Group Description</p>
          {Data.Groups.map((data) => (
            <span>{data.description}</span>
          ))}
          <p>Group Rules</p>
          {Data.Groups.map((data) => (
            <span>{data.rules}</span>
          ))}
          <p>Additional Info</p>
          {Data.Groups.map((data) => (
            <span>{data.info}</span>
          ))}
        </div>
      </div>
    );
  }
}
export default GroupOverview;
