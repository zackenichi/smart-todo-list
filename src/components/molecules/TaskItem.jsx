import { Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { EditTask, TaskButtons, TaskCheckbox } from '../atoms';

const TaskItem = ({
  index,
  taskContent,
  taskId,
  currentChecklist,
  setCurrentChecklist,
}) => {
  const [showTaskOptions, setShowTaskOptions] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <Grid
      container
      alignItems="center"
      onMouseEnter={() => setShowTaskOptions(true)}
      onMouseLeave={() => setShowTaskOptions(false)}
    >
      <Grid item xs={10}>
        {edit ? (
          <EditTask
            taskContent={taskContent}
            setEdit={setEdit}
            taskId={taskId}
            currentChecklist={currentChecklist}
            setCurrentChecklist={setCurrentChecklist}
          />
        ) : (
          <TaskCheckbox
            index={index}
            taskContent={taskContent}
            currentChecklist={currentChecklist}
            setCurrentChecklist={setCurrentChecklist}
          />
        )}
      </Grid>
      <Grid
        item
        xs={2}
        textAlign="right"
        display={showTaskOptions ? 'auto' : 'none'}
      >
        <TaskButtons
          taskId={taskId}
          currentChecklist={currentChecklist}
          setCurrentChecklist={setCurrentChecklist}
          edit={edit}
          setEdit={setEdit}
        />
      </Grid>
    </Grid>
  );
};

export default TaskItem;
