import { LucideIcon } from "lucide-react";

interface QuestsAreaSeparatorProps {
  label: string;
  count?: number;
  icon?: LucideIcon;
}

export default function QuestsAreaSeparator({
  label,
  count,
  icon: Icon,
}: QuestsAreaSeparatorProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 border-b bg-accent/60">
      {Icon && (
        <Icon
          size={12}
          strokeWidth={1.5}
          className="text-muted-foreground/80 flex-none"
        />
      )}

      <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-muted-foreground/80">
        {label}
      </span>

      {count !== undefined && (
        <span className="text-[11px] text-muted-foreground/60 tabular-nums">
          {count}
        </span>
      )}

      <div className="flex-1 h-px bg-border/70" />
    </div>
  );
}
