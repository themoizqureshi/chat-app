import { create } from 'zustand'

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
    messages: Imessage[];
    actionMessage: Imessage | undefined,
    optimisticIds: string[];
    addMessage: (message: Imessage) => void;
    setActionMessage: (message: Imessage | undefined) => void;
    optimisticDeleteMessage: (messageId: string) => void;
    optimisticUpdateMessage: (messageId: Imessage) => void;
    setOptimisticIds: (id: string) => void;

}

export const useMessage = create<MessagesState>()((set) => ({
    messages: [],
    optimisticIds: [],
    actionMessage: undefined,
    setOptimisticIds: (id: string) => set((state) => ({ optimisticIds: [...state.optimisticIds, id] })),
    addMessage: (newMessage) => set((state) => ({
        messages: [...state.messages, newMessage],
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