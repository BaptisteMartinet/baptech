import React from 'react';
import { styled } from '@mui/material';
import CornerImage from 'assets/corner.svg';

const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
});

const Corner = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
  userSelect: 'none',
  '@media (max-width: 960px)': {
    width: '100px',
  },
});

const Title = styled('h1')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontWeight: 'bold',
  margin: 0,
  fontSize: 'var(--fs-xxl)',
  textAlign: 'center',
  animation: 'fadein ease 6s',
  '@media (max-width: 960px)': {
    top: '40%',
  },
});

function Background() {
  return (
    <Container>
      <Corner src={CornerImage} alt="Corner" />
      <Title>
        think.
        <br />
        craft.
        <br />
        deploy.
        <br />
        scale.
      </Title>
    </Container>
  );
}

export default Background;
