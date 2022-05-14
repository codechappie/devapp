import React from 'react'
import styles from './index.module.scss'

function Button({ children, className, ...props }) {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  )
}

export default Button
