import React from 'react';
import { styled } from '@mui/material';
import CornerImage from 'assets/corner.svg';

const Page = styled('div')({
  width: '100%',
  height: '100vh',
  padding: '2em',
});

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Corner = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  '@media (max-width: 960px)': {
    width: '100px',
  },
});

const Title = styled('h1')({
  fontWeight: 'bold',
  fontSize: 'var(--fs-xxl)',
  textAlign: 'center',
});

function Home() {
  return (
    <main>
      <Page>
        <Container>
          <Corner src={CornerImage} alt="Corner" />
          <Title>
            research.
            <br />
            build.
            <br />
            deploy.
          </Title>
        </Container>
      </Page>
    </main>
  );
}

export default Home;
