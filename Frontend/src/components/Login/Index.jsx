import React, { Fragment, useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { Link, Redirect } from 'react-router-dom';
import { createMuiTheme } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../actions/auth";
import { Link, useNavigate } from 'react-router-dom';

const theme = createMuiTheme({
    overrides: {
      MuiInput: {
        underline: {
          "&:before": {
            borderBottom: "1px solid #222B59"
          }
        }
      }
    }
  });

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit =  async (e) => {
    e.preventDefault();
    console.log("here-------", email, password)
    dispatch(login(email, password));
    console.log("isAuth-------", isAuth)
    if(isAuth) navigate('/property');
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" fontWeight="600" fontSize="45px" color="#222B59">
          Real-Estate
        </Typography>
        <Typography component="h1" variant="h5" color="#222B59">
          Sign in
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
            <form onSubmit={e => onSubmit(e)}>
                <TextField
                    margin="normal"
                    value={email}
                    onChange={e => onChange(e)}
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    value={password}
                    onChange={e => onChange(e)}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                /> */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 , background:"#222B59", "&hover": {background: "#262f5d"} }}
                >
                    Sign In
                </Button>
            </form>
          <Grid container>
            {/* <Grid item xs>
              <Link to="#" variant="body2" sx={{ color:"#222B59"}} underline="hover">
                Forgot password?
              </Link>
            </Grid> */}
            <Grid item>
              <Link to="/signUp" variant="body2"  sx={{ color:"#222B59"}} underline="hover">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;