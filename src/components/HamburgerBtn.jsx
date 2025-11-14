import React, { useState } from 'react';
import '../assets/css/SwitchToggle.css'; // Save the CSS you provided in this file

const HamburgerBtn = ({ isMobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <div className="flex items-center">
      <label className="switch">
        <input
          type="checkbox"
          checked={isMobileMenuOpen}
          onChange={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Navigation Menu"
        />
        <span className="wrapper">
          <span className="row">
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
          <span className="row row-bottom">
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
          <span className="row-vertical">
            <span className="dot"></span>
            <span className="dot middle-dot"></span>
            <span className="dot"></span>
          </span>
          <span className="row-horizontal">
            <span className="dot"></span>
            <span className="dot middle-dot-horizontal"></span>
            <span className="dot"></span>
          </span>
        </span>
      </label>
    </div>
  );
};

export default HamburgerBtn;
