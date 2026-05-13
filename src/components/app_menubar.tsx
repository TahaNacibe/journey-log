import { MenuDef } from "./menubar/menubar";
import { AppMenuBar } from "./menubar/top_level";

const menuConfig: MenuDef[] = [
  {
    trigger: "Display",
    groups: [
      {
        items: [
          { type: "item", label: "Undo", shortcut: "⌘Z" },
          { type: "item", label: "Redo", shortcut: "⇧⌘Z" },
        ],
      },
      {
        items: [
          {
            type: "sub",
            label: "Find",
            items: [
              { type: "item", label: "Search the web", shortcut: "⌥⌘F" },
              { type: "separator" },
              { type: "item", label: "Find..." },
              { type: "item", label: "Find Next" },
              { type: "item", label: "Find Previous" },
            ],
          },
          { type: "item", label: "Cut", shortcut: "⌘X" },
          { type: "item", label: "Copy", shortcut: "⌘C" },
          { type: "item", label: "Paste", shortcut: "⌘V" },
        ],
      },
    ],
  },
];

export default function AppMenubar() {
  return (
    <div className="">
      <AppMenuBar menus={menuConfig} />
    </div>
  );
}
