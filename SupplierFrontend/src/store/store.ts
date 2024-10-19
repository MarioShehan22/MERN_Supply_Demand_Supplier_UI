import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import {CartSlice, createCartSlice} from "./CartSlice";
import {createUserSlice, UserSlice} from "./UserSlice";
export type Slice = CartSlice & UserSlice;

export const useStore = create<Slice>()(
    devtools(
        persist(
            subscribeWithSelector(
                immer((...a) => ({
                    ...createCartSlice(...a),
                    ...createUserSlice(...a)
                }))
            ),
            {
                name: 'MySupplyStore',
            }
        )
    )
);
