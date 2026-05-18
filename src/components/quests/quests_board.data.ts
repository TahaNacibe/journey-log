import { QuestsFolder } from "@/types/quests/quests_folder";
import type { QuestItem } from "@/types/quests/quests_item";

export type QuestBoardSection = {
  folder: QuestsFolder;
  items: QuestItem[];
  children?: QuestBoardSection[];
};

export type QuestsBoardData = {
  sections: QuestBoardSection[];
  rootItems: QuestItem[];
};

export const QUESTS_BOARD_DATA: QuestsBoardData = {
  sections: [
    {
      folder: {
        metadata: {
          id: "1",
          name: "Dragon's Peak",
          description:
            "Defeat the ancient dragon and claim the summit fortress.",
          colorCode: "#534AB7",
          mode: "Main",
          parent_folder_id: null,
        },
        saveState: true,
        isDeleted: false,
      },
      items: [
        {
          metadata: {
            id: "item-1",
            title: "Survey the northern ridge",
            description: "Report back with a map of enemy approach routes.",
            author_id: "npc_01",
            parent_folder_id: "1",
            quest_state: "OnGoing",
          },
          progress_params: {
            repetitions: 0,
            due_time: Date.now() + 3600 * 1000,
            is_infinite: false,
          },
          state: {
            is_archived_quest: false,
            is_high_priority_quest: true,
          },
          level_params: {
            talent_rewords: [],
            skill_forge_points: 0,
            completion_exp_reword: 120,
          },
          logs: [],
        },
        {
          metadata: {
            id: "item-2",
            title: "Collect dragon scales",
            description: "Harvest five intact scales for the armourer.",
            author_id: "npc_02",
            parent_folder_id: "1",
            quest_state: "OnGoing",
          },
          progress_params: {
            repetitions: 0,
            due_time: Date.now() + 7200 * 1000,
            is_infinite: false,
          },
          state: {
            is_archived_quest: false,
            is_high_priority_quest: false,
          },
          level_params: {
            talent_rewords: [],
            skill_forge_points: 0,
            completion_exp_reword: 80,
          },
          logs: [],
        },
      ],
    },
    {
      folder: {
        metadata: {
          id: "2",
          name: "Market Errands",
          description: "Collect herbs for the alchemist in the lower district.",
          colorCode: "#185FA5",
          mode: "Side",
          parent_folder_id: null,
        },
        saveState: false,
        isDeleted: false,
      },
      items: [],
    },
    {
      folder: {
        metadata: {
          id: "4",
          name: "The Foundation",
          description: "Establish the core mechanics of the kingdom's economy.",
          colorCode: "#993C1D",
          mode: "Core",
          parent_folder_id: null,
        },
        saveState: false,
        isDeleted: false,
      },
      items: [
        {
          metadata: {
            id: "item-3",
            title: "Secure trade routes",
            description: "Clear the western road of bandit activity.",
            author_id: "npc_03",
            parent_folder_id: "4",
            quest_state: "OnGoing",
          },
          progress_params: {
            repetitions: 0,
            due_time: Date.now() + 5400 * 1000,
            is_infinite: false,
          },
          state: {
            is_archived_quest: false,
            is_high_priority_quest: true,
          },
          level_params: {
            talent_rewords: [],
            skill_forge_points: 0,
            completion_exp_reword: 100,
          },
          logs: [],
        },
      ],
      children: [
        {
          folder: {
            metadata: {
              id: "5",
              name: "Lost Relics",
              description:
                "Track down the five scattered pieces of the ancient map.",
              colorCode: "#0F6E56",
              mode: "Side",
              parent_folder_id: "4",
            },
            saveState: true,
            isDeleted: false,
          },
          items: [
            {
              metadata: {
                id: "item-4",
                title: "Recover the first shard",
                description:
                  "Search the abandoned shrine for the eastern relic.",
                author_id: "npc_04",
                parent_folder_id: "5",
                quest_state: "OnGoing",
              },
              progress_params: {
                repetitions: 0,
                due_time: Date.now() + 1800 * 1000,
                is_infinite: false,
              },
              state: {
                is_archived_quest: false,
                is_high_priority_quest: false,
              },
              level_params: {
                talent_rewords: [],
                skill_forge_points: 0,
                completion_exp_reword: 60,
              },
              logs: [],
            },
            {
              metadata: {
                id: "item-5",
                title: "Recover the second shard",
                description:
                  "Investigate the flooded caverns beneath the old mill.",
                author_id: "npc_05",
                parent_folder_id: "5",
                quest_state: "OnGoing",
              },
              progress_params: {
                repetitions: 0,
                due_time: Date.now() + 10800 * 1000,
                is_infinite: false,
              },
              state: {
                is_archived_quest: false,
                is_high_priority_quest: false,
              },
              level_params: {
                talent_rewords: [],
                skill_forge_points: 0,
                completion_exp_reword: 70,
              },
              logs: [],
            },
          ],
        },
      ],
    },
  ],
  rootItems: [
    {
      metadata: {
        id: "item-6",
        title: "Scout the western pass",
        description: "Report patrol positions and enemy movement.",
        author_id: "npc_06",
        parent_folder_id: null,
        quest_state: "OnGoing",
      },
      progress_params: {
        repetitions: 0,
        due_time: Date.now() + 4500 * 1000,
        is_infinite: false,
      },
      state: {
        is_archived_quest: false,
        is_high_priority_quest: false,
      },
      level_params: {
        talent_rewords: [],
        skill_forge_points: 0,
        completion_exp_reword: 40,
      },
      logs: [],
    },
    {
      metadata: {
        id: "item-7",
        title: "Deliver the captain's letter",
        description:
          "Take the sealed letter to the castle commander before dusk.",
        author_id: "npc_07",
        parent_folder_id: null,
        quest_state: "OnGoing",
      },
      progress_params: {
        repetitions: 0,
        due_time: Date.now() + 6400 * 1000,
        is_infinite: false,
      },
      state: {
        is_archived_quest: false,
        is_high_priority_quest: false,
      },
      level_params: {
        talent_rewords: [],
        skill_forge_points: 0,
        completion_exp_reword: 55,
      },
      logs: [],
    },
  ],
};
