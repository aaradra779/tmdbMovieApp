import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './dropdown.css';

function Dropdown({ title, menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="dropdown"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="dropdownButton">{title}</button>

        {isOpen && (
          <ul className="dropdownMenu">
            {menuItems.map((item) => {
              <li className="dropdownItems">
                <Link to={item.path}>{item.label}</Link>
              </li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default Dropdown;
