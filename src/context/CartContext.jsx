import { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'fashionable_cart'

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, size, color, qty } = action.payload
      const lineId = `${product.id}-${size}-${color}`
      const existing = state.find((item) => item.lineId === lineId)

      if (existing) {
        return state.map((item) =>
          item.lineId === lineId ? { ...item, qty: item.qty + qty } : item
        )
      }

      return [
        ...state,
        {
          lineId,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          color,
          qty,
        },
      ]
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.lineId !== action.payload.lineId)
    case 'UPDATE_QTY':
      return state.map((item) =>
        item.lineId === action.payload.lineId
          ? { ...item, qty: Math.max(1, action.payload.qty) }
          : item
      )
    case 'CLEAR_CART':
      return []
    case 'HYDRATE':
      return action.payload
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        dispatch({ type: 'HYDRATE', payload: JSON.parse(saved) })
      } catch {
        // ignore corrupt storage
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, { size, color, qty = 1 }) =>
    dispatch({ type: 'ADD_ITEM', payload: { product, size, color, qty } })
  const removeItem = (lineId) => dispatch({ type: 'REMOVE_ITEM', payload: { lineId } })
  const updateQty = (lineId, qty) => dispatch({ type: 'UPDATE_QTY', payload: { lineId, qty } })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}