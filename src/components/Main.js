import React from 'react';
import styled from 'styled-components';
import PowerButton from '../subComponets/PowerButton';
import LogoComponent from '../subComponets/LogoComponent';
import SocialIcons from '../subComponets/SocialIcons';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const ContactLink = styled(Link)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const BlogLink = styled(Link)`
  color: ${props => props.theme.text};
  position: absolute;
  right: calc(1rem + 2vw);
  text-decoration: none;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
`;

const WorkLink = styled(Link)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  z-index: 1;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const AboutLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const SkillsLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />

        <ContactLink target='_blank' to='mailto:ayushagarwal.dev@gmail.com'>
          <h2>Say hi...</h2>
        </ContactLink>
        <BlogLink target='_blank' to='mailto:ayushagarwal.dev@gmail.com'>
          <h2>Blog</h2>
        </BlogLink>
        <WorkLink to='/work'>
          <h2>Work</h2>
        </WorkLink>

        <BottomBar>
          <AboutLink to='/about'>
            <h2>About Me</h2>
          </AboutLink>
          <SkillsLink to='/skills'>
            <h2>Skills</h2>
          </SkillsLink>
        </BottomBar>
      </Container>
    </Wrapper>
  );
};

export default Main;
