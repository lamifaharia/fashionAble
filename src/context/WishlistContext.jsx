import { createContext, useContext, useEffect, useState } from 'react'

const WishlistContext = createContext(null)
const STORAGE_KEY = 'fashionable_wishlist'

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setIds(JSON.parse(saved))
      } catch {
        // ignore corrupt storage
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  }, [ids])

  const toggleWishlist = (id) =>
    setIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))

  const isWishlisted = (id) => ids.includes(id)

  return (
    <WishlistContext.Provider value={{ ids, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider')
  return ctx
}