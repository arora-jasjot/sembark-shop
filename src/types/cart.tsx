import type { ProductType } from "./product"

export interface CartType {
    id: number,
    userId: number,
    date: string,
    products: {
        productId: number,
        quantity: number
    }[]
}
export interface CartItemType extends ProductType {
    quantity: number
}