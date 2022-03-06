import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

class Jquery extends React.Component {
  constructor() {
    super();
    this.textInput = React.createRef();
  }
  handleToggle = () => {
    // const el = findDOMNode(this.refs.toggle);
    const el = this.textInput.current;
    $(el).slideToggle();
  };
  render() {
    return (
      <div className='long-desc'>
        <ul className='profile-info'>
          <li>
            <span className='info-title'>User Name : </span> Shuvo Habib
          </li>
        </ul>
        <ul
          className='profile-info additional-profile-info-list'
          ref={this.textInput}>
          <li>
            <span className='info-email'>Office Email</span> me@shuvohabib.com
          </li>
        </ul>
        <div className='ellipsis-click' onClick={this.handleToggle}>
          <i className='fa-ellipsis-h' /> Toogle Email
        </div>
      </div>
    );
  }
}
export default Jquery;
