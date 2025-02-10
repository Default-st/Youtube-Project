import { create } from "zustand";
import { OFFSET_LIVE_CHAT } from "./constants";

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

export const useLiveChatStore = create((set) => ({
  liveChatData: [],
  setLiveChatData: (data) =>
    set((state) => {
      if (state.liveChatData.length > OFFSET_LIVE_CHAT) {
        return {
          liveChatData: [
            data,
            ...state.liveChatData.slice(0, OFFSET_LIVE_CHAT),
          ],
        };
      } else {
        return { liveChatData: [data, ...state.liveChatData] };
      }
    }),
}));
