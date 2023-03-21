import React from 'react';
import styles from './TodoHeader.module.css'

export default function TodoHeader({filters, filter, onFilterChange}) {
  return (
    <header className={styles.header}>
      <div className={styles.button_area}>
        {filters.map((value, index) => <button type="button" className={`${styles.button_filter} ${filter === value && styles.active}`} key={index} onClick={() => onFilterChange(value)}>{value}</button>)}
      </div>
    </header>
  );
}