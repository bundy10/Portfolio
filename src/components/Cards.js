import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import image from './images/img-1.PNG'
import image1 from './images/img-2.PNG'
import image2 from './images/img-3.PNG'
import image3 from './images/img-4.PNG'
import image4 from './images/img-5.PNG'

function Cards() {
  return (
    <div className='cards'>
      <h1 className='title'>Some work i have done</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {image}
              text='Song Marketplace: Please Click to Visit!'
              label='Ruby On Rails'
              path='http://www.songsaviour.com/'
            />
            <CardItem
              src={image1}
              text='Expense Tracker Powered by Speechly'
              label='React'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={image2}
              text='Events Marketplace: Please Click to Visit!'
              label='Ruby On Rails'
              path='https://group-real-xp.herokuapp.com/'
            />
            <CardItem
              src={image3}
              text='Cocktail Sort Algorithm '
              label='C++'

            />
            <CardItem
              src={image4}
              text='Bubble Sort Algorithm'
              label='C++'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;