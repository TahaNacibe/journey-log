import { Skill } from "../skills/skill";
import { Talent } from "../status/talent";

export type User = {
  user_identity: {
    id: string;
    name: string;
    pfp: string;
  };
  user_progress: {
    current_level: number;
    level_cap: number;
    next_level_cap_multi: number;
  };
  user_exp: number;
  user_talents: Talent[];
  user_skills: Skill[]
};
