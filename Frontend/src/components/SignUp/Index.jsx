import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { register } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

const SignUp =() => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    cf_password: ''
  });
  const { name, email, password, cf_password } = formData;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit =  async (e) => {
    e.preventDefault();
    console.log("here-------", name, email, password, cf_password);
    dispatch(register(formData));
    if(isAuth) navigate('/home');
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
          Sign Up
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
            <form onSubmit={e => onSubmit(e)}>
                <TextField
                    margin="normal"
                    value={name}
                    onChange={e => onChange(e)}
                    required
                    fullWidth
                    type="text"
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
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
                    type="password"
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    value={cf_password}
                    onChange={e => onChange(e)}
                    required
                    fullWidth
                    type="password"
                    id="cf_password"
                    label="Confirm Password"
                    name="cf_password"
                    autoComplete="cf_password"
                    autoFocus
                />
                {/* <FormControl sx={{m:"16px 0 8px 0",width: "100%" }} variant="outlined" required>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    value={password}
                    onChange={e => onChange(e)}
                    label="Password"
                  />
                </FormControl> */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, background:"#222B59"}}
                >
                    Sign Up
                </Button>
            </form>
          <Grid container>
            <Grid item xs>
              <Link to="/login" variant="body2" sx={{ color:"#222B59"}} underline="hover">
                  Already a User? Login.
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
