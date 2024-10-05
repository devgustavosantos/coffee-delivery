interface CartItemComplete {
  id: number;
  currentQuantity: number;
}

type CartItemSimple = Omit<CartItemComplete, 'currentQuantity'>;

interface CartAction {
  type: 'add_to_cart' | 'remove_from_cart';
  payload: CartItemComplete | CartItemSimple;
}

type CartState = CartItemComplete[];

export type { CartItemComplete, CartAction, CartState };
