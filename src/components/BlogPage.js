import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import bgImg from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import LogoComponent from '../subComponets/LogoComponent';
import PowerButton from '../subComponets/PowerButton';
import SocialIcons from '../subComponets/SocialIcons';
import BlogComponent from './BlogComponent';
import { Blogs } from '../data/BlogData';
import AnchorComponent from '../subComponets/Anchor';
import BigTitle from '../subComponets/BigTitle';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

// Framer motion config
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5, duration: 0.5 } },
};

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <Wrapper
      variants={container}
      initial='hidden'
      animate='show'
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent numbers={numbers} />
        <Center>
          <Grid>
            {Blogs.map(blog => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
        <BigTitle text='BLOG' top='5rem' left='5rem' />
      </Container>
    </Wrapper>
  );
};

export default BlogPage;
