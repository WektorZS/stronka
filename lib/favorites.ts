"use client"

import { useState, useEffect, useCallback } from 'react'

// System ulubionych materacy z localStorage
const FAVORITES_KEY = 'mattress-favorites'

// Hook do zarządzania ulubionymi w komponentach React
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    setFavorites(getFavorites())
    
    // Nasłuchuj zmian z innych zakładek/komponentów
    const handleStorage = () => setFavorites(getFavorites())
    window.addEventListener('storage', handleStorage)
    window.addEventListener('favorites-changed', handleStorage)
    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('favorites-changed', handleStorage)
    }
  }, [])

  const toggle = useCallback((slug: string) => {
    const result = toggleFavorite(slug)
    setFavorites(getFavorites())
    window.dispatchEvent(new Event('favorites-changed'))
    return result
  }, [])

  const add = useCallback((slug: string) => {
    addFavorite(slug)
    setFavorites(getFavorites())
    window.dispatchEvent(new Event('favorites-changed'))
  }, [])

  const remove = useCallback((slug: string) => {
    removeFavorite(slug)
    setFavorites(getFavorites())
    window.dispatchEvent(new Event('favorites-changed'))
  }, [])

  const isFav = useCallback((slug: string) => {
    return favorites.includes(slug)
  }, [favorites])

  return { favorites, toggle, add, remove, isFavorite: isFav }
}

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(FAVORITES_KEY)
  return stored ? JSON.parse(stored) : []
}

export const MAX_FAVORITES = 3

export function addFavorite(slug: string): boolean {
  const favorites = getFavorites()
  if (favorites.includes(slug)) return true
  if (favorites.length >= MAX_FAVORITES) return false
  favorites.push(slug)
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  return true
}

export function removeFavorite(slug: string): void {
  const favorites = getFavorites().filter(f => f !== slug)
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

export function isFavorite(slug: string): boolean {
  return getFavorites().includes(slug)
}

// Returns: { added: boolean, limitReached: boolean }
export function toggleFavorite(slug: string): { added: boolean; limitReached: boolean } {
  if (isFavorite(slug)) {
    removeFavorite(slug)
    return { added: false, limitReached: false }
  } else {
    const added = addFavorite(slug)
    return { added, limitReached: !added }
  }
}
