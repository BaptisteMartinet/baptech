import React from 'react';
import { styled } from '@mui/material';
import HeroBackground from './HeroBackground';
import Overlay from './Overlay';

const Page = styled('div')({
  width: '100%',
  height: '100vh',
  padding: '3em',
});

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
});

function Home() {
  return (
    <Page>
      <Container>
        <HeroBackground />
        <Overlay />
      </Container>
    </Page>
  );
}

export default Home;
