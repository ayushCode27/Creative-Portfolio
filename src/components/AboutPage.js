import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { darkTheme } from './Themes';
import LogoComponent from '../subComponets/LogoComponent';
import SocialIcons from '../subComponets/SocialIcons';
import PowerButton from '../subComponets/PowerButton';
import ParticleComponent from '../subComponets/ParticleComponent';
import astronaut from '../assets/Images/spaceman.png';

const Wrapper = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
   0% {
    transform: translateY(-10px);
  }
   50% {
    transform: translateY(15px) translateX(15px);
  }
   100% {
    transform: translateY(-10px);
  }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite; 

  img {
    width: 100%;
    height: auto;
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Wrapper>
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <ParticleComponent theme='dark' />
        <Spaceman>
          <img src={astronaut} alt='spaceman' />
        </Spaceman>
      </Wrapper>
    </ThemeProvider>
  );
};

export default AboutPage;
