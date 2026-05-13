import { Menubar } from "../ui/menubar";
import AppMenuBarMenu from "./app_menubar";
import { MenuDef } from "./menubar";

export function AppMenuBar({ menus }: { menus: MenuDef[] }) {
  return (
    <Menubar className="border-none shadow-none">
      {menus.map((menu, i) => (
        <AppMenuBarMenu key={i} {...menu} />
      ))}
    </Menubar>
  );
}
 