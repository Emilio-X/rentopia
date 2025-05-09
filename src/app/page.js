'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CategoryNav from '@/components/CategoryNav';
import ItemCard from '@/components/ItemCard';
import MapSection from '@/components/MapSection';
import { items as initialItems } from '@/data/items';
import AddItemForm from '@/components/AddItemForm';

export default function HomePage() {
  // 1) Track your state
  const [items, setItems]         = useState(initialItems);
  const [adding, setAdding]       = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 2) Log whenever items changes, to make sure handleAdd really fired
  useEffect(() => {
    console.log('🟢 items now:', items);
  }, [items]);

  // 3) Filter like before (only first‐letter matches)
  const filteredItems = items.filter(item =>
    item.title
      .toLowerCase()
      .startsWith(searchQuery.trim().toLowerCase())
  );

  // 4) Use the functional setter form (so you never close over stale `items`)
  const handleAdd = newItem => {
    console.log('📝 handleAdd got:', newItem);
    const itemWithId = {
      ...newItem,
      id: Date.now().toString()
    };
    setItems(prev => [ itemWithId, ...prev ]);
    setAdding(false);
  };

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onListClick={() => setAdding(true)}
      />

      {adding && (
        <AddItemForm
          onAdd={handleAdd}
          onCancel={()=>setAdding(false)}
        />
      )}

      <main className="flex flex-col gap-8 items-start max-w-7xl mx-auto px-4 py-6">
        <CategoryNav />

        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.length === 0
            ? <p className="col-span-full text-center text-gray-500">No items to show</p>
            : filteredItems.map(item => (
                <ItemCard key={item.id} {...item} />
              ))
          }
        </section>

        <MapSection />
      </main>
    </>
  );
}
