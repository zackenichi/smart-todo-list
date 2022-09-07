import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const EditTask = ({
  taskContent,
  setEdit,
  taskId,
  currentChecklist,
  setCurrentChecklist,
}) => {
  const [taskInput, setTaskInput] = useState(taskContent);

  const handleChangeTaskInput = (event) => {
    setTaskInput(event.target.value);
  };

  const saveTask = () => {
    if (taskId) {
      const updatedList = currentChecklist.map((item) => {
        if (item.id === taskId) {
          return { ...item, taskContent: taskInput };
        }
        return item;
      });

      setCurrentChecklist(updatedList);
    }
    setEdit(false);
  };

  return (
    <TextField
      onChange={handleChangeTaskInput}
      fullWidth
      defaultValue={taskContent}
      placeholder="Enter task..."
      InputProps={{
        style: {
          height: '48px',
          borderRadius: '8px',
          paddingLeft: '16px',
        },
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={saveTask}
            sx={{ cursor: 'pointer' }}
          >
            <CheckOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default EditTask;
