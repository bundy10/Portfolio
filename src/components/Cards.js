import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image from './images/img-1.PNG'
import image1 from './images/img-2.PNG'

function Cards() {
  return (
    <div className='cards'>
      <h1 className='title'>Some work i have done</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {image}
              text='Song Marketplace'
              label='Ruby On Rails'
              path='/work'
            />
            <CardItem
              src={image1}
              text='Expense Tracker Powered by Speechly'
              label='React'
              path='/work'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Eevents Marketplace'
              label='Ruby On Rails'
              path='/work'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Boolean'
              label='C++'
              path='/work'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Boolean'
              label='C++'
              path='/work'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;