import { styled, Paper } from '@mui/material';

const TodoContainer = styled(Paper)(({ theme }) => ({
  textAlign: 'left',
  fontWeight: 'bold',
  padding: '50px',
  background: '#FFF',
  borderRadius: '10px',
  minHeight: '600px',
}));

export default TodoContainer;
