import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PowerButton from '../subComponets/PowerButton';
import LogoComponent from '../subComponets/LogoComponent';
import SocialIcons from '../subComponets/SocialIcons';
import { NavLink } from 'react-router-dom';
import { YinYang } from './allSvg';
import Intro from './Intro';
import { motion } from 'framer-motion';

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

const rotate = keyframes`
  from {
    transform:rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${props => (props.click ? '50%' : '0%')};
  height: ${props => (props.click ? '100%' : '0%')};
  background-color: #000000;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Center = styled.button`
  position: absolute;
  top: ${props => (props.click ? '85%' : '50%')};
  left: ${props => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${props => (props.click ? 'none' : 'revert')};
    padding-top: 1rem;
  }
`;

const ContactLink = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const BlogLink = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  right: calc(1rem + 2vw);
  text-decoration: none;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
`;

const WorkLink = styled(NavLink)`
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
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

const AboutLink = styled(NavLink)`
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SkillsLink = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <Wrapper>
      <DarkDiv click={click} />

      <Container>
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill='currentColor'
          />
          <span>click here</span>
        </Center>

        <ContactLink target='_blank' to='mailto:ayushagarwal.dev@gmail.com'>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi...
          </motion.h2>
        </ContactLink>
        <BlogLink to='/blog'>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Blog
          </motion.h2>
        </BlogLink>
        <WorkLink to='/work' click={click}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </WorkLink>

        <BottomBar>
          <AboutLink to='/about' click={click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About Me
            </motion.h2>
          </AboutLink>
          <SkillsLink to='/skills'>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Skills
            </motion.h2>
          </SkillsLink>
        </BottomBar>
      </Container>
      {click && <Intro click={click} />}
    </Wrapper>
  );
};

export default Main;
