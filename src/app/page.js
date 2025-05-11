'use client'

import { useState } from 'react'
import Hero        from '../components/Hero'
import Header      from '../components/Header'
import CategoryNav from '../components/CategoryNav'
import ItemCard    from '../components/ItemCard'
import MapSection  from '../components/MapSection'
import AddItemForm from '../components/AddItemForm'
import { items as initialItems } from '../data/items'

export default function HomePage() {
  const [searchQuery, setSearchQuery]       = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [items, setItems]                   = useState(initialItems)
  const [adding, setAdding]                 = useState(false)

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title
      .toLowerCase()
      .startsWith(searchQuery.trim().toLowerCase())
    const matchesCategory =
      !selectedCategory || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAdd = newItem => {
    newItem.id = Date.now().toString()
    setItems([newItem, ...items])
    setAdding(false)
  }

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onListClick={() => setAdding(true)}
      />
      
      <Hero />

      <CategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {adding && (
        <AddItemForm
          onAdd={handleAdd}
          onCancel={() => setAdding(false)}
        />
      )}

      <main className="flex flex-col gap-8 items-start max-w-7xl mx-auto px-4 py-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {filteredItems.map(item => (
            <ItemCard key={item.id} {...item} />
          ))}
        </section>
        <MapSection />
      </main>
    </>
  )
}
