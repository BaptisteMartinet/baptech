import React from 'react';
import { styled } from '@mui/material';
import CornerImage from 'assets/corner.svg';

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
  zIndex: -1,
  '@media (max-width: 960px)': {
    width: '100px',
  },
});

const Title = styled('h1')({
  fontWeight: 'bold',
  fontSize: 'var(--fs-xxl)',
  textAlign: 'center',
  animation: 'fadein 4s',
  '@keyframes fadein': {
    from: { opacity: 0 },
    to: { opacity: 1 },
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
