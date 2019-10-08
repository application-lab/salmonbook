import React from 'react';
import './App.css';

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
          <p>Chinook are anadromous fish native to the North Pacific Ocean and the river systems of western North America, ranging from California to Alaska, as well as Asian rivers ranging from northern Japan to the Palyavaam River in the Arctic north-east Siberia.</p>
        </div>
        <div className="posts">
          <img src="https://via.placeholder.com/50" alt="a river" />
          <img src="https://via.placeholder.com/50" alt="a river" />
          <img src="https://via.placeholder.com/50" alt="a river"/>
          <img src="https://via.placeholder.com/50" alt="a river"/>
          <img src="https://via.placeholder.com/50" alt="a river"/>
        </div>
        
      </div>

    </div>
  );
}

export default App;
