import { QuestState } from "@/types/quests/quest_mode";
import { QuestsFolder } from "@/types/quests/quests_folder";
import { QuestItem } from "@/types/quests/quests_item";

export interface QuestsStoreState {
  quests: {
    folders: QuestsFolder[];
    items: QuestItem[];
  };
  active: {
    // Ordered path of folder ids from root -> selected folder
    folder_path: string[];
    // Currently selected folder (last id from folder_path or empty)
    folder_id: string;
    quest_id: string | null;
    folder_color_code: string;
  };
  // Which folders are expanded in the UI
  open_folders: string[];
  // Actions grouped for future scalability
  folder_action: {
    add_new_folder: (params: { new_folder_item: QuestsFolder }) => void;
    remove_folder: (params: {
      remove_folder_quests: boolean;
      folder_id: string;
    }) => void;
    update_folder: (params: {
      folder_id: string;
      new_folder_content: QuestsFolder;
    }) => void;
    toggle_folder_open: (params: { folder_id: string }) => void;
    set_open_folders: (params: { open_folders: string[] }) => void;
  };
  quest_action: {
    add_new_quest: (params: { new_quest_item: QuestItem }) => void;
    remove_quest: (params: { quest_id: string }) => void;
    update_quest: (params: {
      quest_id: string;
      new_quest_content: QuestItem;
    }) => void;
    change_quest_state: (params: {
      quest_id: string;
      new_quest_state: QuestState;
    }) => void;
  };
  update_active: (params: {
    new_active_folder: QuestsFolder;
    new_active_quest: QuestItem | null;
  }) => void;
}
