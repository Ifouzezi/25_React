import './App.css';
import Accordian from './components/accordian';
import ModalTest from './components/customModal/modalTest';
import TabsTest from './components/customTab/tabsTest';
import GithubProfile from './components/githubProflieFinder';
import ImageSlider from './components/imageSlider';
import LightDarkMode from './components/lightDarkMode';
import LoadMoreData from './components/loadMoreData';
import QRCodeGenerator from './components/qrCodeGenerator';
import RandomColor from './components/randomColor';
import StarRating from './components/ratingStars';
import ScrollIndicator from './components/scrollIndicator';
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
      {/* <Sidebar/> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator/> */}
      {/* Light Dark Mode */}
      {/* <LightDarkMode/> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator/> */}

      {/* Custom Tabs */}
      {/* <TabsTest/> */}

      {/* Custos Modal */}
      {/* <ModalTest/> */}

      {/* Github Profile Finder */}
      <GithubProfile/>
    </div>
  );
}

export default App;
