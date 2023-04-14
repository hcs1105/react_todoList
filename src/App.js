import { useState } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  const onFilterChange = filter => setFilter(filter);
  
  return (
   <DarkModeProvider>
      <TodoHeader filters={filters} filter={filter} onFilterChange={onFilterChange} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;