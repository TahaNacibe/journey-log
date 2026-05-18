import QuestFolder from "@/components/quests/quests_folder";
import QuestItem from "@/components/quests/quest_item";
import { QUESTS_BOARD_DATA } from "@/components/quests/quests_board.data";
import QuestsAreaSeparator from "./components/quest_area_separator";
import { Bookmark, BookmarkCheck, Folder } from "lucide-react";
import { useQuestsStore } from "@/stores/quests/quests.store";

export default function QuestsBoard() {
  const { update_active, folder_action, open_folders } = useQuestsStore();

  return (
    <div className="flex h-full flex-col">
      <QuestsAreaSeparator
        icon={Folder}
        count={QUESTS_BOARD_DATA.sections.length}
        label="Unassigned Quests"
      />
      {QUESTS_BOARD_DATA.sections.map((section) => {
        const isOpen = open_folders.includes(section.folder.metadata.id);
        return (
          <div
            key={section.folder.metadata.id}
            className="gap-0 p-0! m-0! flex flex-col"
          >
            <QuestFolder
              folder={section.folder}
              isOpen={isOpen}
              onClick={() => {
                folder_action.toggle_folder_open({
                  folder_id: section.folder.metadata.id,
                });
                update_active({
                  new_active_folder: section.folder,
                  new_active_quest:
                    section.items.length > 0 ? section.items[0] : null,
                });
              }}
            />

            {isOpen && (
              <div className="border-l ml-2 dark:border-gray-700">
                {section.items.length > 0 && (
                  <div className="pl-2 flex flex-col">
                    {section.items.map((item) => (
                      <QuestItem
                        key={item.metadata.id}
                        item={item}
                        colorCode={section.folder.metadata.colorCode}
                        onClick={() =>
                          update_active({
                            new_active_folder: section.folder,
                            new_active_quest: item,
                          })
                        }
                      />
                    ))}
                  </div>
                )}

                {/* ============ SUB FOLDER =============== */}
                {section.children?.map((child) => {
                  const childOpen = open_folders.includes(
                    child.folder.metadata.id,
                  );
                  return (
                    <div
                      key={child.folder.metadata.id}
                      className="pl-4 flex flex-col"
                    >
                      <QuestFolder
                        isOpen={childOpen}
                        folder={child.folder}
                        onClick={() => {
                          folder_action.toggle_folder_open({
                            folder_id: child.folder.metadata.id,
                          });
                        }}
                      />

                      {childOpen && (
                        <div className="pl-2 ml-2 border-l dark:border-gray-700 flex flex-col">
                          {child.items.map((item) => (
                            <QuestItem
                              key={item.metadata.id}
                              item={item}
                              colorCode={child.folder.metadata.colorCode}
                              onClick={() =>
                                update_active({
                                  new_active_folder: child.folder,
                                  new_active_quest: item,
                                })
                              }
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {QUESTS_BOARD_DATA.rootItems.length > 0 && (
        <div>
          <QuestsAreaSeparator
            icon={Bookmark}
            count={QUESTS_BOARD_DATA.rootItems.length}
            label="Unassigned Quests"
          />
          <div className="flex flex-col">
            {QUESTS_BOARD_DATA.rootItems.map((item) => (
              <QuestItem
                key={item.metadata.id}
                item={item}
                onClick={() => undefined}
              />
            ))}
          </div>
        </div>
      )}

      {/* ============== COMPLETED TASKS ============= */}
      <QuestsAreaSeparator
        icon={BookmarkCheck}
        count={QUESTS_BOARD_DATA.rootItems.length}
        label="Completed Quests"
      />
    </div>
  );
}
