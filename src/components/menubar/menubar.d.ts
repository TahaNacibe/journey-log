export type MenuItemDef =
  | {
      type: "item";
      label: string;
      shortcut?: string;
      disabled?: boolean;
      checked?: boolean;
      onClick?: () => void;
    }
  | { type: "separator" }
  | {
      type: "sub";
      label: string;
      items: MenuItemDef[];
    };

export interface MenuGroupDef {
  items: MenuItemDef[];
}

export interface MenuDef {
  trigger: string;
  groups: MenuGroupDef[];
}
