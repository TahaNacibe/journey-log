import {
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarItem,
  MenubarShortcut,
} from "../ui/menubar";
import { MenuItemDef } from "./menubar";

function RenderItem({ item }: { item: MenuItemDef }) {
  if (item.type === "separator") {
    return <MenubarSeparator />;
  }

  if (item.type === "sub") {
    return (
      <MenubarSub>
        <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
        <MenubarSubContent className="border-none shadow-none">
          {item.items.map((subItem, i) => (
            <RenderItem key={i} item={subItem} />
          ))}
        </MenubarSubContent>
      </MenubarSub>
    );
  }

  return (
    <MenubarItem disabled={item.disabled} onClick={item.onClick}>
      {item.label}
      {item.shortcut && <MenubarShortcut>{item.shortcut}</MenubarShortcut>}
    </MenubarItem>
  );
}

export default RenderItem;
