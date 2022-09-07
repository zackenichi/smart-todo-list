import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton } from '@mui/material';

const TaskButtons = ({
  taskId,
  currentChecklist,
  setCurrentChecklist,
  edit,
  setEdit,
}) => {
  const handleDeleteTask = (id) => {
    if (id) {
      const checkListCopy = [...currentChecklist];

      const filteredChecklist = checkListCopy.filter((task) => {
        return task.id !== id;
      });

      setCurrentChecklist(filteredChecklist);
    }
  };

  return (
    <>
      <IconButton
        onClick={() => setEdit(true)}
        sx={{ display: edit ? 'none' : 'auto' }}
      >
        <EditOutlinedIcon />
      </IconButton>
      <IconButton onClick={() => handleDeleteTask(taskId)}>
        <DeleteOutlinedIcon />
      </IconButton>
    </>
  );
};

export default TaskButtons;
