import { create } from "zustand";
import { DisplayStoreInterface } from "./display.types";
import {
  update_profile_banner_state,
  update_quest_board_state,
  update_theme_state,
} from "./display.core";
import { readFromStorage } from "@/lib/storage";
import { DISPLAY_STORAGE_KEY, LAYOUT_STORAGE_KEY } from "./consts/storage_keys";

const DEFAULT_LAYOUT = {
  profile_banner: true,
  quests_board: true,
};
const DEFAULT_DISPLAY = {
  dark_mode: "system",
};

export const useDisplayStore = create<DisplayStoreInterface>()((set) => {
  const savedLayout = readFromStorage(LAYOUT_STORAGE_KEY, DEFAULT_LAYOUT);
  const savedDisplay = readFromStorage(DISPLAY_STORAGE_KEY, DEFAULT_DISPLAY);

  return {
    layout: savedLayout,
    display: savedDisplay,
    update_profile_banner_state: (new_state) =>
      set((state) => {
        update_profile_banner_state(state, new_state);
        return { ...state };
      }),
    update_quest_board_state: (new_state) =>
      set((state) => {
        update_quest_board_state(state, new_state);
        return { ...state };
      }),
    update_theme_state: (new_state) =>
      set((state) => {
        update_theme_state(state, new_state);
        return { ...state };
      }),
  };
});
