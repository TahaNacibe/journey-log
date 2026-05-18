import { QUESTS_BOARD_DATA } from "@/components/quests/quests_board.data";
import { QuestItem } from "@/types/quests/quests_item";

type FoundQuest = {
  quest: QuestItem;
  parentFolderId: string | null;
  folderPath: string[];
} | null;

export function flattenQuests() {
  const list: Array<{
    quest: QuestItem;
    parentFolderId: string | null;
    folderPath: string[];
  }> = [];

  // root items (no parent)
  for (const q of QUESTS_BOARD_DATA.rootItems) {
    list.push({ quest: q, parentFolderId: null, folderPath: [] });
  }

  // sections -> folder -> items
  for (const section of QUESTS_BOARD_DATA.sections) {
    const rootFolderId = section.folder.metadata.id;

    for (const item of section.items || []) {
      list.push({
        quest: item,
        parentFolderId: rootFolderId,
        folderPath: [rootFolderId],
      });
    }

    // children (subfolders)
    for (const child of section.children || []) {
      const childFolderId = child.folder.metadata.id;
      for (const item of child.items || []) {
        list.push({
          quest: item,
          parentFolderId: childFolderId,
          folderPath: [rootFolderId, childFolderId],
        });
      }
    }
  }

  return list;
}

export default function fetchQuest(quest_id: string): FoundQuest {
  const flat = flattenQuests();
  const found = flat.find((f) => f.quest?.metadata?.id === quest_id) || null;
  return found
    ? {
        quest: found.quest,
        parentFolderId: found.parentFolderId,
        folderPath: found.folderPath,
      }
    : null;
}
