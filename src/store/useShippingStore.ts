import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ShippingInfo } from '../types/shipping';

interface ShippingStore {
  shippingInfo: ShippingInfo;
  setShippingInfo: (info: ShippingInfo) => void;
  clearShippingInfo: () => void;
}

export const useShippingStore = create<ShippingStore>()(
  persist(
    (set) => ({
      shippingInfo: {
        fullName: '',
        phone: '',
        country: '',
        city: '',
        street: '',
        postalCode: '',
      },
      setShippingInfo: (info) => set({ shippingInfo: info }),
      clearShippingInfo: () =>
        set({
          shippingInfo: {
            fullName: '',
            phone: '',
            country: '',
            city: '',
            street: '',
            postalCode: '',
          },
        }),
    }),
    {
      name: 'shipping-storage', 
    }
  )
);
