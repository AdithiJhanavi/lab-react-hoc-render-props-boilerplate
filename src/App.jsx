import './App.css';
import LikeImage from './components/LikeImage';
import LikeImageHoc from './components/LikeImagehoc';
import LikePost from './components/LikePost';
import LikePostHoc from './components/imghoc';
import Wrapper from './components/wrap';

function App() {
  return (
    <div>
      <div className="main">
      <h3>Some Blog</h3>

      {/* Render */}

      <div className='buttons'>
        <Wrapper render={(counter, handleIncreament)=>{
          return <LikeImage likeImageCounter={counter} handleLikeImageCount = {handleIncreament}/>}}/>

        <Wrapper render={(counter, handleIncreament)=>{
          return <LikePost LikePostCounter={counter} handlePostCount = {handleIncreament}/>}}/>
      </div>


{/* HOC */} 

      <div className='buttons'>
        <LikeImageHoc/>
        <LikePostHoc/>
      </div>

    </div>
    </div>
  );
}

export default App;