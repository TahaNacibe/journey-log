import { create } from "zustand";
import { persist } from "zustand/middleware";
import { folderLogic, questLogic } from "./quests.core";
import { QuestsStoreState } from "./quests.types";


export const useQuestsStore = create<QuestsStoreState>()(
  persist(
    (set) => ({
      // --- Initial State ---
      quests: { folders: [], items: [] },
      active: { folder_id: "", quest_id: "", folder_color_code: "" },

      // --- Folder Actions ---
      folder_action: {
        add_new_folder: ({ new_folder_item }) => 
          set((state) => folderLogic.add(state, new_folder_item)),

        remove_folder: ({ remove_folder_quests, folder_id }) => 
          set((state) => folderLogic.remove(state, folder_id, remove_folder_quests)),

        update_folder: ({ folder_id, new_folder_content }) => 
          set((state) => folderLogic.update(state, folder_id, new_folder_content)),
      },

      // --- Quest Actions ---
      quest_action: {
        add_new_quest: ({ new_quest_item }) => 
          set((state) => questLogic.add(state, new_quest_item)),

        remove_quest: ({ quest_id }) => 
          set((state) => ({
            quests: { ...state.quests, items: state.quests.items.filter(q => q.metadata.id !== quest_id) }
          })),

        update_quest: ({ quest_id, new_quest_content }) => 
          set((state) => questLogic.update(state, quest_id, new_quest_content)),

        change_quest_state: ({ quest_id, new_quest_state }) => 
          set((state) => questLogic.changeState(state, quest_id, new_quest_state)),
      },

      // --- Global Actions ---
      update_active: ({ new_active_folder, new_active_quest }) =>
        set({
          active: {
            folder_id: new_active_folder.metadata.id,
            quest_id: new_active_quest.metadata.id,
            folder_color_code: new_active_folder.metadata.colorCode,
          },
        }),
    }),
    {
      name: "quests-storage",
      partialize: (state) => ({ quests: state.quests, active: state.active }),
    }
  )
);