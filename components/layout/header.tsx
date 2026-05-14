'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, ChevronDown, Heart } from 'lucide-react'
import { useFavorites } from '@/lib/favorites'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navigation = [
  { name: '🏆 Ranking 2026', href: '/ranking' },
  {
    name: 'Recenzje',
    href: '/recenzje',
    children: [
      { name: 'Wszystkie recenzje', href: '/recenzje' },
      { name: 'Bett1 Bodyguard', href: '/recenzje/bett1-bodyguard' },
      { name: 'Hilding Conga', href: '/recenzje/hilding-conga' },
      { name: 'JYSK WELLPUR KVITA', href: '/recenzje/jysk-wellpur-kvita' },
      { name: 'TEMPUR EASE 20', href: '/recenzje/tempur-ease-20' },
    ]
  },
  {
    name: 'Narzędzia',
    href: '/quiz',
    children: [
      { name: 'Quiz - dobierz materac', href: '/quiz' },
      { name: 'Porównywarka', href: '/porownaj' },
      { name: 'Kalkulator budżetu', href: '/kalkulator' },
    ]
  },
  { name: 'Blog', href: '/artykuly' },
  {
    name: 'O nas',
    href: '/o-nas',
    children: [
      { name: 'O nas', href: '/o-nas' },
      { name: 'Metodologia', href: '/metodologia' },
      { name: 'FAQ', href: '/faq' },
    ]
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { favorites } = useFavorites()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.position = 'fixed'
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.width = '100%'
  } else {
    const scrollY = document.body.style.top

    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''

    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }

  return () => {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
  }
}, [isMobileMenuOpen])
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
<Link href="/" className="flex items-center gap-2 group">
<div className="w-[220px] h-[65px] relative">
  <Image
    src="/logo.png"
    alt="Ranking Materaców"
    fill
    className="object-contain"
  />
</div>
</Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-foreground/80 hover:text-foreground hover:bg-secondary">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Favorites */}
            <Link
              href="/ulubione"
              className="relative p-2 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md ml-2"
            >
              <Heart className="h-5 w-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div
  className="
    lg:hidden
    fixed
    inset-x-0
    top-16
    z-50
    bg-card/95
    backdrop-blur-md
    border-t
    border-border
    h-[calc(100dvh-4rem)]
    overflow-y-auto
    overscroll-y-contain
  "
  style={{ WebkitOverflowScrolling: 'touch' }}
>
            <div className="px-4 py-4 flex flex-col gap-1">

              {navigation.map((item) => (
                item.children ? (
                  <div key={item.name} className="py-2">
                    <div className="px-4 text-sm font-medium text-muted-foreground">
                      {item.name}
                    </div>

                    <div className="ml-4 mt-2 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="px-4 py-2 text-sm hover:bg-secondary rounded-md"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium hover:bg-secondary rounded-md"
                  >
                    {item.name}
                  </Link>
                )
              ))}

            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
