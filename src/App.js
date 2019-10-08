import React from 'react';
import './App.css';

let postImage = 'https://bit.ly/2OpuL2i';

//or we can use arrays and props!
let postImages = [
  'https://bit.ly/2OpuL2i',
  'https://bit.ly/2OuzOyA'
];


function App() {
  return (
    <div>
      <Profile postImage={postImages[0]} postContent='chilling on this lake' />
      <Profile postImage={postImages[1]} postContent='hitting the gym' />
    </div>
  );
}

// here we create a new function (call this a COMPONENT in React lingo). It
// will hold our profile, this will allow us to pass an argument (called 'props')
// into the function and have access to the variables we create in the App() function
// above. This lets us compose interfaces and re-use code. Super powerful.

function Profile(props) {
  return (
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
        <img src={props.postImage} alt="a lake" />
        <p>{props.postContent}.</p>
      </div>
    </div>
  );
}

export default App;
