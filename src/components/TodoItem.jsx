import React from 'react';
import { BsTrash3 } from 'react-icons/bs';
import styles from './TodoItem.module.css';

export default function TodoItem({todo, onUpdate, onDelete}) {
  const { content, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status});
  };
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input type="checkbox" id="checkbox" className={styles.checkbox} checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor="checkbox" className={styles.content}>{content}</label>
      <button type="button" className={styles.button} onClick={handleDelete}><BsTrash3 class={styles.icon} /></button>
    </li>
  );
}