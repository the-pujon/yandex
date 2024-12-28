import { ProductCard } from '@/components/product-card'
import { MenuItem } from '@/lib/types'

interface ProductGridProps {
  title: string;
  products: MenuItem[];
}

export function ProductGrid({ title, products }: ProductGridProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

