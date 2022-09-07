import { Container, Box } from '@mui/material';
import React from 'react';
import { TodoContainer } from '../atoms';
import TodoList from './TodoList';

const AppBody = ({ currentChecklist, setCurrentChecklist }) => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          flexGrow: 1,
          alignItems: 'center',
          flexDirection: 'column',
          padding: '24px',
        }}
      >
        <TodoContainer>
          <TodoList
            currentChecklist={currentChecklist}
            setCurrentChecklist={setCurrentChecklist}
          />
        </TodoContainer>
      </Box>
    </Container>
  );
};

export default AppBody;
