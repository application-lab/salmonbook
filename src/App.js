import React from 'react';
import './App.css';

let postImage = 'https://bit.ly/2OpuL2i';

//or we can use arrays and props!
let postImages = [
  'https://bit.ly/2OpuL2i',
  'https://bit.ly/2OuzOyA'
];

//here is our app function. we're passing a property to our <Profile /> component called postImage, with the value being
// the first value of our postImages array (postImages[0]). Because we pass the same property a second time, but give it 
// a different value, we'll see the second image from the postImages array on line 7


/* 

  OUR GOALS TODAY
  1. we don't want to have to retype the <Profile /> component and the array value. We learned about the map() function
     how could we used that make sure that no matter how many profiles we had, we'd be able to show each
  2. we'd like to make our data model (the data we have related to posts) more robust. Let's think about content that might
     make sense and add it. Now that we understand map() better, we can do lots of interesting things!
*/
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
          <h1>Sam</h1>
          <p>Columbia River, OR</p>
      </div>
      <div className="post">
        <img src={props.postImage} alt="a lake" />
      </div>
    </div>
  );
}

export default App;
