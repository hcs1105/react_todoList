import React, { useState } from 'react';

export default function TodoList() {
  const [todoList, setTodoList] = useState([
    {id:1, content:'공부하기', status:'active'},
    {id:2, content:'바둑 두기', status:'active'},
  ]);

  return (
    <section>
      <ul>
        {todoList.map(item => <li key={item.id}>{item.content}</li>)}
      </ul>
    </section>
  );
} 