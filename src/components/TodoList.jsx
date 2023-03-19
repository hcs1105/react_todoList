import React, { useState } from 'react';
import AddToDoForm from './AddToDoForm';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todoList, setTodoList] = useState([
    {id:1, content:'공부하기', status:'active'},
    {id:2, content:'바둑 두기', status:'active'},
  ]);

  const handleAdd = todo => {
    // 새로운 todo를 todeList에 업데이트
    console.log(todo);
    setTodoList([...todoList, todo]);
  };

  const handleUpdate = updated => {
    console.log(updated);
    setTodoList(todoList.map(t =>t.id === updated.id ? updated : t));
  };

  const handleDelete = deleted => {
    console.log(deleted);
    setTodoList(todoList.filter(t => t.id !== deleted.id ));
  };

  return (
    <section>
      <ul>
        {/* {todoList.map(item => <li key={item.id}>{item.content}</li>)} */}
        {todoList.map((item) => <TodoItem key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        )}
      </ul>
      <AddToDoForm onAdd={handleAdd} />
    </section>
  );
} 