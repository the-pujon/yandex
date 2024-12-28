'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { addItem } from '@/lib/store/cartSlice'
import { MenuItem } from '@/lib/types'

interface ProductCustomizationProps {
  product: MenuItem;
}

export function ProductCustomization({ product }: ProductCustomizationProps) {
  const dispatch = useDispatch()
  const [selections, setSelections] = useState<Record<string, string>>({})

  const handleSelectionChange = (category: string, value: string) => {
    setSelections(prev => ({
      ...prev,
      [category]: value
    }))
  }

  const handleAddToCart = () => {
    const customizations = product.subCategory?.map(cat => 
      `${cat.sub_category_name}: ${selections[cat.sub_category_name] || 'Не выбрано'}`
    ).join(', ')

    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: Math.round(product.price * 1.25),
      image: product.photoUrl,
      customizations
    }))
  }

  const isComplete = product.subCategory?.every(cat => selections[cat.sub_category_name])

  return (
    <div className="space-y-6">
      {product.subCategory?.map((category) => (
        <div key={category.sub_category_name} className="space-y-3">
          <h3 className="font-medium">{category.sub_category_name}</h3>
          <RadioGroup
            value={selections[category.sub_category_name]}
            onValueChange={(value) => handleSelectionChange(category.sub_category_name, value)}
          >
            <div className="grid grid-cols-2 gap-2">
              {category.sub_category_item.map((item) => (
                <Label
                  key={item}
                  className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-accent"
                >
                  <RadioGroupItem value={item} />
                  <span>{item}</span>
                </Label>
              ))}
            </div>
          </RadioGroup>
        </div>
      ))}
      
      <Button 
        className="w-full" 
        disabled={!isComplete}
        onClick={handleAddToCart}
      >
        Добавить в корзину за {product.price}₸
      </Button>
    </div>
  )
}

