export type Talent = {
  metadata: {
    id: string;
    name: string;
    description: string;
    color_code: string;
  };
  talent_progress: {
    rank: TalentRanks;
    value: number;
    rank_up_rate: number;
    rank_up_value_base: number;
  };
  talent_boost: {
    boost_end_date: number;
    boost_value: number;
  };
};

export type TalentReword = {
  talent_id: string;
  effect_value: number;
};
export type TalentRanks =
  | "F"
  | "E"
  | "D"
  | "C"
  | "B"
  | "A"
  | "S"
  | "SS"
  | "SSS"
  | "Z"
  | "EX"
  | "???";
