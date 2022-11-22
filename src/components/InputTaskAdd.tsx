import { PlusCircle } from 'phosphor-react'
import styles from './InputTaskAdd.module.css'

export function InputTaskAdd() {
  return (
    <form className={styles.wrap}>
      <input className={styles.input} type="text" placeholder='olá mundo' />
      <button className={styles.button} type='submit'>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}