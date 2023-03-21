import { useState } from 'react';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  const onFilterChange = filter => setFilter(filter);
  
  return (
    <>
      <TodoHeader filters={filters} filter={filter} onFilterChange={onFilterChange} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;