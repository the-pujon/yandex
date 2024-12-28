'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useDispatch } from 'react-redux'
import { addItem } from '@/lib/store/cartSlice'
import { MenuItem } from '@/lib/types'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ProductCustomization } from './product-customization'

interface ProductCardProps {
  product: MenuItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    if (product.subCategory) return; 
    
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: Math.round(product.price * 1.25),
      image: product.photoUrl,
    }))
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square relative mb-4">
        <Image
          src={product.photoUrl}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
        {product.status === 'out-in-stock' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md">
            <Badge variant="destructive">Нет в наличии</Badge>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{product.price}₸</span>
          {product.status === 'in-stock' && (
            product.subCategory ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm">Выбрать</Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>{product.name}</DialogTitle>
                  </DialogHeader>
                  <ProductCustomization product={product} />
                </DialogContent>
              </Dialog>
            ) : (
              <Button size="sm" onClick={handleAddToCart}>
                В корзину
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  )
}

