import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
    name: string;
    email: string;
    password: string;
}

interface UserState {
    user: User | null;
    setUser: (user: Partial<User>) => void;
    clearUser: () => void;
}

const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (userData: Partial<User>): void => set((state) => ({
                user: state.user ? { ...state.user, ...userData } : userData as User
            })),
            clearUser: (): void => set({ user: null }),
        }),
        {
            name: 'user',
            storage: createJSONStorage(() => localStorage),
        }
    )
);


export default useUserStore;
