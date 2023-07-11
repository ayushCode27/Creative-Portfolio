import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import LogoComponent from '../subComponets/LogoComponent';
import SocialIcons from '../subComponets/SocialIcons';
import PowerButton from '../subComponets/PowerButton';
import { Work } from '../data/WorkData';
import Card from '../subComponets/Card';
import { YinYang } from './allSvg';
import BigTitle from '../subComponets/BigTitle';

const Wrapper = styled.div`
  background-color: ${props => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Box = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WorkPage = () => {
  const ref = useRef(null);
  const yinyangRef = useRef(null);

  useEffect(() => {
    let element = ref.current;
    const handleScroll = () => {
      // horizontal card scroll on vertical scroll
      element.style.transform = `translateX(${-window.scrollY}px)`;

      yinyangRef.current.style.transform = `rotate(${-window.scrollY}deg)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Wrapper>
        <LogoComponent theme='dark' />
        <SocialIcons theme='dark' />
        <PowerButton />
        <Box ref={ref}>
          {Work.map(d => (
            <Card key={d.id} data={d} />
          ))}
        </Box>

        <Rotate ref={yinyangRef}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>

        <BigTitle text='WORK' top='10%' right='20%' />
      </Wrapper>
    </ThemeProvider>
  );
};

export default WorkPage;
