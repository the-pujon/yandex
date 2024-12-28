'use client'

import { Star, Info } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function HeroBanner() {
  return (
    <div className="relative h-[300px] rounded-2xl overflow-hidden">
      <Image
        src="https://eda.yandex/images/3378693/049e8232c93c3ce2b19dc94a1da9ba26-1100x825.jpg"
        alt="KFC Banner"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h1 className="text-4xl font-bold mb-4">KFC Gres</h1>
          <div className="flex gap-3">
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Star className="h-4 w-4 fill-white" />
              <span className="font-medium">4.5</span>
              <span className="text-white/70 text-sm">200+</span>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  <Info className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[380px] p-4" align="start">
                <div className="space-y-4">
                  <div>
                    <h2 className="font-semibold text-lg mb-2">KFC Gres</h2>
                    <p className="text-sm text-muted-foreground">
                      Алматинская область, Илийский район, село Отеген батыр, улица Жансугурова, 159
                    </p>
                  </div>
                  
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>Fast food</span>
                    <span>•</span>
                    <span>American</span>
                    <span>•</span>
                    <span>Burgers</span>
                    <span>•</span>
                    <span>₸₸</span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">
                      Contractor (seller) TOO «The Caspian International Restaurants Company (Каспиан Интернэшнл Рестронгз Компани)», 010000, г.Алматы, ул. Абиша Кекилбайулы, 34, БЦ Capital Tower (2 этаж), BIN 070440007370
                    </p>
                    <p>Business hours: from 11:00 to 22:45</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}

