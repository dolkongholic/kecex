import { mainBanner } from "@prisma/client";
import { create } from "zustand";

interface UserModalStore {
  isOpen: boolean;
  banner: mainBanner | null;
  onOpen: () => void;
  onClose: () => void;
}

const useInsertMainBanner = create<UserModalStore>((set) => ({
  isOpen: false,
  banner: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useInsertMainBanner;
