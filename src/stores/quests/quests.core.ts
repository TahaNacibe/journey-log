import { QuestsFolder } from "@/types/quests/quests_folder";
import { QuestItem } from "@/types/quests/quests_item";
import { QuestsStoreState } from "./quests.types";
import { QuestState } from "@/types/quests/quest_mode";

export const folderLogic = {
  add: (state: QuestsStoreState, new_folder_item: QuestsFolder) => ({
    quests: {
      ...state.quests,
      folders: [...state.quests.folders, new_folder_item],
    },
  }),

  remove: (
    state: QuestsStoreState,
    folder_id: string,
    remove_quests: boolean,
  ) => {
    const folders = state.quests.folders.filter(
      (f) => f.metadata.id !== folder_id,
    );
    const items = remove_quests
      ? state.quests.items.filter(
          (i) => i.metadata.parent_folder_id !== folder_id,
        )
      : state.quests.items;
    return { quests: { folders, items } };
  },

  update: (state: QuestsStoreState, id: string, content: QuestsFolder) => ({
    quests: {
      ...state.quests,
      folders: state.quests.folders.map((f) =>
        f.metadata.id === id ? content : f,
      ),
    },
  }),
};

export const questLogic = {
  add: (state: QuestsStoreState, item: QuestItem) => ({
    quests: {
      ...state.quests,
      items: [...state.quests.items, item],
    },
  }),

  update: (state: QuestsStoreState, id: string, content: QuestItem) => ({
    quests: {
      ...state.quests,
      items: state.quests.items.map((q) =>
        q.metadata.id === id ? content : q,
      ),
    },
  }),

  changeState: (state: QuestsStoreState, id: string, newState: QuestState) => ({
    quests: {
      ...state.quests,
      items: state.quests.items.map((q) =>
        q.metadata.id === id
          ? { ...q, metadata: { ...q.metadata, quest_state: newState } }
          : q,
      ),
    },
  }),
};
