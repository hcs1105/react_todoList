import React from 'react';
import { BsTrash3 } from 'react-icons/bs';

export default function TodoItem({todo, onUpdate, onDelete}) {
  const { content, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status});
  };
  const handleDelete = () => onDelete(todo);

  return (
    <li>
      <input type="checkbox" id="checkbox" checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor="checkbox">{content}</label>
      <button type="button" onClick={handleDelete}><BsTrash3 /></button>
    </li>
  );
}