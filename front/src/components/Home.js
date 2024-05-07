import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navigation from './navigationComponent/Navigation';

function Home() {
  const [value, onChange] = useState(new Date());
  
  const dateFormat = (value) => {
    let dateArr = value.split('/');
    return dateArr[2] + '-' +
          (dateArr[1].length === 1 ? ( '0' + dateArr[1]) : dateArr[1]) + '-' +
          (dateArr[0].length === 1 ? ( '0' + dateArr[0]) : dateArr[0]);
  }
  
  let date = dateFormat(value.toLocaleDateString('en-UK'));
  const onClickIsPresed = (value) => {
    date = dateFormat(value.toLocaleDateString('en-UK'));
  };


  return (
    <div>
      <Navigation />
      <div className='d-flex justify-content-center'>
        <Calendar
          onChange={onChange}
          onClickDay={onClickIsPresed}
          value={value}
        />
      </div>
      <div className='mt-4'>
      </div>
    </div>
  )
}

export default Home