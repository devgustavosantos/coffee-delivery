interface CartItemSimple {
  id: number;
}

interface CartItemPartial extends CartItemSimple {
  currentQuantity: number;
}

interface CartAction {
  type: 'add_to_cart' | 'remove_from_cart' | 'update_product_quantity';
  payload: CartItemSimple | CartItemPartial;
}

type CartState = CartItemPartial[];

export type { CartItemPartial, CartAction, CartState };
