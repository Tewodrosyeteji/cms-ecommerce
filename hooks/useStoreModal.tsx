import { create } from "zustand";

type StoreModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useStoreModal = create<StoreModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useStoreModal;
