<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="max-w-7xl mx-auto">

    {/* ─── How we test ──────────────────────────────────── */}
    <section className="mb-16">
      <div className="max-w-4xl mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Jak testujemy prześcieradła?
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Każde prześcieradło oceniamy według 5 obiektywnych kryteriów,
          które mają realny wpływ na komfort i higienę snu.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { icon: Layers, label: 'Materiał', desc: 'Bawełna > Poliester' },
          { icon: Layers, label: 'Gramatura', desc: 'g/m² — im więcej, tym lepiej' },
          { icon: Thermometer, label: 'Temp. prania', desc: '60°C = eliminacja roztoczy' },
          { icon: ShieldCheck, label: 'Antyalergiczne', desc: 'Oeko-Tex® + pranie 60°C' },
          { icon: Scale, label: 'Cena', desc: 'Stosunek jakości do ceny' },
        ].map(({ icon: Icon, label, desc }) => (
          <div
            key={label}
            className="flex flex-col items-start gap-2 p-5 rounded-2xl bg-muted/40 border border-border"
          >
            <Icon className="w-5 h-5 text-blue-600 shrink-0" />

            <p className="text-sm font-semibold text-foreground">
              {label}
            </p>

            <p className="text-xs text-muted-foreground leading-snug">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* ─── Summary verdict ──────────────────────────────── */}
    <section className="mb-16">
      <div className="max-w-4xl mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Który wybrać? Krótkie podsumowanie
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="p-6">
            <Badge className="bg-blue-600 text-white border-0 mb-4">
              Wybór redakcji
            </Badge>

            <p className="font-semibold text-foreground text-base mb-2">
              bett1 BODYGUARD®
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Najwyższa gramatura (240 g/m²), certyfikat Oeko-Tex®,
              pranie 60°C, 96% bawełna — najlepszy wybór dla alergików.
            </p>
          </CardContent>
        </Card>

        <Card className="border-sky-200 bg-sky-50/50">
          <CardContent className="p-6">
            <Badge className="bg-sky-600 text-white border-0 mb-4">
              Najlepsza cena/jakość
            </Badge>

            <p className="font-semibold text-foreground text-base mb-2">
              JYSK JENNY
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              100% bawełna, Oeko-Tex®, pranie 60°C
              i bardzo dobra cena.
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-slate-50/50">
          <CardContent className="p-6">
            <Badge className="bg-slate-600 text-white border-0 mb-4">
              Opcja budżetowa
            </Badge>

            <p className="font-semibold text-foreground text-base mb-2">
              Terra Beds / home&you
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Poliester gorzej oddycha i ma ograniczenia temperatury prania.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* ─── Individual product deep-dives ───────────────── */}
    <section id="wyniki" className="mb-16">
      <div className="max-w-4xl mb-8">
        <h2 className="text-3xl font-bold text-foreground">
          Top 5 prześcieradeł — szczegółowe opisy
        </h2>
      </div>

      <div className="space-y-10">
        {allSheets.map((sheet, index) => (
          <article
            key={sheet.id}
            id={sheet.id}
            className="scroll-mt-24"
          >
            <div
              className={`rounded-3xl border overflow-hidden ${
                index === 0
                  ? 'border-blue-300 ring-1 ring-blue-200'
                  : 'border-border'
              }`}
            >
              {/* Header */}
              <div
                className={`px-6 py-4 flex items-center justify-between ${
                  index === 0 ? 'bg-blue-600' : 'bg-muted'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0
                        ? 'bg-white text-blue-600'
                        : index === 1
                          ? 'bg-slate-400 text-white'
                          : index === 2
                            ? 'bg-amber-500 text-white'
                            : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {sheet.rank}
                  </span>

                  <span
                    className={`font-semibold text-sm ${
                      index === 0
                        ? 'text-white'
                        : 'text-foreground'
                    }`}
                  >
                    {index === 0
                      ? 'Wybór redakcji — najlepszy wynik'
                      : index === 1
                        ? 'Najlepsza cena/jakość'
                        : index === 2
                          ? 'Dobre, ale z zastrzeżeniami'
                          : 'Gorszy wybór — poliester'}
                  </span>
                </div>

                <div
                  className={`flex items-center gap-1 ${
                    index === 0
                      ? 'text-white'
                      : 'text-foreground'
                  }`}
                >
                  <Star
                    className={`w-4 h-4 ${
                      index === 0
                        ? 'fill-white text-white'
                        : 'fill-primary text-primary'
                    }`}
                  />

                  <span className="font-bold text-lg">
                    {sheet.score.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">

                <div className="grid lg:grid-cols-[260px_1fr] gap-8">

                  {/* Image */}
                  <div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                      <Image
                        src={sheet.image}
                        alt={`${sheet.brand} ${sheet.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 260px"
                      />
                    </div>

                    <div className="mt-4 space-y-2">
                      <WashTempBadge temp={sheet.washTemp} />

                      <div>
                        <MaterialBadge
                          type={sheet.materialType}
                          material={sheet.material}
                        />
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Layers className="w-3 h-3" />

                        Gramatura:
                        <GramScore g={sheet.gramatura} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-sm text-muted-foreground">
                        {sheet.brand}
                      </span>

                      {sheet.oekotex && (
                        <Badge className="bg-blue-100 text-blue-700 border-0 text-xs">
                          Oeko-Tex® Std 100
                        </Badge>
                      )}

                      {sheet.materialType === 'cotton' ? (
                        <Badge className="bg-blue-100 text-blue-700 border-0 text-xs">
                          Bawełna
                        </Badge>
                      ) : (
                        <Badge className="bg-slate-100 text-slate-600 border-0 text-xs">
                          Poliester
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      {sheet.brand} {sheet.name}
                    </h3>

                    {/* Summary */}
                    <div
                      className={`text-sm font-medium px-5 py-4 rounded-xl mb-5 leading-relaxed ${
                        index === 0
                          ? 'bg-blue-50 text-blue-800 border border-blue-200'
                          : index <= 2
                            ? 'bg-muted border border-border'
                            : 'bg-slate-50 border border-slate-200'
                      }`}
                    >
                      <span className="font-semibold">
                        Krótko:
                      </span>{' '}
                      {sheet.shortDescription}
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {sheet.verdict}
                    </p>

                    {/* Pros / Cons */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">

                      <div>
                        <h4 className="text-sm font-semibold text-blue-700 mb-3 flex items-center gap-1">
                          <Check className="w-4 h-4" />
                          Zalety
                        </h4>

                        <ul className="space-y-2">
                          {sheet.pros.map((pro, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-red-600 mb-3 flex items-center gap-1">
                          <X className="w-4 h-4" />
                          Wady
                        </h4>

                        <ul className="space-y-2">
                          {sheet.cons.map((con, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="bg-muted/40 rounded-2xl p-5 mb-6">
                      <h4 className="font-semibold text-foreground mb-4 text-xs uppercase tracking-wide text-muted-foreground">
                        Parametry techniczne
                      </h4>

                      <dl className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">

                        <div>
                          <dt className="text-xs text-muted-foreground">
                            Materiał
                          </dt>

                          <dd className="font-medium text-sm text-foreground">
                            {sheet.material}
                          </dd>
                        </div>

                        <div>
                          <dt className="text-xs text-muted-foreground">
                            Gramatura
                          </dt>

                          <dd className="font-medium text-sm">
                            <GramScore g={sheet.gramatura} />
                          </dd>
                        </div>

                        <div>
                          <dt className="text-xs text-muted-foreground">
                            Temp. prania
                          </dt>

                          <dd className="font-medium text-sm">
                            <WashTempBadge temp={sheet.washTemp} />
                          </dd>
                        </div>

                        <div>
                          <dt className="text-xs text-muted-foreground">
                            Antyalergiczne
                          </dt>

                          <dd
                            className={`font-medium text-sm ${
                              sheet.hypoallergenic
                                ? 'text-blue-700'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {sheet.hypoallergenic ? 'Tak' : 'Nie'}
                          </dd>
                        </div>

                        <div>
                          <dt className="text-xs text-muted-foreground">
                            Oeko-Tex®
                          </dt>

                          <dd
                            className={`font-medium text-sm ${
                              sheet.oekotex
                                ? 'text-blue-700'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {sheet.oekotex ? 'Certyfikat' : 'Brak'}
                          </dd>
                        </div>

                        <div>
                          <dt className="text-xs text-muted-foreground">
                            Elastan
                          </dt>

                          <dd className="font-medium text-sm text-muted-foreground">
                            {sheet.elastan ? 'Tak' : 'Nie'}
                          </dd>
                        </div>

                      </dl>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

                      <div>
                        <p className="text-4xl font-bold text-foreground">
                          {sheet.price % 1 === 0
                            ? `${sheet.price} zł`
                            : `${sheet.price.toFixed(2)} zł`}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          rozmiar 90×200 cm
                        </p>
                      </div>

                      <Button
                        asChild
                        className={
                          index === 0
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : ''
                        }
                      >
                        <a
                          href={sheet.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Sprawdź cenę
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

  </div>
</div>