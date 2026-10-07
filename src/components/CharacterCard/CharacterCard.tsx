import type { Character } from '../../data/characters'
import styles from './CharacterCard.module.scss'

interface CharacterCardProps {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className={`${styles.card} h-100 rounded-4 shadow-sm text-center`}>
      <div className={`${styles.imageWrap} rounded-4 overflow-hidden mb-3`}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
        />
      </div>

      <h5 className="fw-bold mb-1">{character.name}</h5>
      <p className={`${styles.role} mb-2`}>{character.role}</p>
      <p className={styles.description}>{character.description}</p>
    </div>
  )
}