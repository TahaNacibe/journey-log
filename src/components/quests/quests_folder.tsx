import { QuestsFolder } from "@/types/quests/quests_folder";
import { ChevronRight, Sword, Compass, Sun, Star } from "lucide-react";

const MODE_CONFIG: Record<
  string,
  { label: string; icon: (color: string) => React.ReactNode }
> = {
  Main: {
    label: "Main",
    icon: (color: string) => (
      <Sword size={16} strokeWidth={1.5} color={color} />
    ),
  },
  Side: {
    label: "Side",
    icon: (color: string) => (
      <Compass size={16} strokeWidth={1.5} color={color} />
    ),
  },
  Daily: {
    label: "Daily",
    icon: (color: string) => <Sun size={16} strokeWidth={1.5} color={color} />,
  },
  Core: {
    label: "Core",
    icon: (color: string) => <Star size={16} strokeWidth={1.5} color={color} />,
  },
};

interface Props {
  folder: QuestsFolder;
  isOpen: boolean;
  onClick?: (folder: QuestsFolder) => void;
}

export default function QuestFolder({ folder, onClick, isOpen }: Props) {
  const { metadata, saveState, isDeleted } = folder;
  const mode = MODE_CONFIG[metadata.mode] ?? MODE_CONFIG.Main;
  const c = metadata.colorCode;

  if (isDeleted) return null;

  // Build a compact meta string for the second line
  const metaParts = [
    metadata.description,
    metadata.parent_folder_id ? "Nested" : null,
  ].filter(Boolean);

  return (
    <button
      onClick={() => onClick?.(folder)}
      className="group w-full text-left outline-none"
      style={
        {
          "--qc": c,
          "--qc-12": `${c}14`,
          "--qc-20": `${c}33`,
        } as React.CSSProperties
      }
    >
      <div
        className={`relative flex items-center overflow-hidden transition-all duration-150 group-hover:bg-white dark:group-hover:bg-white/4 group-hover:border-(--qc-20) group-hover:shadow-[0_2px_12px_var(--qc-12)] group-active:scale-[0.99] border-b`}
      >
        {/* Accent bar */}
        <div
          className="w-[2.5px] h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-150"
          style={{ backgroundColor: c }}
        />

        {/* Content */}
        <div className="flex flex-1 min-w-0 items-center gap-2 px-2.5 py-1.75">
          {/* Icon */}
          <div
            className="shrink-0 flex items-center justify-center w-7 h-7 rounded-[7px] transition-colors duration-150"
            style={{ backgroundColor: `var(--qc-12)` }}
          >
            {mode.icon(c)}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-[12.5px] font-medium text-zinc-800 dark:text-zinc-100 truncate leading-snug tracking-[-0.01em]">
              {metadata.name}
            </p>

            <div className="flex items-center gap-1.5 mt-0.5">
              {/* Mode pill */}
              <span
                className="inline-flex items-center gap-0.75 shrink-0 px-1.25 py-[1.5px] rounded-lg text-[6.5px] font-bold tracking-[0.04em] uppercase"
                style={{ backgroundColor: `var(--qc-12)`, color: c }}
              >
                {mode.label}
              </span>

              {/* Description / meta */}
              {metaParts.length > 0 && (
                <p className="text-[10.5px] text-zinc-400 dark:text-zinc-500 truncate leading-tight">
                  {metaParts.join(" · ")}
                </p>
              )}
            </div>
          </div>

          {/* Right slot: chevron + save dot */}
          <div className="flex flex-col items-center gap-1 shrink-0">
            <ChevronRight
              size={11}
              strokeWidth={2.5}
              className={`opacity-40 group-hover:opacity-70 group-hover:translate-x-px transition-all duration-150 ${isOpen ? "rotate-90" : ""}`}
              style={{ color: c }}
            />
            {saveState && (
              <div
                className="w-1.25 h-1.25 rounded-full opacity-85"
                style={{ backgroundColor: c }}
              />
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
