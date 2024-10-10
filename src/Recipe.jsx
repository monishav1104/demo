import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import './Recipe.css'

const BackgroundContainer = styled.div`
  background-image: url('https://wallpapercave.com/wp/wp1874155.jpg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  height: 100vh;  
  width: 100vw;    
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Sample = () => {
  return (
    <BackgroundContainer>
      <ContentWrapper>
        <div className='r1'>
          <h2>
            <marquee behavior="slide" direction="down">THE COMFORT CORNER</marquee></h2>
        </div>
        <div className='r2'>
          <b>Contact: +91 9500944872</b>
        </div>
        <div className='r3'>
          <Button variant="contained">MENU</Button>
        </div>
      </ContentWrapper>
    </BackgroundContainer>
  );
};

export default Sample;
