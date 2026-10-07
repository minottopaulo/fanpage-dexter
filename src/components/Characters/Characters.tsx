import { useEffect, useState } from 'react'
import { characters } from '../../data/characters'
import CharacterCard from '../CharacterCard/CharacterCard'
import miamiBg from '../../assets/miami.png'
import styles from './Characters.module.scss'

function getItemsPerView() {
  if (window.innerWidth >= 992) return 3
  if (window.innerWidth >= 768) return 2
  return 1
}

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

export default function Characters() {
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView())

  useEffect(() => {
    function handleResize() {
      setItemsPerView(getItemsPerView())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const slides = chunk(characters, itemsPerView)

  return (
    <section
      id="personagens"
      className={styles.section}
      style={{ backgroundImage: `url(${miamiBg})` }}
    >
      <div className={styles.overlay} />

      <div className={`${styles.content} container`}>
        <h2 className="fw-bold mb-5 text-center">personagens.</h2>

        {/* arrows ficam FORA do carrossel, numa linha flex própria */}
        <div className="d-flex align-items-center gap-3">
          <button
            className={styles.control}
            type="button"
            data-bs-target="#charactersCarousel"
            data-bs-slide="prev"
            aria-label="Anterior"
          >
            ‹
          </button>

          <div
            key={itemsPerView}
            id="charactersCarousel"
            className={`carousel slide flex-grow-1 ${styles.carousel}`}
          >
            <div className="carousel-inner">
              {slides.map((group, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <div className="row g-4 justify-content-center">
                    {group.map((character) => (
                      <div key={character.id} className="col-12 col-md-6 col-lg-4">
                        <CharacterCard character={character} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={`carousel-indicators ${styles.indicators}`}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#charactersCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            className={styles.control}
            type="button"
            data-bs-target="#charactersCarousel"
            data-bs-slide="next"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}