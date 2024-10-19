export type User = {
    name:string|'';
    phone:string|'';
    BusinessName:string|'';
    email:string|'';
}

export type Product = {
    _id: string;
    ProductName: string;
    date?: string;
    supply?: number;
    purchasePrice: number | null;
}

export type Products = {
    _id: string|'';
    ProductName:string|'';
}

export interface UserFindByEmail{
    _id:string|'',
    fistName:string|'',
    email:string|'',
    phoneNumber:string|'',
    businessName: string|''
}
export interface Address {
    addressLine:string|'',
    district: string|'',
    city: string|'',
    optional: string|''
}
export interface Supply {
    _id:string|'';
    product: []; // Update with the actual type for cart items
    totalPrice: number|0;
    activeState: boolean|false;
    date: string|'';
}

export type OrderForm =  User & Address & Product;

export type CartProduct = Product & { supply: number; };
