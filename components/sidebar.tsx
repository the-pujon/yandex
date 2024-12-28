'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft, MessageCircle } from 'lucide-react'
import { useActiveSection } from '@/hooks/use-active-section'
import { MenuData } from '@/lib/types'

export function Sidebar() {
  const [menuData, setMenuData] = useState<MenuData | null>(null)

  useEffect(() => {
    const data = {
      "data": [
        // {
        //   "id": "menu",
        //   "category": "Menu"
        // },
        {
          "id": "whats-new",
          "category": "What's new"
        },
        {
          "id": "snacks",
          "category": "Снэки"
        },
        {
          "id": "drinks",
          "category": "Напитки"
        },
        {
          "id": "additional",
          "category": "Дополнительно"
        },
        {
          "id": "solo-baskets",
          "category": "Соло баскеты"
        },
        {
          "id": "combo",
          "category": "Комбо"
        },
        {
          "id": "boxes",
          "category": "Боксы"
        },
        {
          "id": "burgers-sandwiches",
          "category": "Бургеры и сэндвичи"
        },
        {
          "id": "combo-baskets",
          "category": "Комбо баскеты"
        },
        {
          "id": "juicy-chicken",
          "category": "Сочная курочка"
        }
      ]
    }
    setMenuData(data)
  }, [])

  const categories = menuData?.data.map(category => ({
    id: category.id.toString(),
    name: category.category,
    href: `#${category.category.toLowerCase().replace(/\s+/g, '-')}`
  })) || []

  const activeSection = useActiveSection(categories.map(cat => cat.href.slice(1)))

  const handleClick = (href: string) => {
    if (href === `#what's-new`) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
console.log(href)
    if(href !== `#what's-new`){
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 56; // Height of the sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth"
        });
      }
    }
 
  };

  return (
    <div className="sticky top-[56px] flex flex-col h-[calc(100vh-56px)]">
      <Button 
        variant="ghost" 
        className="w-full justify-start mb-6 hover:bg-gray-100 text-xl font-medium"
        asChild
      >
        <Link href="/">
          <ChevronLeft className="mr-2 h-4 w-4" />
          All restaurants
        </Link>
      </Button>

      <nav className="flex-1 space-y-1 overflow-auto pr-4 -mr-4">
        <p className='px-4 text-xl font-medium'>Menu</p>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              try {
                handleClick(category.href);
              } catch (error) {
                console.error("Error in handleClick:", error);
              }
            }}
            className="w-full px-4 py-2 text-sm text-left rounded-md transition-colors
            hover:bg-gray-100 
            data-[active=true]:bg-white data-[active=true]:shadow-sm"
            data-active={category.href.slice(1) === activeSection}
          >
            {category.name}
          </button>
        ))}
      </nav>

      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-4 left-4 h-12 w-12 rounded-full bg-yellow-400 hover:bg-yellow-500"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}

