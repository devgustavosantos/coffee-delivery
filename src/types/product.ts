interface Tag {
  id: number;
  title: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  tags?: Tag[];
  price: number;
  quantity: number;
}

export type { Product, Tag };
