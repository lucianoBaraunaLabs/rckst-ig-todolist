import { Check, Circle, Trash } from "phosphor-react";
import styles from './TaskList.module.css'

import { Todo } from '../App'
import { EmptyState } from '../components/EmptyState'

interface TaskListProps {
  todosList: Todo[],
  onDeleteTodo: (todoId: string) => void
}

export function TaskList({ todosList, onDeleteTodo } : TaskListProps) {
  const isEmpetyTask = todosList.length <= 0;

  function handleDeleteTodo(todoId: string) {
    onDeleteTodo(todoId)
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

      {isEmpetyTask && <EmptyState />}

      {!isEmpetyTask && (
        <ul className={styles.list}>
          {todosList.map((todo) => {
            const wrapClass = todo.isChecked ? styles.taskItemChecked : styles.taskItem

            return (
              <li key={todo.id}>
                <article className={wrapClass}>
                  <div className={styles.checkTask}>
                    <input
                      type="checkbox"
                      id={todo.id}
                      title="Marcar como concluída"
                    />
                    <Circle
                      size="1.063rem"
                      className={styles.icoUnchecked}
                    />
                    <Check
                      size="1rem"
                      className={styles.icoChecked}
                    />
                  </div>
                  <label
                    className={styles.label}
                    htmlFor={todo.id}
                  >
                    {todo.content}
                  </label>

                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className={styles.buttonDelete}
                    type="button"
                    title="Deletar task"
                  >
                    <Trash size="1.5rem" />
                  </button>
                </article>
              </li>
            )
          })}
        </ul>
      )}

    </section>
  )
}