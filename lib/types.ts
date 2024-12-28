export interface SubCategory {
  sub_category_name: string;
  sub_category_item: string[];
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  photoUrl: string;
  status: 'in-stock' | 'out-in-stock';
  subCategory?: SubCategory[];
}

export interface Category {
  id: number;
  category: string;
  category_item: MenuItem[];
}

export interface Data {
  id: string;
  category:string;
}

export interface MenuData{
  data: Data[]
}

