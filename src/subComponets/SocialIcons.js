import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Github, Twitter, YouTube } from '../components/allSvg';
import styled from 'styled-components';
import { darkTheme } from '../components/Themes';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;

  color: ${props => props.theme.text};
  z-index: 3;

  & a {
    color: inherit;
    text-decoration: none;
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${props =>
    props.color === 'dark' ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = props => {
  return (
    <Wrapper>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <Link target='_blank' to='/'>
          <Github
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <Link target='_blank' to='/'>
          <Twitter
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <Link target='_blank' to='/'>
          <YouTube
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.6 }}
      >
        <Link target='_blank' to='/'>
          <Facebook
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </Link>
      </motion.div>
      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: '8rem' }}
        transition={{ type: 'spring', duration: 1, delay: 0.8 }}
      />
    </Wrapper>
  );
};

export default SocialIcons;
