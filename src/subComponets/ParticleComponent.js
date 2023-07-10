import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

import configDark from '../config/particlesjs-config.json';
import configLight from '../config/particlesjs-config-light.json';
import { loadFull } from 'tsparticles';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
`;

const ParticleComponent = props => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Wrapper>
      <Particles
        style={{ position: 'absolute', top: 0 }}
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        params={props.theme === 'light' ? configLight : configDark}
      />
    </Wrapper>
  );
};

export default ParticleComponent;
