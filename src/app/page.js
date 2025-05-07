import CategoryNav from '@/components/CategoryNav'
import { items }     from '@/data/items'
import ItemCard      from '@/components/ItemCard'
import MapSection from '@/components/MapSection'

export default function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen">
      <main className="flex flex-col gap-[32px] row-start-2 items-start">

        {/* 1) Category bar */}
        <CategoryNav />

        {/* 2) Featured items grid */}
        <section className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              distance={item.distance}
              rating={item.rating}
              availableFrom={item.availableFrom}
              price={item.price}
              image={item.image}
            />
          ))}
        </section>
        
        <MapSection />
      </main>
    </div>
  )
}
