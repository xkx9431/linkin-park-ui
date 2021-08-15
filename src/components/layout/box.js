import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer(props) {
    const {children } = props
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" >
        <Typography component="div" style={{ backgroundColor: 'rgb(84, 58, 100)', height: '100vh' }} >
            {children}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
