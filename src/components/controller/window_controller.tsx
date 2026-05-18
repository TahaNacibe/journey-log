import { Maximize, Minus, X } from "lucide-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import TABS from "./tabs";
import { useTabsStore } from "@/stores/tabs/tab.store";
import { useAppMenus } from "../menubar/app_menu_list";
import { AppMenuBar } from "../menubar/menu_bar";

interface Props {
  children: ReactNode;
  onTabChange?: (tabId: string) => void;
}

export default function CustomTitleBar({ children, onTabChange }: Props) {
  const { active_tab, set_active_tab } = useTabsStore();
  const router = useNavigate();
  const menus = useAppMenus();

  const handleWindow = (action: "minimize" | "maximize" | "close") => {
    window.electronAPI?.controlWindow(action);
  };

  const handleTabChange = (id: string, url: string) => {
    if (id === active_tab) return;
    router(url);
    set_active_tab(id);
    onTabChange?.(id);
  };

  const activeTabData = TABS.find((t) => t.id === active_tab);

  return (
    <div className="h-screen flex flex-col bg-transparent">
      {/* ── Tab strip ── */}
      <div
        className="shrink-0 flex items-end justify-between"
        style={{ WebkitAppRegion: "drag", height: 44 } as React.CSSProperties}
      >
        {/* Page tabs — flush left */}
        <div
          className="flex items-end"
          style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
        >
          {TABS.map((tab) => {
            const isActive = tab.id === active_tab;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id, tab.url)}
                className={[
                  "relative flex items-center gap-1.5 px-4 text-[11px] font-medium tracking-wide",
                  "select-none outline-none transition-all duration-200 rounded-t-sm bg-accent border border-b-0 border-l-0",
                  isActive
                    ? ["h-10 z-10 bg-background", tab.activeText].join(" ")
                    : "h-8.5 text-foreground/40 hover:text-foreground/65 hover:bg-accent border-b!",
                ].join(" ")}
              >
                <span className="opacity-80 shrink-0">{tab.icon}</span>
                <span>{tab.label}</span>

                {isActive && (
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-t-full ${tab.mergeBar}`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Window controls — flush right */}
        <div
          className="flex items-center gap-1 pr-3 pb-2"
          style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
        >
          <button
            onClick={() => handleWindow("minimize")}
            className="flex items-center justify-center w-7 h-7 rounded-lg bg-background
      text-foreground/50 hover:bg-amber-500 hover:text-white
      transition-colors duration-150 outline-none"
            aria-label="Minimize"
          >
            <Minus size={11} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => handleWindow("maximize")}
            className="flex items-center justify-center w-7 h-7 rounded-lg bg-background
      text-foreground/50 hover:bg-sky-500 hover:text-white
      transition-colors duration-150 outline-none"
            aria-label="Maximize"
          >
            <Maximize size={10} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => handleWindow("close")}
            className="flex items-center justify-center w-7 h-7 rounded-lg bg-background
      text-foreground/50 hover:bg-red-500 hover:text-white
      transition-colors duration-150 outline-none"
            aria-label="Close"
          >
            <X size={11} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* ── App body ── */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Menubar */}
        <div
          className="relative flex items-center shrink-0 h-8 cursor-default overflow-hidden
            bg-background border-b border-black/[0.07] dark:border-white/[0.07]"
          style={{ WebkitAppRegion: "drag" } as React.CSSProperties}
          onDoubleClick={() => handleWindow("maximize")}
        >
          <div
            className="relative z-10 flex items-center gap-2 pl-1"
            style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties}
          >
            <AppMenuBar menus={menus} />
            <span
              className={`w-1.5 h-1.5 rounded-full ${activeTabData?.mergeBar ?? "bg-border"}`}
            />
            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase select-none text-black/35 dark:text-white/30">
              {activeTabData?.label}
            </span>
          </div>
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
