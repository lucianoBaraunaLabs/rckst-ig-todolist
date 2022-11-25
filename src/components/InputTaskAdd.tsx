import { PlusCircle } from 'phosphor-react'
import { FormEvent, ChangeEvent, InvalidEvent, useState } from 'react'
import styles from './InputTaskAdd.module.css'

interface InputTaskAddProps {
  onCreateTodo: (todo: string) => void
}

export function InputTaskAdd({ onCreateTodo } : InputTaskAddProps) {
  const [newTodoValue, setNewTodoValue] = useState('')

  function handleCreateTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onCreateTodo(newTodoValue)
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTodoValue(event.target.value)
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  return (
    <form onSubmit={handleCreateTodo} className={styles.wrap}>
      <input
        className={styles.input}
        type="text"
        placeholder='Adicione uma nova tarefa'
        name='todo'
        value={newTodoValue}
        onChange={handleNewTodoChange}
        onInvalid={handleNewTodoInvalid}
        required
      />
      <button
        className={styles.button}
        type='submit'
      >
        Criar
        <PlusCircle size='1rem' />
      </button>
    </form>
  )
}