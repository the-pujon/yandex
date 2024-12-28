import { Gift } from 'lucide-react'

export function Banner() {
  return (
    <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
      <Gift className="h-5 w-5" />
      <p>Free delivery - on any order</p>
    </div>
  )
}

