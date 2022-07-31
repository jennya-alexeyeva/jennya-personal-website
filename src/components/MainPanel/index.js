import React from 'react';
import './index.css';
import headshot from './jennya.jpg';

const MainPanel = () => {
  return (
      <div>
        <div className="banner-text">
          <img id="profile-pic" src={headshot} alt='a professional headshot'/>
          <h2>Jennya Alexeyeva</h2>
          <h3>'d͡ʒɛn‧jə ə‧lɛk‧si‧'jɛ‧və</h3>
          <h3>she/her</h3>
        </div>
        <div className="animation-area">
          <ul className="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
  );
}

export default MainPanel;