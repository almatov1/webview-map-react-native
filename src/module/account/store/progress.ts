import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface Lesson {
    finished: boolean
    test?: number
}

interface ProgressItem {
    username: string | null
    lessons: Lesson[]
}

type Progress = {
    progress: ProgressItem;
    patchUsername: (username: string) => void;
    patchLesson: (index: number, value: Lesson) => void;
    reset: () => void;
};

const initialProgress = {
    username: null,
    lessons: [
        { finished: false },
        { finished: false },
        { finished: false },
        { finished: false },
        { finished: false },
        { finished: false },
        { finished: false },
        { finished: false, test: 0 }
    ]
};

export const useProgress = create<Progress>()(
    persist(
        (set) => ({
            progress: initialProgress,
            patchUsername: (username: string) => set((state) => {
                return { progress: { ...state.progress, username } };
            }),
            patchLesson: (index: number, value: Lesson) => set((state) => {
                const updatedLessons = [...state.progress.lessons];
                updatedLessons[index] = value;
                return { progress: { ...state.progress, lessons: updatedLessons } };
            }),
            reset: () => set({ progress: initialProgress })
        }),
        {
            name: 'progress-store',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);