import React, { useState } from 'react';

function Togglebutton({ active, onclick, title, button1, button2 }) {
  // const buttons = {
  //   today: 'day',
  //   week: 'week',
  // };
  // console.log(active);

  return (
    <>
     
      <div className="toggle">
        <div className="toggle__buttons">
          <button
            className={`toggle__today ${active ? 'toggle__active' : ''}`}
            onClick={onclick}
          >
            {button1}
          </button>
        </div>
      </div>
    </>
  );
}

export default Togglebutton;
