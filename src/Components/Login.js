import React, { useState, useContext } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import Navbar from './Navbar'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { token, name } = response.data; // Ensure the server sends the username
      login(token, name); // Pass token and name to login function
      navigate('/feedback');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
   <>
   <Navbar/>
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bgcolor="#f5f5f5" p={3}>
   <Typography variant="h4" gutterBottom>Login</Typography>
   <Box width="100%" maxWidth="400px">
     <TextField fullWidth label="Email" margin="normal" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
     <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
     <Button fullWidth variant="contained" color="primary" sx={{ mt: 2, py: 1 }} onClick={handleSubmit}>Login</Button>
     {error && <Typography variant="body2" color="error">{error}</Typography>}
     <Typography variant="body2" align="center" sx={{ mt: 2 }}>
       <Link href="/register">Create an account</Link> | <Link href="/reset-password">Forgot password?</Link>
     </Typography>
   </Box>
 </Box></>
  );
};

export default Login;
