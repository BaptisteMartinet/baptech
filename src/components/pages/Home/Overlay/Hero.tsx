import React from 'react';
import { styled } from '@mui/material';

const Container = styled('div')({
  width: '100%',
});

function Hero() {
  return (
    <Container>
      <h1>Baptiste Martinet</h1>
      <h2>Full Stack developer</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga mollitia, dolore cum, veritatis nam recusandae fugit architecto ab beatae cupiditate, sequi ipsum facere ducimus cumque debitis nesciunt quis assumenda dolores.</p>
    </Container>
  );
}

export default Hero;
