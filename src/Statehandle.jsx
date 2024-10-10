import React, { useState } from 'react';
import Img from './butterfly.jpg';
import Img1 from './peacock.jpeg'; 

const Statehandle = () => {
  const [like, setLike] = useState(0);
  const [currentImg, setCurrentImg] = useState(Img); 

  function decrement() {
    if (like === 0) {
      setLike(0); 
    } else {
      setLike(like - 1);
    }
  }

  function m1() {
    setCurrentImg(Img); 
  }

  function m2() {
    setCurrentImg(Img1);
  }

  return (
    <div>
     
      <img 
        src={currentImg} 
        alt="Butterfly" 
        onMouseEnter={m2} 
        onMouseLeave={m1}
      />

      <p>
        Likes: {like}
      </p>
      
      <button onClick={() => setLike(like + 1)}>Like</button>
      <button onClick={decrement}>Unlike</button>
    </div>
  );
};

export default Statehandle;
