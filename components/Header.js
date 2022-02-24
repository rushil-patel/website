import styles from './Header.module.css'

export default function Header({ title }) {

  return (
    <h1 className={styles.header}>
      {
        title.split('').map((character => {
          return <span className={styles.fadeCharacter}>{character}</span>
        }))
      }
    </h1>
  )
}
