import debuggerLog from "@/lib/debugger_log";
import { readFromStorage, saveToStorage } from "@/lib/storage";
import { useTheme } from "next-themes";

const THEME_STORAGE_KEY = "theme";
const DEFAULT_THEME_VALUE = "System";

export function useAppTheme() {
  const { theme, resolvedTheme, setTheme: setNextTheme } = useTheme();

  function setTheme(t: ThemeMode) {
    setNextTheme(t);
    saveToStorage(THEME_STORAGE_KEY, t);
  }

  function readTheme() {
    const themeValue = readFromStorage(THEME_STORAGE_KEY, DEFAULT_THEME_VALUE);
    debuggerLog(themeValue);
    // update theme
    setTheme(themeValue);
  }

  return { theme, resolvedTheme, setTheme, readTheme };
}
