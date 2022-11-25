import { Check, Circle, Trash } from "phosphor-react";

import styles from './Task.module.css'

import { Todo } from '../App'
import { useState } from "react";

interface TaskProps {
  todo: Todo,
  onDeleteTask: (id: string) => void,
  onCheckTask: (id: string) => void
}

export function Task({ todo, onDeleteTask, onCheckTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(todo.isChecked)
  const wrapClass = todo.isChecked ? styles.wrapChecked : styles.wrap
  const checkTitleText = isChecked ? 'Desmarcar como concluída' : 'Marcar como concluída'

  function handleCheck(todoId: string) {
    setIsChecked(!isChecked)
    onCheckTask(todoId)
  }

  function handleDelete(taskId: string) {
    onDeleteTask(taskId)
  }

  return (
    <article className={wrapClass}>
      <button
        className={styles.checkTask}
        title={checkTitleText}
        onClick={() => handleCheck(todo.id)}
      >
        {
          isChecked
            ? <Check size="1rem" className={styles.icoChecked} />
            : <Circle size="1rem" className={styles.icoUnchecked} />
        }
      </button>

      <p className={styles.label}>{todo.content}</p>

      <button
        className={styles.buttonDelete}
        type="button"
        title="Deletar task"
        onClick={() => handleDelete(todo.id)}
      >
        <Trash size="1.5rem" />
      </button>
    </article>
  )
}