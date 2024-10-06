import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/imageSlider';
import LoadMoreData from './components/loadMoreData';
import RandomColor from './components/randomColor';
import StarRating from './components/ratingStars';
import Sidebar from './components/treeMenu';


function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* RandomColor component */}
      {/* <RandomColor /> */}

      {/* RatingStars component */}
      {/* <StarRating noOfStars ={5}/> */}

      {/* ImageSlider component */}
      {/* <ImageSlider/> */}

      {/* LoadMoreData component */}
      {/* <LoadMoreData/> */}

      {/* TreeMenu component */}
      <Sidebar/>

    </div>
  );
}

export default App;
