
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
      <h1>OSTIMELINE</h1>
      <p>What are you waiting for?</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default MainSection;