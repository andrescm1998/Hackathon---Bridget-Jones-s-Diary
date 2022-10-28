import React from 'react'

import {Box, TextField, Button} from '@mui/material';

function Form() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    sendData({title: data.get('title'), content: data.get('content'), is_public: false});

  };

  async function sendData(entry){
    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(entry)
    }

    const res = await fetch("http://localhost:3000/posts", options)
    console.log(res)
      
  }


  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField style={{width: '60%'}} name='title' id="title" label="Title" />
      {/* <TextField
              margin="normal"
              required
              width="50%" 
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              style={{width: '60%'}}
            /> */}
      <TextField style={{width: '60%'}} multiline rows={5} name='content' id="content" label="Content" variant="standard"  />
      <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >Add</Button>
    </Box>
  )
}

export default Form
