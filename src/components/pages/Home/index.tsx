import React from 'react';
import { styled } from '@mui/material';
import HeroBackground from './HeroBackground';
import Overlay from './Overlay';

const Page = styled('div')({
  width: '100%',
  height: '100vh',
  padding: '3em',
  animation: 'fadein ease 2s',
  '@media (max-width: 960px)': {
    padding: '2em',
    paddingBottom: '4em',
  },
});

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
});

function Home() {
  return (
    <main>
      <Page>
        <Container>
          <HeroBackground />
          <Overlay />
        </Container>
      </Page>
    </main>
  );
}

export default Home;
