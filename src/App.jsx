import React from 'react';
import Properties from './components/Properties';

const properties = [
  {
    id: 1,
    title: 'Modern Apartment in Downtown',
    location: 'New York, NY',
    image: 'https://example.com/images/apartment1.jpg',
    price: 350000,
  },
  {
    id: 2,
    title: 'Cozy Cottage Near the Beach',
    location: 'Santa Monica, CA',
    image: 'https://example.com/images/cottage1.jpg',
    price: 475000,
  },
  {
    id: 3,
    title: 'Luxury Villa with Ocean View',
    location: 'Miami, FL',
    image: 'https://example.com/images/villa1.jpg',
    price: 1250000,
  },
  {
    id: 4,
    title: 'Spacious Family House',
    location: 'Austin, TX',
    image: 'https://example.com/images/house1.jpg',
    price: 590000,
  },
  {
    id: 5,
    title: 'Penthouse with Skyline View',
    location: 'Chicago, IL',
    image: 'https://example.com/images/penthouse1.jpg',
    price: 900000,
  },
];

const App = () => {
  return (
    <div>
      <h1>Real Estate App</h1>
      <h2>A place to find your home</h2>
      <Properties properties={properties} />
    </div>
  );
};

export default App;
