import React, { useState } from 'react';
import AddToDoForm from './AddToDoForm';

export default function TodoList() {
  const [todoList, setTodoList] = useState([
    {id:1, content:'공부하기', status:'active'},
    {id:2, content:'바둑 두기', status:'active'},
  ]);

  const handleAdd = (todo) => {
    // 새로운 todo를 todeList에 업데이트
    console.log(todo);
    setTodoList([...todoList, todo]);
  };

  return (
    <section>
      <ul>
        {todoList.map(item => <li key={item.id}>{item.content}</li>)}
      </ul>
      <AddToDoForm onAdd={handleAdd} />
    </section>
  );
} 