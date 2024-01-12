import { User } from '@supabase/supabase-js'
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
    messages: Imessage[]
}

export const useMessage = create<MessagesState>()((set) => ({
    messages: [],
})) 