import { TalentReword } from "../status/talent";
import { QuestLog } from "./quest_log";
import { QuestState } from "./quest_mode";

export type QuestItem = {
  metadata: {
    id: string;
    title: string;
    description: string;
    author_id: string;
    parent_folder_id: string | null;
    quest_state: QuestState;
  };
  progress_params: {
    repetitions: number;
    due_time: number;
    is_infinite: boolean;
  };
  state: {
    is_archived_quest: boolean;
    is_high_priority_quest: boolean;
  };
  level_params: {
    talent_rewords: TalentReword[];
    skill_forge_points: number;
    completion_exp_reword: number;
  };
  logs: QuestLog[];
};
