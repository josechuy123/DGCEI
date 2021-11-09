import { Image } from '@chakra-ui/image';
import { Box, Grid, Text, VStack } from '@chakra-ui/layout';
import Head from 'next/head';

export default function cursosRepro() {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/498253d564.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>

      <div className="d-flex vh-100">
        <div className="col-sm-3">
          <a
            href="#"
            className="d-flex align-items-center border shadow-sm text-dark text-decoration-none"
          >
            <i className="far fa-hand-point-left p-2"></i>
            <h5 className="mt-2">Regreso</h5>
          </a>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button
                className="btn btn-toggle rounded collapsed col-12 border-bottom"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse0"
                aria-expanded="true"
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Módulo</h5>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </button>
              <div className="collapse show" id="home-collapse0">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small fs-6 p-2">
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="fas fa-circle"></i>
                      Tema completado
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle rounded collapsed col-12 border-bottom"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse1"
                aria-expanded="true"
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Módulo</h5>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </button>
              <div className="collapse show" id="home-collapse1">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small fs-6 p-2">
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="fas fa-circle"></i>
                      Tema completado
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle rounded collapsed col-12 border-bottom"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse2"
                aria-expanded="true"
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Módulo</h5>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </button>
              <div className="collapse show" id="home-collapse2">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small fs-6 p-2">
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="fas fa-circle"></i>
                      Tema completado
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle rounded collapsed col-12 border-bottom"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse3"
                aria-expanded="true"
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Módulo</h5>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </button>
              <div className="collapse show" id="home-collapse3">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small fs-6 p-2">
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="fas fa-circle"></i>
                      Tema completado
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Tema
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle rounded collapsed col-12 border-bottom"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse4"
                aria-expanded="true"
              >
                <div className="d-flex align-items-center justify-content-between">
                  <h5>Final</h5>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </button>
              <div className="collapse show" id="home-collapse4">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small fs-6 p-2">
                  <li>
                    <a
                      href="#"
                      className="link-dark rounded text-dark text-decoration-none"
                    >
                      <i className="far fa-circle"></i>
                      Quiz final
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="d-flex align-items-center border shadow-sm text-dark text-decoration-none mt-4">
            <i className="fas fa-circle-notch p-2"></i>
            <h5 className="mt-2">Progreso</h5>
          </div>
        </div>
        <div className="col-sm-9">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item-active">
                <img
                  src="img/Panda-rojo.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="img/Panda-rojo.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="img/Panda-rojo.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>
          <div className="d-flex justify-content-between container-fluid">
            <a
              href="#"
              className="text-dark text-decoration-none align-items-center d-flex"
            >
              <i className="fas fa-chevron-left p-2 mb-1"></i>
              <h3>Anterior</h3>
            </a>
            <a
              href="#"
              className="text-dark text-decoration-none align-items-center d-flex"
            >
              <h3>Siguiente</h3>
              <i className="fas fa-chevron-right p-2 mb-1"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
