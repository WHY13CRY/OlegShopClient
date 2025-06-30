import { create } from 'zustand';
import * as cartApi from '../services/cartApi';
import { AddressInfo, CartItem } from '../types/cart';

interface CartState {
  items: CartItem[];
  loading: boolean;
  fetchCart: () => Promise<void>;
  addToCart: (productId: number, quantity: number) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  clearCart: () => Promise<void>;
  proceedToCheckout: (addressInfo: AddressInfo) => Promise<any>
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  loading: false,
  fetchCart: async () => {
    set({ loading: true });
    const items = await cartApi.fetchCart();
    set({ items, loading: false });
  },
  addToCart: async (productId: number, quantity: number) => {
    const updatedItem = await cartApi.addToCart(productId, quantity);
    set((state) => {
      const otherItems = state.items.filter((i) => i.product_id !== productId);
      return { items: [...otherItems, updatedItem] };
    });
  },
  removeFromCart: async (productId: number) => {
    await cartApi.removeFromCart(productId);
    set((state) => ({
      items: state.items.filter((item) => item.product_id !== productId),
    }));
  },
  clearCart: async () => {
    await cartApi.clearCart();
    set({ items: [] });
  },
  proceedToCheckout: async (addressInfo: AddressInfo) => {
    const result = await cartApi.proceedToCheckout(addressInfo);
    set({ items: [] });
    return result;
  },
}));

export default useCartStore;
