export type Skill = {
  metadata: {
    id: string;
    title: string;
    description: string;
    icon: string;
    color_code: string;
    created_at: number;
    updated_at: number;
    type: SkillType;
  };
  progress: {
    level: number;
    base_required_skill_forge_points: number;
    skill_forge_points_requirements_grow_rate: number;
    next_level_cap: number;
  };
  //ToDo: add the sandbox properties
};

export type SkillType = "Unique" | "Ultimate" | "High" | "Basic";
