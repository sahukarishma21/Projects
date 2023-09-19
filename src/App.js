import React from 'react';
import ImageSlider from './components/ImageSlider/ImageSlider';

const images = [
  { src:' https://images.pexels.com/photos/5622413/pexels-photo-5622413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { src: 'https://images.pexels.com/photos/5859323/pexels-photo-5859323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { src: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { src: 'https://images.pexels.com/photos/3992206/pexels-photo-3992206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
];

function App() {
  return (
    <div className="App">
      <ImageSlider images={images} parallaxIntensity={10} transitionSpeed={0.5} />
    </div>
  );
}

export default App;
