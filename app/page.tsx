


    
  
                un canal, pero todavía no sabes cómo debería funcionar.
                <br />
                <br />
                En Dekaelo conversamos contigo y te ayudamos a darle forma.
                Desarrollamos el concepto, definimos las secciones, la dinámica,
                el ritmo y el lenguaje audiovisual. Creamos su identidad gráfica
                y organizamos todo lo necesario para producirlo.
                <br />
                <br />
                Después lo hacemos realidad. Desde la primera idea hasta la
                entrega de las piezas finales, nos hacemos cargo del proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICIOS
      ====================================================== */}

      <section
        id="servicios"
        className="border-b border-white/10 px-5 py-24 md:px-10 md:py-32"
      >
        <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
          {/* INTRO */}

          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
              Servicios
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              De la idea
              <br />
              <span className="text-white/35">al contenido.</span>
            </h2>

            <Link
              href="/servicios"
              className="group mt-10 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60 transition hover:text-white"
            >
              Ver servicios

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition group-hover:border-[#f51b24] group-hover:bg-[#f51b24]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          {/* LISTA DE SERVICIOS */}

          <div className="border-t border-white/15">
            {capabilities.map((item, index) => (
              <Link
                key={item}
                href="/servicios"
                className="group flex items-center justify-between border-b border-white/10 py-6 transition hover:px-3"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-[#f51b24]">
                    0{index + 1}
                  </span>

                  <span className="text-lg text-white/75 transition group-hover:text-white md:text-2xl">
                    {item}
                  </span>
                </div>

                <ArrowUpRight className="h-4 w-4 text-white/20 transition group-hover:text-[#f51b24]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 px-5 py-32 md:px-10 md:py-44">
        <div className="absolute right-[-10%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#f51b24]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-6xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#f51b24]">
            Hablemos
          </p>

          <h2 className="mt-7 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.9] tracking-[-0.06em]">
            ¿Tienes una
            <br />
            <span className="text-white/35">idea en mente?</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/40 md:text-lg">
            Puede ser un programa para YouTube, una serie de videos para tu
            empresa o contenido para Instagram. No necesitas tener todo
            resuelto. Cuéntanos qué tienes en mente y te ayudaremos a convertirlo
            en un proyecto audiovisual profesional.
          </p>

          <Link
            href="/contacto"
            className="group mt-12 inline-flex items-center gap-4 border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.18em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
          >
            Cuéntanos tu idea

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/25">
            Desde una primera conversación hasta una producción completa.
          </p>
        </div>
      </section>
    </main>
  );
}
