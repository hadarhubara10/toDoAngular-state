import { Button, TextField } from '@mui/material';
import React from 'react';

export const Input = ({ handleChange, handleSubmit }) => {
  // const [value, setValue] = useState('');
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <div>
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Todo"
        variant="outlined"
      />
      <Button
        onClick={handleSubmit}
        size="large"
        sx={{ height: '56px' }}
        variant="contained"
      >
        Create
      </Button>
    </div>
  );
};
