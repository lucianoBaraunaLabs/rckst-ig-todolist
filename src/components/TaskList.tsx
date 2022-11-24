
import styles from './TaskList.module.css'
import { Task } from './Task';

type TaskListProps = {
  todos: {
    id: string,
    content: string,
    isChecked: boolean
  }[]
}

export function TaskList({ todos } : TaskListProps) {
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

    </section>
  )
}