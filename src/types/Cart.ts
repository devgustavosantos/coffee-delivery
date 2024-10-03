interface CartItem {
  id: number;
  currentQuantity: number;
}

type AddToCart = CartItem;

interface CartAction {
  type: 'add_to_cart';
  payload?: AddToCart;
}

type CartState = CartItem[];

export type { CartItem, CartAction, CartState };
