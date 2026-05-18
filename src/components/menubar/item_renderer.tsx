import {
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarGroup,
  MenubarItem,
  MenubarShortcut,
} from "../ui/menubar";
import { MenuItemDef } from "./menubar";
import { Check } from "lucide-react";

const item =
  "text-[11.5px] font-medium text-foreground/70 hover:text-foreground " +
  "hover:bg-black/[0.05] dark:hover:bg-white/[0.05] " +
  "focus:bg-black/[0.05] dark:focus:bg-white/[0.05] " +
  "rounded-md px-2 py-[5px] cursor-default";

export default function RenderItem({ item: def }: { item: MenuItemDef }) {
  if (def.type === "separator")
    return <MenubarSeparator className="my-1 bg-black/6 dark:bg-white/6" />;

  if (def.type === "sub") {
    return (
      <MenubarSub>
        <MenubarSubTrigger
          className={item + " [&>svg]:size-3 [&>svg]:opacity-40"}
        >
          {def.label}
        </MenubarSubTrigger>
        <MenubarSubContent className="p-1 rounded-lg border shadow-none! border-black/8 dark:border-white/8">
          <MenubarGroup>
            {def.items.map((sub, i) => (
              <RenderItem key={i} item={sub} />
            ))}
          </MenubarGroup>
        </MenubarSubContent>
      </MenubarSub>
    );
  }

  return (
    <MenubarItem
      disabled={def.disabled}
      onClick={def.onClick}
      className={
        item + " data-disabled:opacity-35 data-disabled:pointer-events-none"
      }
    >
      <div className="flex items-center gap-2 flex-1">
        {def.checked && <Check size={14} className="opacity-70" />}
        {!def.checked && <span className="w-3.5" />}
        <span>{def.label}</span>
      </div>
      {def.shortcut && (
        <MenubarShortcut className="text-[10px] text-foreground/30 tracking-wider">
          {def.shortcut}
        </MenubarShortcut>
      )}
    </MenubarItem>
  );
}
