import { create } from "zustand";

interface TabsStoreState {
    active_tab: string,
    set_active_tab: (new_id:string) => void
}


export const useTabsStore = create<TabsStoreState>((set) => ({
    active_tab: "quests",
    set_active_tab: (new_id) => set((_) => ({active_tab: new_id}))
}))