import React from 'react';
import { styled } from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
} from '@mui/icons-material';

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
});

const List = styled('ul')({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  '& li': {
    marginInline: '.5em',
  },
});

function Socials() {
  return (
    <Container>
      <List>
        <li><a href="mailto:baptiste.martinet@epitech.eu" aria-label="Email link"><Email fontSize="large" /></a></li>
        <li><a href="https://www.linkedin.com/in/baptiste-martinet/" aria-label="LinkedIn link"><LinkedIn fontSize="large" /></a></li>
        <li><a href="https://github.com/BaptisteMartinet" aria-label="Github link"><GitHub fontSize="large" /></a></li>
      </List>
    </Container>
  );
}

export default Socials;
