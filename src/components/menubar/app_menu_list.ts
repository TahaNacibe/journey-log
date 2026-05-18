import { useDisplayStore } from "@/stores/display/display.store";
import { MenuDef } from "./menubar";
import { useAppTheme } from "@/hooks/useAppTheme";

export function useAppMenus(): MenuDef[] {
  const { layout, display } = useDisplayStore();
  const { setTheme } = useAppTheme();

  return [
    {
      trigger: "App",
      groups: [
        {
          items: [
            {
              type: "sub",
              label: "Theme",
              items: [
                {
                  type: "item",
                  label: "Light",
                  checked: display.dark_mode === "light",
                  onClick: () => {
                    useDisplayStore.getState().update_theme_state("light");
                    setTheme("light");
                  },
                },
                {
                  type: "item",
                  label: "Dark",
                  checked: display.dark_mode === "dark",
                  onClick: () => {
                    useDisplayStore.getState().update_theme_state("dark");
                    setTheme("dark");
                  },
                },
                {
                  type: "item",
                  label: "System",
                  checked: display.dark_mode === "system",
                  onClick: () => {
                    useDisplayStore.getState().update_theme_state("system");
                    setTheme("system");
                  },
                },
              ],
            },
            { type: "separator" },
            { type: "item", label: "About" },
            { type: "item", label: "Check for Updates…" },
            { type: "separator" },
            { type: "item", label: "Quit", shortcut: "⌘Q", onClick: () => {} },
          ],
        },
      ],
    },
    {
      trigger: "View",
      groups: [
        {
          items: [
            {
              type: "sub",
              label: "Show",
              items: [
                {
                  type: "item",
                  label: "Quest Board",
                  shortcut: "⌘1",
                  checked: layout.quests_board,
                  onClick: () => {
                    const current =
                      useDisplayStore.getState().layout.quests_board;
                    useDisplayStore
                      .getState()
                      .update_quest_board_state(!current);
                  },
                },
                {
                  type: "item",
                  label: "Character Sheet",
                  shortcut: "⌘2",
                  checked: layout.profile_banner,
                  onClick: () => {
                    const current =
                      useDisplayStore.getState().layout.profile_banner;
                    useDisplayStore
                      .getState()
                      .update_profile_banner_state(!current);
                  },
                },
                {
                  type: "item",
                  label: "Journal",
                  shortcut: "⌘3",
                  onClick: () => {},
                },
                {
                  type: "item",
                  label: "World Map",
                  shortcut: "⌘4",
                  onClick: () => {},
                },
              ],
            },
            { type: "separator" },
            {
              type: "item",
              label: "Enter Full Screen",
              shortcut: "⌃⌘F",
              onClick: () => {},
            },
            {
              type: "item",
              label: "Zoom In",
              shortcut: "⌘+",
              onClick: () => {},
            },
            {
              type: "item",
              label: "Zoom Out",
              shortcut: "⌘−",
              onClick: () => {},
            },
            {
              type: "item",
              label: "Reset Zoom",
              shortcut: "⌘0",
              onClick: () => {},
            },
          ],
        },
      ],
    },
    {
      trigger: "Quests",
      groups: [
        {
          items: [
            {
              type: "item",
              label: "New Quest",
              shortcut: "⌘N",
              onClick: () => {},
            },
            {
              type: "item",
              label: "New Daily",
              shortcut: "⌘⇧N",
              onClick: () => {},
            },
            { type: "item", label: "New Habit", onClick: () => {} },
          ],
        },
        {
          items: [
            {
              type: "item",
              label: "Mark Complete",
              shortcut: "⌘↩",
              onClick: () => {},
            },
            { type: "item", label: "Archive Quest", onClick: () => {} },
            { type: "separator" },
            {
              type: "item",
              label: "View All Active",
              shortcut: "⌘⇧A",
              onClick: () => {},
            },
            { type: "item", label: "View Completed", onClick: () => {} },
          ],
        },
      ],
    },
    {
      trigger: "Journal",
      groups: [
        {
          items: [
            {
              type: "item",
              label: "New Entry",
              shortcut: "⌘J",
              onClick: () => {},
            },
            {
              type: "item",
              label: "Today's Log",
              shortcut: "⌘T",
              onClick: () => {},
            },
          ],
        },
        {
          items: [
            {
              type: "item",
              label: "Search Entries",
              shortcut: "⌘F",
              onClick: () => {},
            },
            { type: "item", label: "Export Journal…", onClick: () => {} },
          ],
        },
      ],
    },
    {
      trigger: "Character",
      groups: [
        {
          items: [
            {
              type: "item",
              label: "View Sheet",
              shortcut: "⌘P",
              onClick: () => {},
            },
            { type: "item", label: "Level Up", onClick: () => {} },
            {
              type: "item",
              label: "Claim Reward",
              shortcut: "⌘R",
              onClick: () => {},
            },
          ],
        },
        {
          items: [
            { type: "item", label: "Skills & Traits", onClick: () => {} },
            { type: "item", label: "Inventory", onClick: () => {} },
            { type: "item", label: "Achievement Log", onClick: () => {} },
          ],
        },
      ],
    },
    {
      trigger: "Settings",
      groups: [
        {
          items: [
            {
              type: "item",
              label: "General",
              shortcut: "⌘,",
              onClick: () => {},
            },
            { type: "item", label: "Notifications", onClick: () => {} },
            { type: "item", label: "Backup & Restore", onClick: () => {} },
          ],
        },
      ],
    },
  ];
}
