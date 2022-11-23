
import styles from './TaskList.module.css'
import { Task } from './Task';

export function TaskList() {
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
        <ul>
          <li>
            <Task />
          </li>
          <li>
            <Task />
          </li>
        </ul>
      </form>

    </section>
  )
}