import './App.css';
import Destination from './Destinations/Destination';
import Appbar from './Header/Appbar/Appbar';
import Header from './Header/Header';
import ImageSlider from './Slider/ImageSlider';
import { SliderData } from './Slider/SliderData';

function App() {
  return (
    <div className="App">
      <Header />
      <Appbar />
      <ImageSlider slides={SliderData} />
      <Destination />
    </div>
  );
}

export default App;
