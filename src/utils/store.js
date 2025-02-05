import { create } from "zustand";

export const useStore = create((set) => ({
  showSidebar: true,
  toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
  closeMenu: () => set(() => ({ showSidebar: false })),
}));
