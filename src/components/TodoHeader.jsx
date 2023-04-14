import React from 'react';
import styles from './TodoHeader.module.css'
import { useDarkMode } from '../context/DarkModeContext';
import { HiMoon, HiSun } from 'react-icons/hi'

export default function TodoHeader({filters, filter, onFilterChange}) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const handleDarkMode = () => toggleDarkMode();

  return (
    <header className={styles.header}>
      <button type="button" onClick={handleDarkMode}>
        {!darkMode ? <HiMoon className={styles.icons} /> : <HiSun className={styles.icons} />}
      </button>
      <div className={styles.button_area}>
        {filters.map((value, index) => <button type="button" className={`${styles.button_filter} ${filter === value && styles.active}`} key={index} onClick={() => onFilterChange(value)}>{value}</button>)}
      </div>
    </header>
  );
}