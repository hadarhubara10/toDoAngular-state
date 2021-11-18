import React, { useEffect, useState } from 'react';
import { Input } from '../components/Input';
import { TodoList } from '../components/TodoList';
export const Container = () => {
  const initTodoList = JSON.parse(localStorage.getItem('todoList'));

  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState(initTodoList || []);
  const [valueEdit, setValueEdit] = useState('');
  // Set to localStorage
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);
  // print todoList when the state change
  const deleteTodo = (textItem) => {
    const filteredTodos = todoList.filter((todo) => todo.text !== textItem);
    setTodoList(filteredTodos);
  };
  const editTodo = (i) => {
    // Change obj on array to State!
    let newTodoList = [...todoList];
    newTodoList[i].text = valueEdit;
    setTodoList(newTodoList);
  };

  const handleChangeEdit = (event) => {
    setValueEdit(event.target.value);
  };
  // set value from input to state
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // Call to pushToList
  const handleSubmit = (event) => {
    if (value !== '') {
      const todayDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(new Date());
      setTodoList((oldArray) => [
        ...oldArray,
        { text: value, date: todayDate },
      ]);
    }
  };
  return (
    <div>
      <Input handleChange={handleChange} handleSubmit={handleSubmit} />
      <TodoList
        handleChangeEdit={handleChangeEdit}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        todoList={todoList}
      />
    </div>
  );
};
