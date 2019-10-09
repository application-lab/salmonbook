import React from 'react';
import './App.css';

// let postImage = 'https://bit.ly/2OpuL2i'; //1

//or we can use arrays and props! //2
// let postImages = [
//   'https://bit.ly/2OpuL2i',
//   'https://bit.ly/2OuzOyA'
// ];

//our you could have one single array of objects...
let posts = [
  {
    postImage: 'https://bit.ly/2OpuL2i',
    postContent: 'chilling on this lake',
    likes: 1,
  },
  {
    postImage: 'https://bit.ly/2OuzOyA',
    postContent: 'hitting the gym',
    likes: 5,
  },
]


function App() {
  return (
    <div>
      <Profile postImage={posts[0].postImage} postContent={posts[0].postContent} />
      <Profile postImage={posts[1].postImage} postContent={posts[1].postContent} />
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
