import React from 'react';
import { styled } from '@mui/material';
import Hero from './Hero';
import Socials from './Socials';

const Container = styled('div')({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@media (max-width: 960px)': {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridRowGap: '1rem',
  },
});

function Overlay() {
  return (
    <Container>
      <Hero />
      <Socials />
    </Container>
  );
}

export default Overlay;
