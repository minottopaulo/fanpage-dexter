import { useCallback, useEffect, useRef, useState } from 'react'
import { characters } from '../../data/characters'
import CharacterCard from '../CharacterCard/CharacterCard'
import styles from './Characters.module.scss'

export default function Characters() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(1)

  // Mede quantos cards cabem na tela e o tamanho de cada "passo" do scroll
  const measure = useCallback(() => {
    const track = trackRef.current
    const first = track?.firstElementChild as HTMLElement | null
    if (!track || !first) return null
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const step = first.offsetWidth + gap
    const perView = Math.max(1, Math.round((track.clientWidth + gap) / step))
    return { track, step, perView }
  }, [])

  const update = useCallback(() => {
    const m = measure()
    if (!m) return
    const total = Math.ceil(characters.length / m.perView)
    const current = Math.round(m.track.scrollLeft / (m.step * m.perView))
    setPages(total)
    setPage(Math.min(current, total - 1))
  }, [measure])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const goTo = (index: number) => {
    const m = measure()
    if (!m) return
    const target = Math.max(0, Math.min(index, pages - 1))
    m.track.scrollTo({ left: target * m.perView * m.step, behavior: 'smooth' })
  }

  return (
    <section
      id="personagens"
      className={styles.section}
      aria-labelledby="personagens-titulo"
    >
      <div className="container">
        <h2 id="personagens-titulo" className={styles.title}>
          personagens.
        </h2>

        <div className={styles.carousel}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => goTo(page - 1)}
            disabled={page === 0}
            aria-label="Personagens anteriores"
          >
            <span aria-hidden="true">‹</span>
          </button>

          <div
            ref={trackRef}
            className={styles.track}
            onScroll={update}
            role="region"
            aria-label="Lista de personagens"
            tabIndex={0}
          >
            {characters.map((character) => (
              <div className={styles.slide} key={character.id}>
                <CharacterCard character={character} />
              </div>
            ))}
          </div>

          <button
            type="button"
            className={styles.arrow}
            onClick={() => goTo(page + 1)}
            disabled={page >= pages - 1}
            aria-label="Próximos personagens"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        <div className={styles.dots}>
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === page ? styles.active : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para o grupo ${i + 1}`}
              aria-current={i === page}
            />
          ))}
        </div>
      </div>
    </section>
  )
}