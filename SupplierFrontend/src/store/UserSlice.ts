import {StateCreator} from "zustand/esm";

export type UserStore = {
    name:string|'';
};
export type Action = {
    setName:(name:string)=>void;
    getName:(name) => string | '';
    rest:()=>void;
};
export type UserSlice = UserStore & Action;

const initialState: UserStore = {
    name:'',
}

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = (set, get) => ({
    ...initialState,
    setName: (newName: string) => set({ name: newName }),
    getName: () => get().name,
    rest: () => set(initialState),
});
