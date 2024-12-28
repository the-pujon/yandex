'use client'

import { useState, useEffect } from 'react'
import { Search, ChevronDown, Globe } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky border-b top-0 z-50 bg-white transition-shadow duration-200 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="container mx-auto flex items-center justify-between h-14 gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-1 font-medium">
            <span className="text-xl">Яндекс</span>
            <span className="text-xl">Еда</span>
          </Link>
          
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Найти в ресторане"
              className="w-[300px] pl-9 h-9 bg-gray-50"
            />
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-sm font-normal border"
          >
            А-3, 5/3
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
        
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-sm font-normal"
          >
            <Globe className="mr-1 h-4 w-4" />
            English
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className="font-normal"
          >
            Log in
          </Button>
        </div>
      </div>
    </header>
  )
}

