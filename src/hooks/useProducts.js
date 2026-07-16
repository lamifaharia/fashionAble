import { useEffect, useState } from 'react'
import { products as allProducts } from '../data/products'

// Simulates an async fetch so loading states are real, not decorative.
export function useProducts(delay = 600) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setProducts(allProducts)
      setLoading(false)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return { products, loading }
}