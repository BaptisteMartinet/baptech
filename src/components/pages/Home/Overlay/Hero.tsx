import React from 'react';
import {
  styled,
  Button as MuiButton,
} from '@mui/material';

const Container = styled('div')({
  width: '100%',
});

const Title = styled('h1')({
  marginBlock: '.5em',
  fontSize: 'var(--fs-l)',
  color: 'black',
  '& span': {
    color: 'rgba(0, 0, 0, 0.4)',
  },
});

const SubTitle = styled('h2')({
  marginBlock: '.5em',
  fontSize: 'var(--fs-xl)',
  '& span': {
    fontSize: 'var(--fs-l)',
    fontWeight: 'normal',
  },
});

const Info = styled('p')({
  fontSize: 'var(--fs-m)',
  lineHeight: 'var(--fs-l)',
  '& span': {
    textDecoration: 'underline',
  },
  '& a': {
    fontWeight: 'bold',
  },
});

const Button = styled(MuiButton)({
  fontSize: 'var(--fs-m)',
  background: 'black',
  '&:hover': {
    background: 'black',
  },
});

function Hero() {
  return (
    <Container>
      <Title>
        baptiste
        <span>martinet</span>
      </Title>
      <SubTitle>
        Full Stack
        <span> software engineer</span>
      </SubTitle>
      <Info>
        {'Freelance developer based in '}
        <span>Paris, France</span>
        {' 🥐.'}
        <br />
        {'5th year '}
        <a href="https://www.epitech.eu/">Epitech</a>
        {' student.'}
        <br />
        Fluent in French and English.
        <br />
        {'I build backends with '}
        <a href="https://graphql.org/">GraphQL</a>
        {', web apps with '}
        <a href="https://reactjs.org/">React</a>
        {', and mobile apps with '}
        <a href="https://reactnative.dev/">React Native</a>
        .
        {/* {'I mastered in Computer Science at '}
        <a href="https://www.epitech.eu/">Epitech</a>
        {' in 2023.'} */}
      </Info>
      <a href="https://www.malt.fr/profile/baptistemartinet" target="_blanck">
        <Button variant="contained">hire me</Button>
      </a>
    </Container>
  );
}

export default Hero;
