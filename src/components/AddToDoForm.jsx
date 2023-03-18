import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddToDoForm({onAdd}) {
  const [content, setContent] = useState('');
  const handleChangeText = e => {
    setContent(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if(content.trim().length === 0) {
      return;
    }
    onAdd({id:uuidv4(), content, status:'active'});
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo" value={content} onChange={handleChangeText} />
      <button type="submit">Add</button>
    </form>
  );
}