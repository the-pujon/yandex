import { Header } from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { ProductSections } from '@/components/product-sections'
import { Cart } from '@/components/cart'
import { Banner } from '@/components/banner'
import { HeroBanner } from '@/components/hero-banner'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F5F4F2] flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto grid grid-cols-1 gap-6 md:grid-cols-[240px_1fr_300px] pt-4">
        <Sidebar />
        <div className="space-y-6">
          <HeroBanner />
          <Banner />
          <ProductSections />
        </div>
        <Cart />
      </main>
    </div>
  )
}

