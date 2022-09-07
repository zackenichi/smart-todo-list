import { Grid } from '@mui/material';
import React from 'react';
import { TaskItem } from '../molecules';

const TodoList = ({ currentChecklist, setCurrentChecklist }) => {
  return (
    <Grid container spacing={0}>
      {currentChecklist.map((task, index) => (
        <Grid item xs={12} key={task.id}>
          <TaskItem
            index={index}
            taskContent={task.taskContent}
            taskId={task.id}
            currentChecklist={currentChecklist}
            setCurrentChecklist={setCurrentChecklist}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;
