import React, { useState } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // <-- Change here

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();  // <-- Change here

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/register", { name, email, password });
      navigate("/login"); // <-- Change here
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    <>
      <Navbar />
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bgcolor="#f5f5f5" p={3}>
        <Typography variant="h4" gutterBottom>Register</Typography>
        <Box width="100%" maxWidth="400px">
          <TextField fullWidth label="Name" margin="normal" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField fullWidth label="Email" margin="normal" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button fullWidth variant="contained" color="primary" sx={{ mt: 2, py: 1 }} onClick={handleSubmit}>
            Register
          </Button>
          {error && <Typography variant="body2" color="error">{error}</Typography>}
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account? <Link href="/login">Login</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Register;
