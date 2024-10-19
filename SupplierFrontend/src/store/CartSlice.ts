import {StateCreator} from "zustand";
import {CartProduct, Product} from "../utils/Utils";

type CartState = {
    products: CartProduct[];
    total: number;
};

type CartActions = {
    addProduct: (product: Product) => void;
    removeProduct: (productId: string) => void;
    incQty: (productId: string) => void;
    decQty: (productId: string) => void;
    getProductById: (productId: string) => CartProduct | undefined;
    setTotal: (total: number) => void;
    reset: () => void;
};

export type CartSlice = CartState & CartActions;

const initialState: CartState = {
    products: [],
    total: 0,
};
export const createCartSlice: StateCreator<CartSlice, [['zustand/immer', never]], [], CartSlice> = (set, get) => ({
    ...initialState,
    incQty: (productId) =>
        set((state) => {
            const foundProduct = state.products.find(
                (product) => product._id === productId
            );
            if (foundProduct) {
                foundProduct.supply += 1;
            }
        }),
    decQty: (productId) =>
        set((state) => {
            const foundIndex = state.products.findIndex(
                (product) => product._id === productId
            );
            if (foundIndex !== -1) {
                if (state.products[foundIndex].supply === 1) {
                    state.products.splice(foundIndex, 1);
                } else {
                    state.products[foundIndex].supply -= 1;
                }
            }
        }),
    addProduct: (product) =>
        set((state) => {
            state.products.push({ ...product, supply: 1 });
        }),
    removeProduct: (productId) =>
        set((state) => {state.products = state.products.filter((product) => product._id !== productId);}),
    getProductById: (productId) =>
        get().products.find((product) => product._id === productId),
    setTotal: (total) =>
        set((state) => {
            state.total = total;
        }),
    reset: () => set(() => initialState),
});
