import { useState } from 'react';
import './App.css';
import { AddNewTask } from './components/atoms';
import { AppBody, AppHeader } from './components/organisms';

function App() {
  const [currentChecklist, setCurrentChecklist] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <div className="App">
      <AppHeader
        setOpenAdd={setOpenAdd}
        setCurrentChecklist={setCurrentChecklist}
      />
      {openAdd && (
        <AddNewTask
          openAdd={openAdd}
          setOpenAdd={setOpenAdd}
          currentChecklist={currentChecklist}
          setCurrentChecklist={setCurrentChecklist}
        />
      )}
      <AppBody
        currentChecklist={currentChecklist}
        setCurrentChecklist={setCurrentChecklist}
      />
    </div>
  );
}

export default App;
