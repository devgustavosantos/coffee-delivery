interface CartItemSimple {
  id: number;
}

interface CartItemPartial extends CartItemSimple {
  currentQuantity: number;
}

interface CartAction {
  type:
    | 'add_to_cart'
    | 'remove_from_cart'
    | 'update_product_quantity'
    | 'clean_cart';
  payload?: CartItemSimple | CartItemPartial;
}

type CartState = CartItemPartial[];

type PayloadToAddOrUpdate = CartItemSimple | CartItemPartial | undefined;

export type { CartItemPartial, CartAction, CartState, PayloadToAddOrUpdate };
