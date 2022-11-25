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
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus natus fuga quibusdam impedit, debitis illum! Eligendi, alias reprehenderit cupiditate voluptatum illum earum officiis quisquam dolorum quidem officia mollitia maxime.',
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
  }


  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} alt="Todo" />
        <InputTaskAdd onCreateTodo={createTodo} />
      </header>

      <main className={styles.content}>
        <TaskList todosList={todos} />
      </main>

    </>
  )
}