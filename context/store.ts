import { Fact } from "@/types/Fact.type"
import { create } from "zustand"

type Store = {
  facts: Fact[]
  loading: boolean
}

export const useStore = create<Store>(() => ({
  facts: [],
  loading: false,
}))
