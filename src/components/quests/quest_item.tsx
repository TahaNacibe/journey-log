import { Bookmark } from "lucide-react";
import type { CSSProperties } from "react";
import type { QuestItem as QuestItemType } from "@/types/quests/quests_item";

interface Props {
  item: QuestItemType;
  colorCode?: string;
  onClick?: (item: QuestItemType) => void;
}

export default function QuestItem({
  item,
  colorCode = "#7C3AED",
  onClick,
}: Props) {
  const c = colorCode;
  // compact view: no timestamp, show badge then single-line description

  return (
    <button
      type="button"
      onClick={() => onClick?.(item)}
      className="group w-full text-left outline-none"
      style={
        {
          "--qc": c,
          "--qc-12": `${c}14`,
          "--qc-20": `${c}33`,
        } as CSSProperties
      }
    >
      <div
        className={
          "relative flex items-center overflow-hidden border-b transition-all duration-150 " +
          "group-hover:bg-white dark:group-hover:bg-white/4 group-hover:border-(--qc-20) " +
          "group-hover:shadow-[0_2px_12px_var(--qc-12)] group-active:scale-[0.99]"
        }
      >
        <div
          className="w-[2.5px] h-11 opacity-70 group-hover:opacity-100 transition-opacity duration-150"
          style={{ backgroundColor: c }}
        />

        <div className="flex flex-1 min-w-0 items-center gap-1.5 px-2 py-1">
          <div
            className="shrink-0 flex items-center justify-center w-6 h-6 rounded-[6px] transition-colors duration-150"
            style={{ backgroundColor: `var(--qc-12)` }}
          >
            <Bookmark size={14} strokeWidth={1.5} color={c} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-zinc-800 dark:text-zinc-100 truncate leading-snug tracking-[-0.01em]">
              {item.metadata.title}
            </p>
            <div className="mt-0.5">
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1 shrink-0 rounded-lg px-1 py-[1.5px] text-[6px] font-bold uppercase tracking-[0.04em]"
                  style={{ backgroundColor: `var(--qc-12)`, color: c }}
                >
                  {item.metadata.quest_state}
                </span>

                <p className="text-[10px] text-zinc-400 dark:text-zinc-500 truncate leading-tight">
                  {item.metadata.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
