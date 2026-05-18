import { LAYOUT_STORAGE_KEY, DISPLAY_STORAGE_KEY } from "./consts/storage_keys";
import { DisplayStoreInterface } from "./display.types";
import { saveToStorage } from "@/lib/storage";

export function update_profile_banner_state(
  state: DisplayStoreInterface,
  new_state: boolean,
) {
  state.layout.profile_banner = new_state;
  saveToStorage(LAYOUT_STORAGE_KEY, state.layout);
  return;
}

export function update_quest_board_state(
  state: DisplayStoreInterface,
  new_state: boolean,
) {
  state.layout.quests_board = new_state;
  saveToStorage(LAYOUT_STORAGE_KEY, state.layout);
  return;
}

export function update_theme_state(
  state: DisplayStoreInterface,
  new_state: string,
) {
  state.display.dark_mode = new_state;
  saveToStorage(DISPLAY_STORAGE_KEY, state.display);
  return;
}
