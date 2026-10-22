import type { Character } from '../../data/characters'
import styles from './CharacterCard.module.scss'

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{character.name}</h3>
        <p className={styles.role}>{character.role}</p>
        <p className={styles.description}>{character.description}</p>
      </div>
    </article>
  )
}