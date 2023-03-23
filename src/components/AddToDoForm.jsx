import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddToDoForm.module.css'

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
    <form className={styles.todoListForm} onSubmit={handleSubmit}>
      <input type="text" className={styles.todoInputForm} placeholder="Add Todo" value={content} onChange={handleChangeText} />
      <button type="submit" className={styles.todoButton}>Add</button>
    </form>
  );
}