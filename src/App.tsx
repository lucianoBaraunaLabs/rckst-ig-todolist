import { InputTaskAdd } from './components/InputTaskAdd';
import { TaskList } from './components/TaskList';

import todoLogo from './assets/logo.svg'
import styles from './App.module.css'

export function App () {
  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} alt="Todo" />
        <InputTaskAdd />
      </header>

      <main className={styles.content}>
        <TaskList />
      </main>

    </>
  )
}