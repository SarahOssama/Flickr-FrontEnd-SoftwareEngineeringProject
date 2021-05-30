import React, { Component } from 'react';
import { RiShareForwardLine } from 'react-icons/ri';
import './GroupMembers.css';
import Nav from '../Nav';
import CoverPicture from '../Cover';
import Member from './Member';
/**
 * Group Members component
 */
class GroupMembers extends Component {
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
        <Member />
      </div>

    );
  }
}
export default GroupMembers;
