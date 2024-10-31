// src/App.js
import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';

function App() {
  const [url, setUrl] = useState('');

  const handleGenerateQuestions = () => {
    console.log("URL submitted:", url);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: '1rem', fontSize: '2.5rem' }}>
        Discover Web Insights
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '2rem', fontSize: '1.2rem', maxWidth: '600px' }}>
        Enter a website URL to uncover insights and learn more about its content.
      </Typography>

      <TextField
        fullWidth
        placeholder="Enter Website URL"
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{
          maxWidth: '500px',
          backgroundColor: '#FFFFFF',
          borderRadius: '30px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none', 
            },
            borderRadius: '30px',
            input: { color: '#000000' }, 
          },
          marginBottom: '1.5rem',
        }}
      />

      <Button
        variant="outlined"
        onClick={handleGenerateQuestions}
        sx={{
          borderColor: '#FFFFFF', 
          color: '#FFFFFF',
          textTransform: 'none',
          padding: '10px 20px',
          fontWeight: 'bold',
          borderRadius: '30px',
          maxWidth: '200px',
          '&:hover': {
            borderColor: '#FFFFFF', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default App;
