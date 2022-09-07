import { Button, Fade, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const AddNewTask = ({
  openAdd,
  setOpenAdd,
  currentChecklist,
  setCurrentChecklist,
}) => {
  const [taskInput, setTaskInput] = useState('');

  const handleChangeInput = (event) => {
    setTaskInput(event.target.value);
  };

  const handleCancel = () => {
    setOpenAdd(false);
  };

  const handleSave = () => {
    const newTask = {
      id: uuid(),
      taskContent: taskInput,
      taskDone: false,
    };

    const checkListCopy = [...currentChecklist];
    checkListCopy.unshift(newTask);

    setCurrentChecklist(checkListCopy);
  };

  return (
    <Container maxWidth="sm">
      <Fade in={openAdd}>
        <Box sx={{ display: 'flex' }}>
          <TextField
            onChange={handleChangeInput}
            fullWidth
            InputProps={{
              style: {
                height: '48px',
                borderRadius: '8px',
                paddingLeft: '16px',
                background: '#FFF',
              },
            }}
          />
          <Button
            onClick={handleSave}
            variant="contained"
            disabled={taskInput.length < 3}
            sx={{
              padding: '8px 30px',
              textTransform: 'none',
              background: '#66C7F4',
              color: '#000',
              borderRadius: '10px',
              '&:hover': {
                background: '#66C7F4',
              },
            }}
          >
            Save
          </Button>
          <Button
            onClick={handleCancel}
            variant="contained"
            sx={{
              padding: '8px 30px',
              textTransform: 'none',
              background: '#ff1053',
              borderRadius: '10px',
              '&:hover': {
                background: '#ff1053',
              },
            }}
          >
            Cancel
          </Button>
        </Box>
      </Fade>
    </Container>
  );
};

export default AddNewTask;
