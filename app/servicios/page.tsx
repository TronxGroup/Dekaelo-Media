      {/* =====================================================
          PACK LANZAMIENTO DE VODCAST
      ====================================================== */}

      <section className="border-b border-white/10 px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 md:grid-cols-12">

            {/* Presentación */}
            <div className="md:col-span-5">
              <Eyebrow>Una solución completa</Eyebrow>

              <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
                Tu propio
                <br />
                <span className="text-white/35">
                  programa.
                </span>
              </h2>

              <p className="mt-8 max-w-md text-base leading-relaxed text-white/45 md:text-lg">
                ¿Quieres lanzar un vodcast, pero no sabes por dónde
                empezar? Creamos y producimos tu programa desde cero,
                con todo lo necesario para comenzar a publicar.
              </p>

              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-white/30">
                Desarrollo · Producción · Contenido digital
              </p>
            </div>

            {/* Contenido del pack */}
            <div className="md:col-span-7">
              <div className="border border-white/15 p-7 md:p-10">

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#f51b24]">
                  Pack lanzamiento de vodcast
                </p>

                <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  Todo comienza con una conversación.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/45 md:text-base">
                  Una producción pensada para lanzar un programa
                  audiovisual y generar contenido para YouTube e
                  Instagram a partir de una misma producción.
                </p>

                {/* Entregables */}
                <div className="mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-8">

                  <div>
                    <p className="text-5xl font-medium tracking-[-0.06em]">
                      04
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      Episodios de vodcast
                    </p>
                  </div>

                  <div>
                    <p className="text-5xl font-medium tracking-[-0.06em]">
                      12
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      Reels para redes sociales
                    </p>
                  </div>

                  <div>
                    <p className="text-5xl font-medium tracking-[-0.06em]">
                      01
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      Trailer de lanzamiento
                    </p>
                  </div>

                  <div>
                    <p className="text-5xl font-medium tracking-[-0.06em]">
                      01
                    </p>
                    <p className="mt-2 text-xs text-white/40">
                      Identidad audiovisual
                    </p>
                  </div>

                </div>

                {/* Qué incluye */}
                <div className="mt-8">
                  <p className="text-sm font-medium">
                    Nos encargamos de todo:
                  </p>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Desarrollo del concepto",
                      "Nombre e identidad gráfica",
                      "Diseño del formato",
                      "Estructura de episodios",
                      "Producción y grabación",
                      "Edición y postproducción",
                      "Diseño sonoro y color",
                      "Contenido listo para publicar",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-xs text-white/45"
                      >
                        <span className="h-1 w-1 rounded-full bg-[#f51b24]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="/contacto"
                  className="group mt-10 inline-flex w-full items-center justify-between border border-white/20 px-6 py-5 text-xs uppercase tracking-[0.16em] transition hover:border-[#f51b24] hover:bg-[#f51b24]"
                >
                  Quiero crear mi programa

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>
