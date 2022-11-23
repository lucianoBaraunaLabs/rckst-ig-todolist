import { Check, Circle, Trash } from "phosphor-react";

import styles from './Task.module.css'

export function Task() {
  return (
    <article className={styles.wrapChecked}>
      <div className={styles.checkTask}>
        <input type="checkbox" name="teste" id="teste" title="Marcar como concluída"/>
        <Circle size="1.063rem" className={styles.icoUnchecked} />
        <Check size="1rem" className={styles.icoChecked} />
      </div>

      <label className={styles.label} htmlFor="teste">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>

      <button className={styles.buttonDelete} type="button" title="Deletar task">
        <Trash size="1.5rem" />
      </button>
    </article>
  )
}