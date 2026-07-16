export function filterProducts(products, { search, category, priceRange }) {
  return products.filter((p) => {
    const matchesSearch = search
      ? p.name.toLowerCase().includes(search.toLowerCase())
      : true
    const matchesCategory = category && category !== 'All' ? p.category === category : true
    const matchesPrice = priceRange ? p.price <= priceRange : true
    return matchesSearch && matchesCategory && matchesPrice
  })
}

export function sortProducts(products, sortBy) {
  const list = [...products]
  switch (sortBy) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price)
    case 'rating':
      return list.sort((a, b) => b.rating - a.rating)
    default:
      return list
  }
}