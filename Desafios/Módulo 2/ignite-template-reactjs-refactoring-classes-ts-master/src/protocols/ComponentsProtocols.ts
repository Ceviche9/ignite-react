import { ReactNode } from "react"
import { IconBaseProps } from "react-icons"

export type FoodDataProps = {
  id: number
  name: string
  description: string
  price: string
  available: boolean
  image: string
}

export type FoodProps = {
  key: number
  food: FoodDataProps
  handleDelete: (id: number) => void
  handleEditFood: (food: FoodDataProps) => void
}

export type HeaderProps = {
  openModal: () => void
}

export type InputProps = {
  name: string
  placeholder?: string
  icon?: React.ComponentType<IconBaseProps>
}

export type ModalProps = {
  isOpen: boolean
  setIsOpen: () => void
  children: ReactNode
}

export type ModalAddFoodProps = {
  isOpen: boolean
  setIsOpen: () => void
  handleAddFood: (data: FoodDataProps) => Promise<void>
}
export type EditingFoodProps = {
  food: FoodDataProps
  editModalOpen: boolean
}

export type ModalEditFoodProps = {
  isOpen: boolean
  setIsOpen: () => void
  editingFood: EditingFoodProps
  handleUpdateFood: (data: FoodDataProps) => Promise<void>
}


