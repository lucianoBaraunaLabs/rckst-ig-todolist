import { Check, Circle, Trash } from "phosphor-react";
import styles from './TaskList.module.css'

import { Todo } from '../App'
import { EmptyState } from '../components/EmptyState'
import { Task } from '../components/Task'
import { useState } from "react";

interface TaskListProps {
  todosList: Todo[],
  onDeleteTask: (todoId: string) => void
}

export function TaskList({ todosList, onDeleteTask } : TaskListProps) {
  const isEmptyTask = todosList.length <= 0;

  function handleDeleteTask(todoId: string) {
    onDeleteTask(todoId)
  }

  function handleCheckTodo() {
    console.log('opa')
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
            const wrapClass = todo.isChecked ? styles.taskItemChecked : styles.taskItem
            const todoChecked = todo.isChecked

            return (
              <li key={todo.id}>
                <Task
                  todo={todo}
                  onDeleteTaks={handleDeleteTask} />
              </li>
            )
          })}
        </ul>
      )}

    </section>
  )
}