import React, { useEffect, useRef } from 'react';
import { Anchor, Link } from '../components/allSvg';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);

  .chain {
    transform: rotate(135deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

const AnchorComponent = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = bodyHeight - (scrollPosition + windowSize);
      let diffP = (diff * 100) / (bodyHeight - windowSize);
      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.scrollY > 5) {
        hiddenRef.current.style.display = 'none';
      }else{
        hiddenRef.current.style.display = 'block';
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <PreDisplay ref={hiddenRef} className='hidden'>
        <Anchor width={70} height={70} fill='currentColor' />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(25)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill='currentColor'
              className='chain'
            />
          );
        })}
        <Anchor width={70} height={70} fill='currentColor' />
      </Slider>
    </Wrapper>
  );
};

export default AnchorComponent;
