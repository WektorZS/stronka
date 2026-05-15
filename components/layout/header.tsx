'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  Trophy,
  FileText,
  Wrench,
  BookOpen,
  Info,
} from 'lucide-react'

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
    ],
  },
  {
    name: 'Narzędzia',
    href: '/quiz',
    children: [
      { name: 'Quiz - dobierz materac', href: '/quiz' },
      { name: 'Porównywarka', href: '/porownaj' },
      { name: 'Kalkulator budżetu', href: '/kalkulator' },
    ],
  },
  { name: 'Blog', href: '/artykuly' },
  {
    name: 'O nas',
    href: '/o-nas',
    children: [
      { name: 'O nas', href: '/o-nas' },
      { name: 'Metodologia', href: '/metodologia' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSections, setOpenSections] = useState<string[]>([])

  const { favorites } = useFavorites()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
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

  const toggleSection = (name: string) => {
    setOpenSections(prev =>
      prev.includes(name)
        ? prev.filter(i => i !== name)
        : [...prev, name]
    )
  }

  // 🔥 UNIFIED STYLE (KLUCZ DO FIXA)
  const navClass =
    "px-4 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"

  const dropdownTriggerClass =
    "px-4 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? 'bg-card/95 backdrop-blur-md shadow-sm border-b border-border'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-[130px] h-[50px] relative">
              <Image
                src="/logo.png"
                alt="Ranking Materaców"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">

            {navigation.map(item =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={dropdownTriggerClass}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map(child => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link
                          href={child.href}
                          className="text-base"
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={navClass}
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Favorites */}
            <Link
              href="/ulubione"
              className="relative p-2 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md ml-2 transition-colors"
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

        {/* MOBILE (bez zmian logicznych) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col h-full">

              <div className="flex-1 overflow-y-auto px-4 py-4">

                {navigation.map(item => {
                  const isOpen = openSections.includes(item.name)

                  const icon =
                    item.name.includes('Ranking')
                      ? Trophy
                      : item.name.includes('Recenzje')
                        ? FileText
                        : item.name.includes('Narzędzia')
                          ? Wrench
                          : item.name.includes('Blog')
                            ? BookOpen
                            : Info

                  const Icon = icon

                  if (!item.children) {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-4 rounded-2xl px-4 py-4 mb-2 bg-card border border-border hover:bg-secondary/60"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>

                        <span className="font-medium text-base">
                          {item.name}
                        </span>
                      </Link>
                    )
                  }

                  return (
                    <div key={item.name} className="mb-3">

                      <button
                        onClick={() => toggleSection(item.name)}
                        className="w-full flex items-center justify-between rounded-2xl px-4 py-4 bg-card border border-border"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>

                          <span className="font-medium text-base">
                            {item.name}
                          </span>
                        </div>

                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="mt-2 ml-3 border-l border-border pl-4 space-y-1">
                          {item.children.map(child => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}

                    </div>
                  )
                })}

              </div>

              <div className="p-4 border-t border-border">
                <Button asChild className="w-full">
                  <Link href="/ranking" onClick={() => setIsMobileMenuOpen(false)}>
                    Zobacz pełny ranking 2026
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        )}

      </nav>
    </header>
  )
}