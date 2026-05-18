import { QUESTS_BOARD_DATA } from "@/components/quests/quests_board.data";
import fetchQuest from "@/lib/quest_ftecher";
import { useQuestsStore } from "@/stores/quests/quests.store";
import { QuestItem } from "@/types/quests/quests_item";
import {
  Star,
  Clock,
  Repeat,
  Infinity,
  Archive,
  Zap,
  TrendingUp,
  ScrollText,
  ChevronRight,
  Flame,
} from "lucide-react";

function StateBadge({ state }: { state: string }) {
  const map: Record<string, { label: string; className: string }> = {
    main: {
      label: "MAIN",
      className: "bg-amber-500/15 text-amber-400 border-amber-500/20",
    },
    ongoing: {
      label: "ONGOING",
      className: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    },
    side: {
      label: "SIDE",
      className: "bg-purple-500/15 text-purple-400 border-purple-500/20",
    },
    core: {
      label: "CORE",
      className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    },
    completed: {
      label: "COMPLETED",
      className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    },
    failed: {
      label: "FAILED",
      className: "bg-red-500/15 text-red-400 border-red-500/20",
    },
  };
  const entry = map[state?.toLowerCase()] ?? {
    label: state?.toUpperCase() ?? "—",
    className: "bg-muted/20 text-muted-foreground border-border",
  };
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-widest border ${entry.className}`}
    >
      {entry.label}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/40 mb-2">
      {children}
    </p>
  );
}

function LogEntry({ log }: { log: { content: string; created_at?: number } }) {
  return (
    <div className="flex gap-3 py-2.5 border-b border-border/30 last:border-0">
      <div className="mt-1 w-1 h-1 rounded-full bg-muted-foreground/30 flex-none" />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground/80 leading-relaxed">
          {log.content}
        </p>
        {log.created_at && (
          <p className="text-[10px] text-muted-foreground/30 mt-0.5 tabular-nums">
            {new Date(log.created_at).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3 select-none">
      <ScrollText
        size={28}
        strokeWidth={1}
        className="text-muted-foreground/20"
      />
      <p className="text-xs text-muted-foreground/30 tracking-widest uppercase">
        No quest selected
      </p>
    </div>
  );
}

function QuestDetail({ quest }: { quest: QuestItem }) {
  const { metadata, progress_params, state, level_params, logs } = quest;

  const dueDate = progress_params.due_time
    ? new Date(progress_params.due_time).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-border/40">
        <div className="flex items-start justify-between gap-3 mb-2">
          <StateBadge state={metadata.quest_state} />
          <div className="flex items-center gap-1.5">
            {state.is_high_priority_quest && (
              <Flame size={13} className="text-amber-400" />
            )}
            {state.is_archived_quest && (
              <Archive size={13} className="text-muted-foreground/40" />
            )}
          </div>
        </div>
        <h1 className="text-base font-semibold text-foreground leading-snug mt-2">
          {metadata.title}
        </h1>
        <p className="text-sm text-muted-foreground/60 leading-relaxed mt-1.5">
          {metadata.description}
        </p>
      </div>

      {/* Progress params */}
      <div className="px-5 py-4 border-b border-border/40 flex items-center gap-4">
        {progress_params.is_infinite ? (
          <div className="flex items-center gap-1.5 text-muted-foreground/50">
            <Infinity size={12} strokeWidth={1.5} />
            <span className="text-[11px]">Infinite</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 text-muted-foreground/50">
            <Repeat size={12} strokeWidth={1.5} />
            <span className="text-[11px] tabular-nums">
              {progress_params.repetitions}x
            </span>
          </div>
        )}
        {dueDate && (
          <div className="flex items-center gap-1.5 text-muted-foreground/50">
            <Clock size={12} strokeWidth={1.5} />
            <span className="text-[11px]">{dueDate}</span>
          </div>
        )}
      </div>

      {/* Rewards */}
      <div className="px-5 py-4 border-b border-border/40">
        <SectionLabel>Rewards</SectionLabel>
        <div className="flex items-center gap-3">
          {level_params.completion_exp_reword > 0 && (
            <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/15 rounded px-2 py-1">
              <Star size={11} className="text-amber-400" strokeWidth={1.5} />
              <span className="text-[11px] text-amber-400 tabular-nums font-medium">
                {level_params.completion_exp_reword} EXP
              </span>
            </div>
          )}
          {level_params.skill_forge_points > 0 && (
            <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/15 rounded px-2 py-1">
              <Zap size={11} className="text-blue-400" strokeWidth={1.5} />
              <span className="text-[11px] text-blue-400 tabular-nums font-medium">
                {level_params.skill_forge_points} SFP
              </span>
            </div>
          )}
          {level_params.talent_rewords?.length > 0 && (
            <div className="flex items-center gap-1.5 bg-purple-500/10 border border-purple-500/15 rounded px-2 py-1">
              <TrendingUp
                size={11}
                className="text-purple-400"
                strokeWidth={1.5}
              />
              <span className="text-[11px] text-purple-400 font-medium">
                {level_params.talent_rewords.length} Talent
                {level_params.talent_rewords.length > 1 ? "s" : ""}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Logs */}
      {logs?.length > 0 && (
        <div className="px-5 py-4">
          <SectionLabel>Journal ({logs.length})</SectionLabel>
          <div>
            {logs.map((log, i) => (
              <LogEntry key={i} log={log} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function MainPage() {
  const { active } = useQuestsStore();
  const found = active.quest_id ? fetchQuest(active.quest_id) : null;
  const quest = found ? found.quest : null;

  return (
    <div className="h-full">
      {quest ? <QuestDetail quest={quest} /> : <EmptyState />}
    </div>
  );
}
