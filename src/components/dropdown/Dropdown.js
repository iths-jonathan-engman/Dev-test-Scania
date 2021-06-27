import './Dropdown.scss';
import React from 'react';
import { LessDistance, MoreDistance } from '../table/Table';

export function dropFunction() {
  document.querySelector(".dropdown").classList.toggle('dropdown-toggle');
};

const Dropdown = () => {
  return (
    <div className="dropdown">

      <div className="dropdown-btn" onClick={dropFunction}>
        <span>Distance</span>
        <svg className="dropdown-arrow" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6L11 1" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="dropdown-value">
        <div tabIndex="1" onClick={LessDistance}>
          <span>&lt;&#61; 200.000 km</span>
        </div>
        <div tabIndex="1" onClick={MoreDistance}>
          <span>&gt; 200.000 km</span>
        </div>
      </div>

    </div>
  )
};

export default Dropdown;