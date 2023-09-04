import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
  Link,
  InputAdornment,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import lock from '../assests/images/login.svg';

const theme = createTheme({
  palette: {
    primary: {
      main: '#694bdb',
    },
  },
});

const loginPageStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
};

const formStyle = {
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '10px',
  textAlign: 'center', 
};

const submitStyle = {
  margin: '1rem 0',
};

const inputStyle = {
  borderRadius: '5px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('your-authentication-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="box" component="main" maxHeight="xs" style={loginPageStyle}>
        <CssBaseline />
        <Paper elevation={3} style={containerStyle}>
          <div>
            <Typography variant="h5">Login</Typography>
            <form style={formStyle} onSubmit={handleLogin}>
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="username"
                placeholder='Username'
                name="username"
                autoComplete="username"
                autoFocus
                sx={{
                  backgroundColor: 'white',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
                style={inputStyle}
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                // label="Password"
                placeholder='Password'
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  backgroundColor: 'white',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                style={inputStyle}
              />
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Remember Me"
                  />
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={submitStyle}
              >
                Login
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="#" variant="body2">
                    Don't have an account? Register
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <div>
            <img src={lock} alt="lock" className="lock" style={imageStyle} />
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
