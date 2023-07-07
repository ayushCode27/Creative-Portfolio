import React from 'react';
import styled from 'styled-components';
import PowerButton from '../subComponets/PowerButton';
import LogoComponent from '../subComponets/LogoComponent';
import SocialIcons from '../subComponets/SocialIcons';

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

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />
      </Container>
    </Wrapper>
  );
};

export default Main;
