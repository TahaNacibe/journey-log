import { create } from "zustand";
import { persist } from "zustand/middleware";
import { folderLogic, questLogic } from "./quests.core";
import { QuestsStoreState } from "./quests.types";

export const useQuestsStore = create<QuestsStoreState>()(
  persist(
    (set) => ({
      // --- Initial State ---
      quests: { folders: [], items: [] },
      active: {
        folder_path: [],
        folder_id: "",
        quest_id: null,
        folder_color_code: "",
      },
      open_folders: [],

      // --- Folder Actions ---
      folder_action: {
        add_new_folder: ({ new_folder_item }) =>
          set((state) => folderLogic.add(state, new_folder_item)),

        remove_folder: ({ remove_folder_quests, folder_id }) =>
          set((state) =>
            folderLogic.remove(state, folder_id, remove_folder_quests),
          ),

        update_folder: ({ folder_id, new_folder_content }) =>
          set((state) =>
            folderLogic.update(state, folder_id, new_folder_content),
          ),
        toggle_folder_open: ({ folder_id }) =>
          set((state) => {
            const isOpen = state.open_folders.includes(folder_id);
            return {
              open_folders: isOpen
                ? state.open_folders.filter((id) => id !== folder_id)
                : [...state.open_folders, folder_id],
            };
          }),
        set_open_folders: ({ open_folders }) => set({ open_folders }),
      },

      // --- Quest Actions ---
      quest_action: {
        add_new_quest: ({ new_quest_item }) =>
          set((state) => questLogic.add(state, new_quest_item)),

        remove_quest: ({ quest_id }) =>
          set((state) => ({
            quests: {
              ...state.quests,
              items: state.quests.items.filter(
                (q) => q.metadata.id !== quest_id,
              ),
            },
          })),

        update_quest: ({ quest_id, new_quest_content }) =>
          set((state) => questLogic.update(state, quest_id, new_quest_content)),

        change_quest_state: ({ quest_id, new_quest_state }) =>
          set((state) =>
            questLogic.changeState(state, quest_id, new_quest_state),
          ),
      },

      // --- Global Actions ---
      update_active: ({ new_active_folder, new_active_quest }) =>
        set({
          active: {
            folder_path: [new_active_folder.metadata.id],
            folder_id: new_active_folder.metadata.id,
            quest_id:
              new_active_quest != null ? new_active_quest.metadata.id : null,
            folder_color_code: new_active_folder.metadata.colorCode,
          },
        }),
    }),
    {
      name: "quests-storage",
      partialize: (state) => ({
        quests: state.quests,
        active: state.active,
        open_folders: state.open_folders,
      }),
    },
  ),
);
