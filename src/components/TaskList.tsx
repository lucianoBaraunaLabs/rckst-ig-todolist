import { Check, Circle, Trash } from "phosphor-react";
import styles from './TaskList.module.css'

import { Todo } from '../App'
import { EmptyState } from '../components/EmptyState'
import { Task } from '../components/Task'

interface TaskListProps {
  todosList: Todo[],
  onDeleteTask: (todoId: string) => void,
  onCheckTask: (todoId: string) => void
}

export function TaskList({ todosList, onDeleteTask, onCheckTask } : TaskListProps) {
  const isEmptyTask = todosList.length <= 0;

  function handleDeleteTask(todoId: string) {
    onDeleteTask(todoId)
  }

  function handleCheckTask(todoId:string) {
    onCheckTask(todoId)
  }

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

      {isEmptyTask && <EmptyState />}

      {!isEmptyTask && (
        <ul className={styles.list}>
          {todosList.map((todo) => {
            return (
              <li key={todo.id}>
                <Task
                  todo={todo}
                  onDeleteTask={handleDeleteTask}
                  onCheckTask={handleCheckTask}
                />
              </li>
            )
          })}
        </ul>
      )}

    </section>
  )
}