import React from 'react';
import { styled } from '@mui/material';
import HeroBackground from './HeroBackground';

const Page = styled('div')({
  width: '100%',
  height: '100vh',
  padding: '2em',
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
      </Container>
    </Page>
  );
}

export default Home;
