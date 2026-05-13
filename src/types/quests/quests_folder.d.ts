import { QuestMode } from "./quest_mode";

export type QuestsFolder = {
  metadata: {
    id: string;
    name: string;
    description: string;
    colorCode: string;
    mode: QuestMode;
    parent_folder_id: string | null;
  };

  saveState: boolean;
  isDeleted: boolean;
};
