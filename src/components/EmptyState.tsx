import { ClipboardText } from "phosphor-react"
import styles from './EmptyState.module.css'

export function EmptyState() {
  return (
    <div className={styles.wrap}>
      <ClipboardText size="3.5rem" />
      <p className={styles.text}>
        <strong>Você ainda não tem tarefas cadastradas.</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}