import { create } from "zustand";

export const useStore = create((set) => ({
  showSidebar: true,
  toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
  closeMenu: () => set(() => ({ showSidebar: false })),
}));

export const useCachedData = create((set) => ({
  cachedData: {},
  setCachedData: (query, queryData) =>
    set((state) => ({
      cachedData: { ...state.cachedData, [query]: queryData },
    })),
}));

export const useVideoStore = create((set) => ({
  videos: [],
  setVideos: (data) => set(() => ({ videos: data })),
}));
