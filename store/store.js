import create from "zustand";
import { persist } from 'zustand/middleware'
export const useAppStore = create(
   persist(
   (set)=>({
      items:[],
      setItems: (items)=>set({items})
   }),
   {
      name: 'storage'
   })
)