export function formatPrice(amount) {
  return `৳${amount.toLocaleString('en-BD')}`
}

export function calculateSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0)
}

export function calculateItemCount(items) {
  return items.reduce((sum, item) => sum + item.qty, 0)
}