import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  ranking: [
    { name: 'Ranking materaców 2026', href: '/ranking' },
    { name: 'Ranking prześcieradeł 2026', href: '/ranking-przescieradel' },
    { name: 'Metodologia testów', href: '/metodologia' },
    { name: 'Kryteria oceny', href: '/metodologia#kryteria' },
  ],
  recenzje: [
    { name: 'Bett1 Bodyguard', href: '/recenzje/bett1-bodyguard' },
    { name: 'Hilding Conga', href: '/recenzje/hilding-conga' },
    { name: 'JYSK WELLPUR KVITA', href: '/recenzje/jysk-wellpur-kvita' },
    { name: 'Wszystkie recenzje', href: '/recenzje' },
  ],
  blog: [
    { name: 'Jak wybrać materac?', href: '/artykuly/jak-wybrac-materac' },
    { name: 'Gęstość pianki', href: '/artykuly/gestosc-pianki-znaczenie' },
    { name: 'Zdrowy sen', href: '/artykuly/zdrowy-sen-materac' },
    { name: 'Wszystkie artykuły', href: '/artykuly' },
  ],
  informacje: [
    { name: 'O redakcji', href: '/o-nas' },
    { name: 'Regulamin', href: '/regulamin' },
    { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
  <Link href="/" className="flex items-center gap-2 mb-4">

    <div className="w-[220px] h-[55px] relative">
      <Image
        src="/logo.png"
        alt="Ranking Materaców"
        fill
        className="object-contain"
      />
    </div>

  </Link>

  <p className="text-sm text-muted-foreground leading-relaxed">
    Redakcja testująca produkty do sypialni — materace i pościel. Pomagamy wybrać najlepsze produkty do Twojego łóżka.
  </p>
</div>

          {/* Ranking */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Ranking</h3>
            <ul className="space-y-3">
              {footerLinks.ranking.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recenzje */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recenzje</h3>
            <ul className="space-y-3">
              {footerLinks.recenzje.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Blog</h3>
            <ul className="space-y-3">
              {footerLinks.blog.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informacje */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Informacje</h3>
            <ul className="space-y-3">
              {footerLinks.informacje.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Ranking-Materacow.pl . Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-xs text-muted-foreground">
              Ostatnia aktualizacja rankingu: Maj 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
