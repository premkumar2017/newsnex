import React from 'react';
//import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
// Other Material-UI imports...

import { Box, TextField, Button, Typography, Link } from '@mui/material';

const ResetPassword = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5f5f5"
      p={3}
    >
      <Typography variant="h4" gutterBottom>
        Reset Password
      </Typography>
      <Box width="100%" maxWidth="400px">
        <TextField fullWidth label="Email" margin="normal" variant="outlined" />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2, py: 1 }}
        >
          Send Reset Link
        </Button>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          <Link href="/login">Back to Login</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default ResetPassword;
