export type CartItems = CartItemType[]

export interface CartItemType {
  id: number
  displayName: string
  imageName: string
  quantity: number
}
