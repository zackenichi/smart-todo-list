import React from 'react';
import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Typography,
} from '@mui/material';

const TaskCheckbox = ({
  index,
  taskContent,
  currentChecklist,
  setCurrentChecklist,
}) => {
  const [done, setDone] = React.useState(false);

  const handleChangeStatus = (event) => {
    setDone(event.target.checked);

    const checklistCopy = [...currentChecklist];
    // we will move done tasks to the end of the array
    if (event.target.checked) {
      checklistCopy.push(checklistCopy.splice(index, 1)[0]);
      // move task to beginning
    } else {
      checklistCopy.unshift(checklistCopy.splice(index, 1)[0]);
    }

    setCurrentChecklist(checklistCopy);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={done}
            onChange={handleChangeStatus}
            sx={{
              color: '#FF1053',
              '&.Mui-checked': {
                color: '#6C6EA0',
              },
            }}
          />
        }
        label={
          <Typography sx={{ textDecoration: done ? 'line-through' : 'none' }}>
            {taskContent}
          </Typography>
        }
      />
    </FormGroup>
  );
};

export default TaskCheckbox;
