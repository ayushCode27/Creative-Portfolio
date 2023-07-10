import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import bgImg from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import LogoComponent from '../subComponets/LogoComponent';
import PowerButton from '../subComponets/PowerButton';
import SocialIcons from '../subComponets/SocialIcons';
import BlogComponent from './BlogComponent';
import { Blogs } from '../data/BlogData';
import AnchorComponent from '../subComponets/Anchor';

const Wrapper = styled.div`
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

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <Wrapper>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent numbers={numbers}/>
        <Center>
          <Grid>
            {Blogs.map(blog => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
      </Container>
    </Wrapper>
  );
};

export default BlogPage;
