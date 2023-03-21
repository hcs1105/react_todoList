import React from 'react';

export default function TodoHeader({filters, onFilterChange}) {
  return (
    <header>
      <div>
        {filters.map((value, index) => <button type="button" key={index} onClick={() => onFilterChange(value)}>{value}</button>)}
      </div>
    </header>
  );
}