import debuggerLog from "@/lib/debugger_log";
import { readFromStorage, saveToStorage } from "@/lib/storage";
import { useState } from "react";

const PANEL_SIZING_KEY = "app-layout-sizes";

export function usePanelLayout<T>(initialValue: T) {
  const [layout, setLayout] = useState<T>(() => {
    const val = readFromStorage(PANEL_SIZING_KEY, initialValue);
    debuggerLog("READD VALUES ARE AS FOLLOW : " + JSON.stringify(val));
    return val;
  });

  const updateLayout = (newLayout: T) => {
    debuggerLog(
      "UPDATING THE VALUES IN THE MEMORY : " + JSON.stringify(newLayout),
    );
    setLayout(newLayout);
    saveToStorage(PANEL_SIZING_KEY, newLayout);
  };

  return [layout, updateLayout] as const;
}
