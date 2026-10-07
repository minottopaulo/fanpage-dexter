export default function Footer() {
  return (
    <footer className="bg-black py-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-md-4">
            <span className="fw-bold fs-4">dexter.</span>
          </div>


          <div className="col-md-4 text-md-end text-center">
          <small className="text-body-secondary">
    <p className="mb-2">
        The Bay Harbor Butcher.
    </p>

    <p className="mb-2">
        Um projeto desenvolvido para apresentar personagens, histórias e curiosidades
        do universo de Dexter.
    </p>

    <p className="mb-0">
        © 2026 Dexter. Desenvolvido por Paulo Minotto.
        <br />
        Projeto desenvolvido para fins acadêmicos e educacionais.
    </p>
</small>
          </div>
        </div>
      </div>
    </footer>
  )
}