
import styles from './TaskList.module.css'
import { Task } from './Task';

import { Todos } from '../App'
import { EmptyState } from '../components/EmptyState'

interface TaskListProps {
  todos: Todos[]
}

export function TaskList({ todos } : TaskListProps) {
  const isEmpetyTask = todos.length <= 0;
  return (
    <section className={styles.wrap}>

      <header className={styles.header}>
        <p className={styles.taskCreated}>
          Tarefas criadas
          <span className={styles.count}>5</span>
        </p>
        <p className={styles.taskCompleted}>
          Concluídas
          <span className={styles.count}>2 de 5</span>
        </p>
      </header>
      {isEmpetyTask && <EmptyState />}
      {!isEmpetyTask && (
        <form action="">
          <ul className={styles.list}>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <Task />
                </li>
              )
            })}
          </ul>
        </form>
      )}

    </section>
  )
}