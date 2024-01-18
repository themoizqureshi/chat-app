import { create } from 'zustand'
import { LIMIT_MESSAGE } from '../constant';

export type Imessage = {
    created_at: string;
    id: string;
    is_edit: boolean;
    send_by: string;
    text: string;
    users: {
        avatar_url: string | null;
        created_at: string;
        display_name: string | null;
        id: string;
    } | null;
}

interface MessagesState {
    hasMore: boolean;
    page: number;
    messages: Imessage[];
    actionMessage: Imessage | undefined,
    optimisticIds: string[];
    addMessage: (message: Imessage) => void;
    setActionMessage: (message: Imessage | undefined) => void;
    optimisticDeleteMessage: (messageId: string) => void;
    optimisticUpdateMessage: (messageId: Imessage) => void;
    setOptimisticIds: (id: string) => void;
    setMessages: (messages: Imessage[]) => void;
}

export const useMessage = create<MessagesState>()((set) => ({
    hasMore: true,
    page: 1,
    messages: [],
    optimisticIds: [],
    actionMessage: undefined,
    setMessages: (messages) => set((state) => ({
        messages: [...messages, ...state.messages],
        page: state.page + 1,
        hasMore: messages.length >= LIMIT_MESSAGE,
    })),
    setOptimisticIds: (id: string) => set((state) => ({ optimisticIds: [...state.optimisticIds, id] })),
    addMessage: (newMessages) => set((state) => ({
        messages: [...state.messages, newMessages],
    })),
    setActionMessage: (message) => set(() => ({ actionMessage: message })),
    optimisticDeleteMessage: (messageId) => set((state) => {
        return {
            messages: state.messages.filter((message) => message.id !== messageId)
        }
    }),
    optimisticUpdateMessage: (updateMessage) => set((state) => {
        return {
            messages: state.messages.filter((message) => {
                if (message.id === updateMessage.id) {
                    message.text = updateMessage.text,
                        message.is_edit = updateMessage.is_edit
                }
                return message
            })
        }
    }),

})) 