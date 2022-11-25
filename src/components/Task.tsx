import { Check, Circle, Trash } from "phosphor-react";

import styles from './Task.module.css'

import { Todo } from '../App'
import { useState } from "react";

interface TaskProps {
  todo: Todo,
  onDeleteTaks: (id: string) => void
}

export function Task({ todo, onDeleteTaks }: TaskProps) {
  const [isChecked, setIsChecked] = useState(todo.isChecked)
  const wrapClass = todo.isChecked ? styles.wrapChecked : styles.wrap

  function handleDelete(taskId: string) {
    onDeleteTaks(taskId)
  }

  return (
    <article className={wrapClass}>
      <div className={styles.checkTask}>
        <input type="checkbox" name="chektask" id={todo.id} title="Marcar como concluída" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
        {
          isChecked
            ? <Check size="1rem" className={styles.icoChecked} />
            : <Circle size="1rem" className={styles.icoUnchecked} />
          }
      </div>

      <label className={styles.label} htmlFor={todo.id}>{todo.content}</label>

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