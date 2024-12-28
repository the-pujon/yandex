/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Minus, Plus, Car, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/lib/store/store'
import { updateQuantity, clearCart } from '@/lib/store/cartSlice'

export function Cart() {
  const dispatch = useDispatch()
  const { items, serviceFee, deliveryFee } = useSelector((state: RootState) => state.cart)
  
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  
  const handleQuantityChange = (id: number, newQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }))
  }

  const handleClear = () => {
    dispatch(clearCart())
  }

  return (
    <div className="bg-white rounded-lg shadow-sm sticky top-[72px] h-[calc(100vh-88px)] flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Cart</h2>
          {items.length > 0 && (
            <Button variant="ghost" size="sm" onClick={handleClear}>
              Clear
            </Button>
          )}
        </div>
      </div>

      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="text-4xl mb-4">☹️</div>
          <p className="text-lg font-medium text-center mb-4">
            Your cart is currently empty
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-auto p-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 py-4 border-b last:border-0">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium mb-1">{item.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary font-bold">{item.price}₸</span>
                  <span className="text-muted-foreground line-through text-sm">
                    {item.originalPrice}₸
                  </span>
                </div>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    −
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="border-t p-4 space-y-4 bg-white">
        {items.length > 0 && (
          <>
            <div className="flex justify-between text-sm">
              <span>Service fee</span>
              <span>{serviceFee}₸</span>
            </div>
          </>
        )}
        <div className="flex items-start gap-2 text-sm">
          <Car className="h-4 w-4 mt-0.5" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span>Free delivery from 1000₸</span>
              <button className="ml-auto">
                <Info className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground">50-60 min</p>
          </div>
        </div>
        {items.length > 0 && (
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
            Next {total}₸
          </Button>
        )}
      </div>
    </div>
  )
}

