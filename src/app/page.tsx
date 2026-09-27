const whatsappLink =
  "https://wa.me/50586152615?text=Hola%2C%20quisiera%20recibir%20informaci%C3%B3n%20actualizada%20sobre%20Las%20Planadas%20de%20Escamequita.";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Las Planadas, inicio">
          <span className="brand-mark" aria-hidden="true">
            LP
          </span>
          <span className="brand-name">
            Las Planadas
            <small>Escamequita · Nicaragua</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#proyecto">El proyecto</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>

        <a className="header-contact" href={whatsappLink} target="_blank" rel="noreferrer">
          Consultar por WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow eyebrow-light">
            ESCAMEQUITA · SAN JUAN DEL SUR
          </span>

          <h1>
            Un lugar para
            <br />
            imaginar tu futuro.
          </h1>

          <p className="hero-description">
            Conoce Las Planadas de Escamequita, un proyecto de lotes cerca de
            la costa del Pacífico nicaragüense.
          </p>

          <div className="hero-actions">
            <a className="button button-light" href="#proyecto">
              Explorar el proyecto <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-outline"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Hacer una consulta
            </a>
          </div>

          <p className="hero-note">
            Demostración independiente. Confirma disponibilidad y condiciones
            directamente con los responsables del proyecto.
          </p>
        </div>

        <div className="hero-caption">
          <span>Las Planadas de Escamequita</span>
          <span>Nicaragua</span>
        </div>
      </section>

      <section className="intro section-wrap" id="proyecto">
        <div className="intro-heading">
          <span className="eyebrow">EL PROYECTO</span>
          <h2>
            Naturaleza y costa,
            <br />
            en el sur de Nicaragua.
          </h2>
        </div>

        <div className="intro-copy">
          <p>
            Las Planadas se encuentra en la zona de Escamequita, cerca de San
            Juan del Sur. Esta página reúne información general publicada sobre
            el proyecto para ayudar a las personas interesadas a comenzar su
            consulta.
          </p>
          <a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">
            Solicitar información actualizada <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="facts section-wrap" aria-label="Datos publicados">
        <article className="fact-card">
          <span className="fact-number">03</span>
          <span className="fact-unit">min en auto</span>
          <p>Playa Yankee</p>
        </article>
        <article className="fact-card">
          <span className="fact-number">15</span>
          <span className="fact-unit">min en auto</span>
          <p>San Juan del Sur</p>
        </article>
        <article className="fact-card fact-card-price">
          <span className="fact-number">US$28,080</span>
          <span className="fact-unit">precio inicial publicado</span>
          <p>Confirma precios y disponibilidad actuales.</p>
        </article>
      </section>

      <section className="location-section" id="ubicacion">
        <div className="location-inner section-wrap">
          <div className="location-copy">
            <span className="eyebrow eyebrow-light">LA ZONA</span>
            <h2>
              Cerca de la costa.
              <br />
              Con espacio para explorar.
            </h2>
            <p>
              La información pública del proyecto indica que Playa Yankee está
              a unos 3 minutos en auto y San Juan del Sur a unos 15 minutos.
              Los tiempos pueden variar según la ruta y las condiciones del
              camino.
            </p>
            <a
              className="button button-light"
              href="https://maps.app.goo.gl/bCC4HZsqtT4Xzein6"
              target="_blank"
              rel="noreferrer"
            >
              Ver ubicación en Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="location-card">
            <span className="map-pin" aria-hidden="true">
              +
            </span>
            <span className="location-card-title">Las Planadas</span>
            <span className="location-card-subtitle">
              Escamequita · Rivas · Nicaragua
            </span>
            <span className="location-card-line" />
            <span className="location-card-caption">
              Abre el mapa para consultar la ruta
            </span>
          </div>
        </div>
      </section>

      <section className="payment section-wrap">
        <div className="payment-icon" aria-hidden="true">
          $
        </div>
        <div>
          <span className="eyebrow">INFORMACIÓN PUBLICADA</span>
          <h2>Consulta las condiciones vigentes.</h2>
          <p>
            El sitio público menciona opciones de pago desde US$650 al mes. El
            precio, financiamiento, requisitos y disponibilidad deben
            confirmarse directamente con los responsables antes de tomar una
            decisión.
          </p>
        </div>
        <a className="button button-green" href={whatsappLink} target="_blank" rel="noreferrer">
          Consultar condiciones <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="contact-banner">
        <div className="contact-banner-inner">
          <span className="eyebrow eyebrow-light">¿QUIERES SABER MÁS?</span>
          <h2>Empieza con una conversación.</h2>
          <p>
            Pregunta por precios, lotes disponibles, visitas y condiciones
            actuales.
          </p>
          <a className="button button-light" href={whatsappLink} target="_blank" rel="noreferrer">
            Escribir por WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#inicio">
          Las Planadas de Escamequita
        </a>
        <p>
          Sitio demostrativo independiente; no es el sitio oficial ni está
          afiliado con los propietarios del proyecto.
        </p>
        <a href="https://www.escamequitalots.com/" target="_blank" rel="noreferrer">
          Consultar el sitio público del proyecto <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  );
}
