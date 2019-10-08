import React from 'react';
import './App.css';

let postImage = 'https://bit.ly/2OpuL2i';

function App() {
  return (
    <div>
      <div className="profileCard">
        <div className="profileImage" />
        <div className="profileHeader">
          <div>
          <h1>Sam</h1>
            <p>Columbia River, OR</p>
          </div>
          <div className="likes">
            <h3>100 likes</h3>
          </div>

        </div>
        <div className="profileDescription">
          <img src={postImage} alt="a lake" />
          <p>Chilling on this lake.</p>
        </div>        
      </div>
    </div>
  );
}

export default App;
