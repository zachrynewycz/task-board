import { create } from "zustand";

interface ModalState {
    isOpen: boolean;
    openCardModal: () => void;
    closeCardModal: () => void;
}

export const useCardModal = create<ModalState>((set) => ({
    isOpen: false,
    openCardModal: () => set({ isOpen: true }),
    closeCardModal: () => set({ isOpen: false }),
}));
