import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MenuDef } from "./menubar";
import RenderItem from "./item_renderer";

export function AppMenuBar({ menus }: { menus: MenuDef[] }) {
  return (
    <Menubar className="border-0">
      {menus.map((menu, i) => (
        <MenubarMenu key={i}>
          <MenubarTrigger className="text-xs!">{menu.trigger}</MenubarTrigger>
          <MenubarContent className="shadow-none! min-w-52">
            {menu.groups.map((group, gi) => (
              <>
                <MenubarGroup key={gi}>
                  {group.items.map((item, ii) => (
                    <RenderItem key={ii} item={item} />
                  ))}
                </MenubarGroup>
                {gi < menu.groups.length - 1 && <MenubarSeparator />}
              </>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
