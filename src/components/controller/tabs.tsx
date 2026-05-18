import { Sword, Coins, Sparkles, Heart, Settings2 } from "lucide-react";
import { ReactNode } from "react";

type Tab = {
  id: string;
  label: string;
  icon: ReactNode;
  color: string;
  activeText: string;
  activeBorder: string;
  mergeBar: string;
  inactiveBg: string;
  inactiveBorder: string;
  inactiveText: string;
  inactiveHover: string;
  url: string;
};

const TABS: Tab[] = [
  {
    id: "quests",
    label: "Quests",
    icon: <Sword size={13} />,
    color: "#D97706",
    activeText: "text-amber-700 dark:text-amber-300",
    activeBorder: "border-amber-400/80",
    mergeBar: "bg-amber-400/60",
    inactiveBg: "bg-amber-500/85",
    inactiveBorder: "border-amber-400/60",
    inactiveText: "text-amber-50",
    inactiveHover: "hover:bg-amber-400/85",
    url: "/",
  },
  {
    id: "finances",
    label: "Finances",
    icon: <Coins size={13} />,
    color: "#059669",
    activeText: "text-emerald-700 dark:text-emerald-300",
    activeBorder: "border-emerald-500/50",
    mergeBar: "bg-emerald-500/60",
    inactiveBg: "bg-emerald-600/85",
    inactiveBorder: "border-emerald-500/60",
    inactiveText: "text-emerald-50",
    inactiveHover: "hover:bg-emerald-500/85",
    url: "/finances",
  },
  {
    id: "skills",
    label: "Skills",
    icon: <Sparkles size={13} />,
    color: "#7C3AED",
    activeText: "text-violet-700 dark:text-violet-300",
    activeBorder: "border-violet-500/50",
    mergeBar: "bg-violet-500/60",
    inactiveBg: "bg-violet-600/85",
    inactiveBorder: "border-violet-500/60",
    inactiveText: "text-violet-50",
    inactiveHover: "hover:bg-violet-500/85",
    url: "/skills",
  },
  {
    id: "vows",
    label: "Vows",
    icon: <Heart size={13} />,
    color: "#E11D48",
    activeText: "text-rose-700 dark:text-rose-300",
    activeBorder: "border-rose-400/50",
    mergeBar: "bg-rose-400/60",
    inactiveBg: "bg-rose-500/85",
    inactiveBorder: "border-rose-400/60",
    inactiveText: "text-rose-50",
    inactiveHover: "hover:bg-rose-400/85",
    url: "/vows",
  },
  {
    id: "admin",
    label: "Admin",
    icon: <Settings2 size={13} />,
    color: "#71717A",
    activeText: "text-zinc-600 dark:text-zinc-300",
    activeBorder: "border-zinc-400/50",
    mergeBar: "bg-zinc-400/60",
    inactiveBg: "bg-zinc-500/85",
    inactiveBorder: "border-zinc-400/60",
    inactiveText: "text-zinc-50",
    inactiveHover: "hover:bg-zinc-400/85",
    url: "/admin",
  },
];

export default TABS;