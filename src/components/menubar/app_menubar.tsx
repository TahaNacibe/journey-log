import {
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
} from "../ui/menubar";
import RenderItem from "./item_renderer";
import { MenuDef } from "./menubar";

function AppMenuBarMenu({ trigger, groups }: MenuDef) {
  return (
    <MenubarMenu>
      <MenubarTrigger>{trigger}</MenubarTrigger>
      <MenubarContent className="border-none shadow-none mx-2">
        {groups.map((group, gi) => (
          <MenubarGroup key={gi}>
            {group.items.map((item, ii) => (
              <RenderItem key={ii} item={item} />
            ))}
            {gi < groups.length - 1 && <MenubarSeparator />}
          </MenubarGroup>
        ))}
      </MenubarContent>
    </MenubarMenu>
  );
}

export default AppMenuBarMenu;
