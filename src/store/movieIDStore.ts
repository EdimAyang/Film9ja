import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  id: number;
  mediaType: string;
  setId: (id: any) => void;
  setMediaType: (type: string) => void;
}

export const useIdAndMediaStore = create<State>()(
  persist(
    (set) => ({
      id: 0,
      mediaType: "",

      setId: (id) => set(() => ({ id })),
      setMediaType: (type) => set(() => ({ mediaType: type })),
    }),
    {
      name: "id-media-storage", // localStorage key
    }
  )
);

