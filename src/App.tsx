import { v4 as uuidv4 } from 'uuid'
import { InputTaskAdd } from './components/InputTaskAdd';
import { TaskList } from './components/TaskList';

import todoLogo from './assets/logo.svg'
import styles from './App.module.css'
import { useState } from 'react';

export interface Todo {
  id: string,
  content: string,
  isChecked: boolean
}

const apiTodos = [
  {
    id: uuidv4(),
    content: 'Fazer bolo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, porro quidem reprehenderit dolorem dolor excepturi nam maxime qui enim at. Sint ratione perferendis aliquam exercitationem dignissimos eius. Exercitationem, error repellendus!',
    isChecked: false
  },
  {
    id: uuidv4(),
    content: 'Trabalhar',
    isChecked: true
  },
  {
    id: uuidv4(),
    content: 'Levar paçoca e jujuba para passear',
    isChecked: false
  },
  {
    id: uuidv4(),
    content: 'Sair com a adriana',
    isChecked: false
  }
]


export function App () {
  const [todos, setTodos] = useState<Todo[]>(apiTodos)
  const $inputTaskAdd = document.getElementById('inputTaskAdd')

  function createTodo (todoCreated:string) {
    setTodos((state) => {
      return [
        ...state,
        {
          id: uuidv4(),
          content: todoCreated,
          isChecked: false
        }
      ]
    })
    $inputTaskAdd?.focus()

  }

  function deleteTodo(todoDeleted: string) {
    const todoUpdated = todos.filter((todo) => todo.id !== todoDeleted)
    setTodos(todoUpdated)
    $inputTaskAdd?.focus()
  }

  function checkTodo(todoCheck: string) {
    const todoUpdated = todos.map((task) => {
      if (task.id === todoCheck) {
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }
      return {...task}
    })

    setTodos(todoUpdated)
  }


  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} alt="Todo logotipo" />
        <InputTaskAdd onCreateTodo={createTodo} />
      </header>

      <main className={styles.content}>
        <TaskList
          todosList={todos}
          onDeleteTask={deleteTodo}
          onCheckTask={checkTodo}
        />
      </main>

    </>
  )
}