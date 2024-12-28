/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { ProductGrid } from "@/components/product-grid";
import data from "@/data/productData"

export function ProductSections() {
  const [menuData, setMenuData] = useState<any | null>(null);

  useEffect(() => {
   
    setMenuData(data);
  }, []);

  if (!menuData) return null;

  return (
    <div className="space-y-24">
      {menuData.data.map((category: any) => (
        <section
          key={category.id}
          id={category.category.toLowerCase().replace(/\s+/g, "-")}
          className="scroll-mt-20"
        >
          <ProductGrid
            title={category.category}
            products={category.category_item}
          />
        </section>
      ))}
    </div>
  );
}
