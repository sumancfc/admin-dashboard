import { create } from "zustand";

interface UserState {
    user: {name: string; email: string; password: string} | null;
    setUser: (user: { name: string; email: string; password: string }) => void;
    clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
}))

export default useUserStore;