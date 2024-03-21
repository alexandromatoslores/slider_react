// App.jsx
import React from 'react';
import SliderComponent from './Slider';
import './App.css';

const images = [
  { image: '/imgs/img1.jpg', title: 'Mercado general' },
  { image: '/imgs/img2.jpg', title: 'Alimentos' },
  { image: '/imgs/img3.jpg', title: 'Bebidas e infusiones' },
  { image: '/imgs/img4.jpg', title: 'Embutidos' },
  { image: '/imgs/img5.jpg', title: 'Carnes' },
  { image: '/imgs/img6.jpg', title: 'Articulos para el hogar' },
  { image: '/imgs/img7.jpg', title: 'Especies y condimentos' },
  { image: '/imgs/img8.jpg', title: 'Dulces' }
];

const App = () => (
  <div className="App">
    <SliderComponent images={images} />
  </div>
);

export default App;